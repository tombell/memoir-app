import { h, Component, createRef } from 'preact';

import API, { Track } from 'memoir-api';

interface Props {}

interface State {
  showResults: boolean;
  tracks: Track[] | null;
}

export default class Search extends Component<Props, State> {
  private ref = createRef();

  private api: API;

  constructor(props: Props) {
    super(props);

    this.api = new API(MEMOIR_API_URL);

    this.state = {
      showResults: false,
      tracks: null,
    };
  }

  onBodyClick = (event: MouseEvent) => {
    if (!this.ref.current) {
      return;
    }

    if (this.ref.current.contains(event.target)) {
      return;
    }

    this.hideResults();
  };

  onSearchInput = (event: any) => {
    const { value } = event.target;

    if (value.length < 3) {
      return;
    }

    this.searchTracks(value);
  };

  showResults = () => {
    this.registerBodyClick();
    this.setState({ showResults: true });
  };

  hideResults = () => {
    this.unregisterBodyClick();
    this.setState({ showResults: false });
  };

  registerBodyClick() {
    document.addEventListener('click', this.onBodyClick);
  }

  unregisterBodyClick() {
    document.removeEventListener('click', this.onBodyClick);
  }

  async searchTracks(query: string) {
    const paged = await this.api.searchTracks(query);

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
          {tracks.map((t) => this.renderSearchResult(t))}
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
              __html: `${track.artistHighlighted} - ${track.nameHighlighted}`,
            }}
          />
        </a>
      </li>
    );
  }

  render() {
    return (
      <div class="search" ref={this.ref}>
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
