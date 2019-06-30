import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, FetchTracklistsByTrack } from '../services/memoir/types';

import Footer from '../components/Footer';
import Loading from '../components/Loading';
import TracklistItem from '../components/TracklistItem';

interface Props extends RoutableProps {
  id?: string;
  page?: string;
  fetchTracklistsByTrack: FetchTracklistsByTrack;
}

interface State {
  isLoading: boolean;
  tracklists: Tracklist[] | null;
}

export default class TracklistsByTrackPage extends Component<Props, State> {
  private loadingTimer: NodeJS.Timeout | undefined;

  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracklists: null };
  }

  async componentWillMount() {
    this.fetchTracklists();
  }

  showLoadingIndicator = () => {
    this.loadingTimer = setTimeout(
      () => this.setState({ isLoading: true }),
      1000
    );
  };

  fetchTracklists = async () => {
    const { id, page, fetchTracklistsByTrack } = this.props;

    this.showLoadingIndicator();

    const paged = await fetchTracklistsByTrack(id!, parseInt(page || '1', 10));

    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }

    this.setState({ isLoading: false });

    if (paged) {
      this.setState({ tracklists: paged.tracklists });
    }
  };

  renderTracklists() {
    const { tracklists } = this.state;

    if (!tracklists || tracklists.length === 0) {
      return null;
    }

    return (
      <div>
        {tracklists.map(tracklist => (
          <TracklistItem tracklist={tracklist} />
        ))}
        <Footer />
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return this.renderTracklists();
  }
}
