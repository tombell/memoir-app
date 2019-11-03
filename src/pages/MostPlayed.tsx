import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Track, FetchMostPlayedTracks } from '../services/memoir/types';

import Footer from '../components/Footer';
import Loading from '../components/Loading';
import TrackItem from '../components/TrackItem';

interface Props extends RoutableProps {
  fetchMostPlayedTracks: FetchMostPlayedTracks;
}

interface State {
  isLoading: boolean;
  tracks: Track[] | null;
}

export default class MostPlayedPage extends Component<Props, State> {
  private loadingTimer: NodeJS.Timeout | undefined;

  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracks: null };
  }

  async componentDidMount() {
    const { fetchMostPlayedTracks } = this.props;

    this.setState({ isLoading: true });

    this.showLoadingIndicator();

    const tracks = await fetchMostPlayedTracks();

    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }

    this.setState({ isLoading: false, tracks });
  }

  showLoadingIndicator = () => {
    this.loadingTimer = setTimeout(
      () => this.setState({ isLoading: true }),
      1000
    );
  };

  renderTracks() {
    const { tracks } = this.state;

    if (!tracks) {
      return null;
    }

    return tracks.map((track, i) => (
      <TrackItem trackNumber={i + 1} track={track} />
    ));
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div class="most-played">
        <h2 class="most-played-header">Top Ten Played Tracks</h2>
        <div>{this.renderTracks()}</div>
        <Footer />
      </div>
    );
  }
}
