import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, FetchTracklists } from '../services/memoir/types';

import TracklistItem from '../components/TracklistItem';

interface Props extends RoutableProps {
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
    this.setState({ isLoading: true });

    const { fetchTracklists } = this.props;
    const tracklists = await fetchTracklists();

    this.setState({ isLoading: false, tracklists });
  }

  renderTracklists() {
    const { tracklists } = this.state;

    if (!tracklists) {
      return null;
    }

    return tracklists.map(tracklist => <TracklistItem tracklist={tracklist} />);
  }

  render() {
    const { isLoading, tracklists } = this.state;

    if (isLoading) {
      // TODO: add timeout to only show loading >2 seconds waiting.
      return (
        <div>
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

    return <div>{this.renderTracklists()}</div>;
  }
}
