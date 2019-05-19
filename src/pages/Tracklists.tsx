import { h, Component } from 'preact';
import { Link, RoutableProps } from 'preact-router';

import { Tracklist } from '../services/memoir/types';

interface Props extends RoutableProps {
  fetchTracklists(): Promise<Tracklist[] | null>;
}

interface State {
  isLoading: boolean;
  tracklists: Tracklist[] | null;
}

export default class TracklistsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      tracklists: null,
    };
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

    return tracklists.map(tracklist => <p><Link href={`/${tracklist.id}`}>{tracklist.name}</Link></p>);
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div>
          <h2>Tracklists</h2>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <h2>Tracklists</h2>
        {this.renderTracklists()}
      </div>
    );
  }
}
