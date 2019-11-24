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
        <div class="search__box">
          <input
            class="search__input"
            placeholder="Search tracks..."
            onInput={this.onInput}
          />
        </div>

        {this.renderSearchResults()}
      </div>
    );
  }

  renderSearchResults() {
    const { tracks } = this.state;

    if (!tracks) {
      return null;
    }

    return (
      <div class="search__results">
        <ul class="search__results-list">
          {tracks.map(track => (
            <li class="search__results-item">
              <a href={`/track/${track.id}`}>
                {track.artist} - {track.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
