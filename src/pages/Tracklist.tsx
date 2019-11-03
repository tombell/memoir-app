import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, Track, FetchTracklist } from '../services/memoir/types';

import Footer from '../components/Footer';
import Genres from '../components/Genres';
import Loading from '../components/Loading';
import TrackItem from '../components/TrackItem';

interface Props extends RoutableProps {
  id?: string;
  fetchTracklist: FetchTracklist;
}

interface State {
  isLoading: boolean;
  tracklist: Tracklist | null;
}

export default class TracklistPage extends Component<Props, State> {
  private loadingTimer: NodeJS.Timeout | undefined;

  constructor(props: Props) {
    super(props);

    this.state = { isLoading: false, tracklist: null };
  }

  componentDidMount() {
    this.fetchTracklist();
  }

  showLoadingIndicator = () => {
    this.loadingTimer = setTimeout(
      () => this.setState({ isLoading: true }),
      1000
    );
  };

  hideLoadingIndicator = () => {
    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }

    this.setState({ isLoading: false });
  };

  async fetchTracklist() {
    this.showLoadingIndicator();

    const { id, fetchTracklist } = this.props;
    const tracklist = await fetchTracklist(id!);

    this.hideLoadingIndicator();

    this.setState({ tracklist });
  };

  static renderGenreTags(tracks?: Track[]) {
    if (!tracks) {
      return null;
    }

    const genres = [...new Set(tracks.map((track: Track) => track.genre))];

    return <Genres genres={genres} />;
  }

  static renderTracks(tracks?: Track[]) {
    if (!tracks) {
      return null;
    }

    return tracks.map((track, i) => (
      <TrackItem trackNumber={i + 1} track={track} />
    ));
  }

  render() {
    const { isLoading, tracklist } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    if (!tracklist) {
      return null;
    }

    return (
      <div class="tracklist">
        <h2 class="tracklist-header">{tracklist.name}</h2>
        <div class="tracklist-genres">
          {TracklistPage.renderGenreTags(tracklist.tracks)}
        </div>
        <div class="tracklist-tracks">
          {TracklistPage.renderTracks(tracklist.tracks)}
        </div>
        <Footer />
      </div>
    );
  }
}
