import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, FetchTracklists } from '../services/memoir/types';

import Loading from '../components/Loading';
import TracklistItem from '../components/TracklistItem';

interface Props extends RoutableProps {
  page?: number;
  fetchTracklists: FetchTracklists;
}

interface State {
  isLoading: boolean;
  tracklists: Tracklist[] | null;
}

export default class TracklistsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracklists: null };
  }

  async componentWillMount() {
    const { page = 1, fetchTracklists } = this.props;

    this.setState({ isLoading: true });

    const paged = await fetchTracklists(page);

    this.setState({ isLoading: false });

    if (paged) {
      this.setState({ tracklists: paged.tracklists });
    }
  }

  static renderTracklists(tracklists: Tracklist[] | null) {
    if (!tracklists) {
      return (
        <div class="loading-error">
          <h2 class="loading-error-header">Unable to load tracklists</h2>
        </div>
      );
    }

    if (tracklists.length === 0) {
      return (
        <div class="no-results">
          <h2 class="no-results-header">No trackslists</h2>
        </div>
      );
    }

    return tracklists.map(tracklist => <TracklistItem tracklist={tracklist} />);
  }

  render() {
    const { isLoading, tracklists } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return <div>{TracklistsPage.renderTracklists(tracklists)}</div>;
  }
}
