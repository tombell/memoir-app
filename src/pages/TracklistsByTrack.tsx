import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, FetchTracklistsByTrackId } from '../services/memoir/types';

import TracklistItem from '../components/TracklistItem';

interface Props extends RoutableProps {
  id?: string;
  fetchTracklistsByTrackId: FetchTracklistsByTrackId;
}

interface State {
  isLoading: boolean;
  tracklists: Tracklist[] | null;
}

export default class TracklistsByTrackPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracklists: null };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });

    const { id, fetchTracklistsByTrackId } = this.props;
    const tracklists = await fetchTracklistsByTrackId(id!);

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
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return <div>{this.renderTracklists()}</div>;
  }
}
