import { h, Component } from 'preact';

import { Track, SearchTracks } from '../services/memoir/types';

interface Props {
  searchTracks: SearchTracks;
}

interface State {
  showResults: boolean;
  tracks: Track[] | null;
}

export default class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showResults: false,
      tracks: null,
    };
  }

  onSearchInput = (event: any) => {
    const { value } = event.target;

    if (value.length < 3) {
      return;
    }

    this.searchTracks(value);
  };

  showResults = () => {
    this.setState({ showResults: true });
  };

  hideResults = () => {
    this.setState({ showResults: false });
  };

  async searchTracks(query: string) {
    const { searchTracks } = this.props;
    const paged = await searchTracks(query);

    if (paged) {
      const { tracks } = paged;

      this.setState({ tracks, showResults: true });
    }
  }

  renderSearchResults() {
    const { tracks, showResults } = this.state;

    if (!tracks || !showResults) {
      return null;
    }

    return (
      <div class="search__results">
        <ul class="search__results-list">
          {tracks.map(t => this.renderSearchResult(t))}
        </ul>
      </div>
    );
  }

  renderSearchResult(track: Track) {
    return (
      <li class="search__results-item">
        <a href={`/track/${track.id}`} onClick={this.hideResults}>
          <span
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `${track.artist_highlighted} - ${track.name_highlighted}`,
            }}
          />
        </a>
      </li>
    );
  }

  render() {
    return (
      <div class="search">
        <div class="search__box">
          <input
            class="search__input"
            placeholder="Search tracks..."
            onInput={this.onSearchInput}
            onFocus={this.showResults}
          />
        </div>

        {this.renderSearchResults()}
      </div>
    );
  }
}
