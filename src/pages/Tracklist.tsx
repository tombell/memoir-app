import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, Track, FetchTracklist } from '../services/memoir/types';

import Genres from '../components/Genres';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';
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
  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracklist: null };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });

    const { id, fetchTracklist } = this.props;
    const tracklist = await fetchTracklist(id!);

    this.setState({ isLoading: false, tracklist });
  }

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
      return (
        <NotFound text="The tracklist you're looking for cannot be found" />
      );
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
      </div>
    );
  }
}
