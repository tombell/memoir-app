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
  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracks: null };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });

    const { fetchMostPlayedTracks } = this.props;
    const tracks = await fetchMostPlayedTracks();

    this.setState({ isLoading: false, tracks });
  }

  render() {
    const { isLoading, tracks } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    if (!tracks) {
      return null;
    }

    return (
      <div class="most-played">
        <h2 class="most-played-header">Top Ten Most Played Tracks</h2>

        <div class="most-played-tracks">
          {tracks.map((track, i) => (
            <TrackItem trackNumber={i + 1} track={track} />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}
