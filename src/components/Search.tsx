import { h, Component } from 'preact';

import { Track, SearchTracks } from '../services/memoir/types';

interface Props {
  searchTracks: SearchTracks;
}

interface State {
  isLoading: boolean;
  tracks: Track[] | null;
  hasMore: boolean;
}

export default class Search extends Component<Props, State> {
  private loadingTimer?: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      tracks: null,
      hasMore: false,
    };
  }

  showLoadingIndicator = () => {
    this.loadingTimer = setTimeout(
      () => this.setState({ isLoading: true }),
      1000
    );
  };

  hideLoadingIndicator = () => {
    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }

    this.setState({ isLoading: false });
  };

  onInput = (event: any) => {
    const { value } = event.target;

    if (value.length < 3) {
      return;
    }

    this.searchTracks(value);
  };

  async searchTracks(query: string) {
    this.showLoadingIndicator();

    const { searchTracks } = this.props;
    const paged = await searchTracks(query);

    this.hideLoadingIndicator();

    if (paged) {
      const { tracks, hasMore } = paged;

      this.setState({ tracks, hasMore });
    }
  }

  render() {
    return (
      <div class="search">
        <input class="search__input" onInput={this.onInput} />
      </div>
    );
  }
}
