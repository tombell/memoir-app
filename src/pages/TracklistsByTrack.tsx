import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, FetchTracklistsByTrack } from '../services/memoir/types';

import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import TracklistItem from '../components/TracklistItem';

interface Props extends RoutableProps {
  id?: string;
  page?: string;
  fetchTracklistsByTrack: FetchTracklistsByTrack;
}

interface State {
  isLoading: boolean;
  tracklists: Tracklist[] | null;
  hasMore: boolean;
}

export default class TracklistsByTrackPage extends Component<Props, State> {
  private loadingTimer: NodeJS.Timeout | undefined;

  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracklists: null, hasMore: false };
  }

  async componentWillMount() {
    this.fetchTracklists();
  }

  componentWillReceiveProps(nextProps: Props) {
    this.props = nextProps;
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
      this.setState({ tracklists: paged.tracklists, hasMore: paged.hasMore });
    }
  };

  renderTracklists() {
    const { tracklists } = this.state;

    if (!tracklists) {
      return null;
    }

    if (tracklists.length === 0) {
      return (
        <div class="no-results">
          <h2 class="no-results-header">No trackslists</h2>
        </div>
      );
    }

    return (
      <div>
        {tracklists.map(tracklist => (
          <TracklistItem tracklist={tracklist} />
        ))}
        {this.renderPagination()}
      </div>
    );
  }

  renderPagination() {
    const { page, path } = this.props;
    const { hasMore } = this.state;

    return (
      <Pagination
        path={path!}
        page={parseInt(page || '1', 10)}
        hasMore={hasMore}
      />
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
