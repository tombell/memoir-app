import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, fetchTracklist } from '../services/memoir';

interface Props extends RoutableProps {
  id?: string;
}

interface State {
  isLoading: boolean;
  tracklist: Tracklist | null;
}

export default class TracklistPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      tracklist: null,
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });
    const { id } = this.props;
    const tracklist = await fetchTracklist(id!);
    this.setState({ isLoading: false, tracklist });
  }

  renderTracklist() {
    const { tracklist } = this.state;

    if (!tracklist) {
      return null;
    }

    return (
      <h3>
        {tracklist.name}
      </h3>
    );
  }

  render() {
    const { id } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div>
          <h2>
            Tracklist:&nbsp;
            {id}
          </h2>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <h2>
          Tracklist:&nbsp;
          {id}
        </h2>
        {this.renderTracklist()}
      </div>
    );
  }
}
