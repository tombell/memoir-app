import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, FetchTracklists } from '../services/memoir/types';

import LoadingSpinner from '../components/LoadingSpinner';
import TracklistItem from '../components/TracklistItem';

interface Props extends RoutableProps {
  page?: number;
  fetchTracklists: FetchTracklists;
}

interface State {
  isLoading: boolean;
  tracklists: Tracklist[] | null;
  hasMore: boolean;
}

export default class TracklistsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracklists: null, hasMore: false };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });

    const { page = 1, fetchTracklists } = this.props;

    const paged = await fetchTracklists(page);

    if (paged) {
      this.setState({ isLoading: false, ...paged });
    }
  }

  renderTracklists() {
    const { tracklists } = this.state;

    if (!tracklists) {
      return null;
    }

    return tracklists.map(tracklist => <TracklistItem tracklist={tracklist} />);
  }

  render() {
    const { isLoading, tracklists, hasMore } = this.state;

    if (isLoading) {
      // TODO: add timeout to only show loading >2 seconds waiting.
      return (
        <div>
          <LoadingSpinner />
          <p>Loading...</p>
        </div>
      );
    }

    if (!tracklists) {
      // TODO: error getting tracklists.
    }

    if (tracklists && tracklists.length === 0) {
      // TODO: no tracklists found.
    }

    return (
      <div>
        {this.renderTracklists()}
        {hasMore && <p>TODO: pagination</p>}
      </div>
    );
  }
}
