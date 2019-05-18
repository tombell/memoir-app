import { h, Component } from 'preact';

import { Tracklist, fetchTracklists } from '../services/memoir';

interface State {
  isLoading: boolean;
  tracklists: Tracklist[] | null;
}

export default class Tracklists extends Component<any, State> {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      tracklists: null,
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });
    const tracklists = await fetchTracklists();
    this.setState({ isLoading: false, tracklists });
  }

  renderTracklists() {
    const { tracklists } = this.state;

    if (!tracklists) {
      return null;
    }

    return tracklists.map(tracklist => <p>{tracklist.name}</p>);
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
