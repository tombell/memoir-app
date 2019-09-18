import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, FetchTracklists } from '../services/memoir/types';

import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import TracklistItem from '../components/TracklistItem';

interface Props extends RoutableProps {
  page?: string;
  fetchTracklists: FetchTracklists;
}

interface State {
  page?: string;
  isLoading: boolean;
  tracklists: Tracklist[] | null;
  hasMore: boolean;
}

export default class TracklistsPage extends Component<Props, State> {
  private loadingTimer: NodeJS.Timeout | undefined;

  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracklists: null, hasMore: false };
  }

  componentDidMount() {
    this.fetchTracklists();
  }

  componentDidUpdate(prev: Props) {
    const { page } = this.props;

    if (page !== prev.page) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ page: prev.page });
      this.fetchTracklists();
    }
  }

  showLoadingIndicator = () => {
    this.loadingTimer = setTimeout(
      () => this.setState({ isLoading: true }),
      1000
    );
  };

  fetchTracklists = async () => {
    const { page, fetchTracklists } = this.props;

    this.showLoadingIndicator();

    const paged = await fetchTracklists(parseInt(page || '1', 10));

    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }

    this.setState({ page, isLoading: false });

    if (paged) {
      const { tracklists, hasMore } = paged;

      this.setState({ tracklists, hasMore });
    }
  };

  renderTracklists() {
    const { path } = this.props;
    const { page, tracklists, hasMore } = this.state;

    if (!tracklists || tracklists.length === 0) {
      return null;
    }

    return (
      <div class="tracklists">
        {tracklists.map(tracklist => (
          <TracklistItem tracklist={tracklist} />
        ))}
        <Pagination
          path={path!}
          page={parseInt(page || '1', 10)}
          hasMore={hasMore}
        />
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
