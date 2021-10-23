import { Component, createRef, h } from "preact";

import Link from "components/molecules/Link";

import { searchTracks } from "services/memoir/tracks";
import { Track } from "services/memoir/types";
import highlight from "services/search";

interface State {
  showResults: boolean;
  tracks: Track[] | null;
}

export default class Search extends Component<{}, State> {
  private ref = createRef();

  constructor(props: {}) {
    super(props);

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
    document.addEventListener("click", this.onBodyClick);
  }

  unregisterBodyClick() {
    document.removeEventListener("click", this.onBodyClick);
  }

  async searchTracks(query: string) {
    const tracks = await searchTracks(query);

    if (tracks) {
      this.setState({ tracks, showResults: true });
    }
  }

  renderSearchResults() {
    const { tracks, showResults } = this.state;

    if (!tracks || !showResults) {
      return null;
    }

    return (
      <div class="absolute z-10 box-border w-1/2 p-2.5 bg-gray-700 shadow-md rounded">
        <ul class="p-0 m-0 list-none">
          {tracks.map((t) => this.renderSearchResult(t))}
        </ul>
      </div>
    );
  }

  renderSearchResult(track: Track) {
    return (
      <li class="truncate mx-2 my-2.5">
        <Link href={`/tracks/${track.id}`} onClick={this.hideResults}>
          <span
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `${highlight(track.artistHighlighted)} - ${highlight(
                track.nameHighlighted
              )}`,
            }}
          />
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div class="mb-4" ref={this.ref}>
        <div class="flex justify-center">
          <input
            class="outline-none w-full p-4 text-white bg-gray-700 rounded"
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
