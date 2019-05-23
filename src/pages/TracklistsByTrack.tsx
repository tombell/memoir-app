import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, FetchTracklistsByTrack } from '../services/memoir/types';

import TracklistItem from '../components/TracklistItem';

interface Props extends RoutableProps {
  id?: string;
  fetchTracklistsByTrack: FetchTracklistsByTrack;
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

    const { id, fetchTracklistsByTrack } = this.props;
    const tracklists = await fetchTracklistsByTrack(id!);

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
