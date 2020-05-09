import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { fetchTracklists } from 'services/memoir';
import { Tracklist } from 'services/memoir/types';

import Footer from 'components/Footer';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';
import TracklistItem from 'components/TracklistItem';

interface Props extends RoutableProps {
  page?: string;
}

interface State {
  page?: string;
  isLoading: boolean;
  tracklists: Tracklist[] | null;
  hasMore: boolean;
}

export default class TracklistsPage extends Component<Props, State> {
  private loadingTimer?: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      tracklists: null,
      hasMore: false,
    };
  }

  componentDidMount() {
    this.fetchTracklists();
  }

  componentDidUpdate(prev: Props) {
    const { page } = this.props;

    if (page !== prev.page) {
      this.onUpdatePage(prev.page);
    }
  }

  onUpdatePage(page?: string) {
    this.setState({ page });
    this.fetchTracklists();
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

  async fetchTracklists() {
    this.showLoadingIndicator();

    const { page } = this.props;
    const paged = await fetchTracklists(parseInt(page!, 10));

    this.hideLoadingIndicator();
    this.setState({ page });

    if (paged) {
      const { tracklists, hasMore } = paged;

      this.setState({ tracklists, hasMore });
    }
  }

  renderTracklists() {
    const { tracklists } = this.state;

    if (!tracklists) {
      return null;
    }

    return tracklists.map((tracklist) => (
      <TracklistItem tracklist={tracklist} />
    ));
  }

  render() {
    const { path } = this.props;
    const { page, isLoading, hasMore } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div class="tracklists">
        {this.renderTracklists()}
        <Pagination path={path!} page={parseInt(page!, 10)} hasMore={hasMore} />
        <Footer />
      </div>
    );
  }
}
