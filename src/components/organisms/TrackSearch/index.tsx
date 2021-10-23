import { Component, createRef, h } from "preact";

import Results from "components/organisms/TrackSearch/Results";

import { searchTracks } from "services/memoir/tracks";
import { Track } from "services/memoir/types";

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

  render() {
    const { tracks, showResults } = this.state;

    return (
      <div class="mb-8" ref={this.ref}>
        <div class="flex justify-center">
          <input
            class="outline-none w-full p-4 text-white bg-gray-800 border border-solid border-gray-700 rounded"
            placeholder="Search tracks..."
            onInput={this.onSearchInput}
            onFocus={this.showResults}
          />
        </div>

        <Results tracks={tracks} show={showResults} onResultClick={this.hideResults} />
      </div>
    );
  }
}
