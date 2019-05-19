import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist } from '../services/memoir/types';

import TracklistItem from '../components/TracklistItem';

import styles from './Tracklists.styles';

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

    return tracklists.map(tracklist => <TracklistItem tracklist={tracklist} />);
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div class={styles.tracklists}>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div class={styles.tracklists}>
        {this.renderTracklists()}
      </div>
    );
  }
}
