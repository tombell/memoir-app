import { h, Component } from 'preact';
import { RoutableProps } from 'preact-router';

import { Tracklist, Track } from '../services/memoir/types';

import Tag from '../components/Tag';

interface Props extends RoutableProps {
  id?: string;
  fetchTracklist(id: string): Promise<Tracklist | null>;
}

interface State {
  isLoading: boolean;
  tracklist: Tracklist | null;
}

export default class TracklistPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isLoading: false, tracklist: null };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });

    const { id, fetchTracklist } = this.props;
    const tracklist = await fetchTracklist(id!);

    this.setState({ isLoading: false, tracklist });
  }

  static renderTracks(tracks?: Track[]) {
    if (!tracks) {
      return null;
    }

    const elements = tracks.map(track => (
      <li>
        {track.artist}
        {' - '}
        {track.name}
        {' '}
        <Tag label={track.bpm} />
        <Tag label={track.genre} />
      </li>
    ));

    return <ol>{elements}</ol>;
  }

  renderTracklist() {
    const { tracklist } = this.state;

    if (!tracklist) {
      return null;
    }

    return (
      <div>
        <h3>{tracklist.name}</h3>
        {TracklistPage.renderTracks(tracklist.tracks)}
      </div>
    );
  }

  renderGenres() {
    const { tracklist } = this.state;

    if (!tracklist || !tracklist.tracks) {
      return null;
    }

    const genres = [...new Set(tracklist.tracks.map((track: Track) => track.genre))];

    return genres.map(genre => <Tag label={genre} />);
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

    return (
      <div>
        {this.renderGenres()}
        {this.renderTracklist()}
      </div>
    );
  }
}
