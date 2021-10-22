import { css } from "g-style";
import { Component, createRef, h } from "preact";

import Breakpoints from "components/atoms/Breakpoints";
import Colors from "components/atoms/Colors";

import Link from "components/molecules/Link";

import { searchTracks } from "services/memoir/tracks";
import { Track } from "services/memoir/types";

const className = css({
  marginBottom: "1rem",
});

const boxClassName = css({
  display: "flex",
  justifyContent: "center",
});

const inputClassName = css({
  boxSizing: "border-box",
  width: "90vw",
  padding: "1rem",
  fontSize: "1rem",
  color: Colors.primary,
  background: Colors.backgroundDark,
  border: 0,
  borderRadius: "0.1875rem",
  outline: 0,
  [Breakpoints.desktop]: {
    width: "100%",
  },
});

const resultsClassName = css({
  position: "absolute",
  zIndex: 2,
  boxSizing: "border-box",
  width: "100vw",
  padding: "0.625rem",
  background: Colors.backgroundDark,
  boxShadow: "0 0.3125rem 0.9375rem rgba(10, 10, 10, 0.3)",
  [Breakpoints.desktop]: {
    width: "50rem",
  },
});

const resultsListClassName = css({
  padding: 0,
  margin: 0,
  listStyle: "none",
});

const resultsItemClassName = css({
  margin: "0.625rem 0.5rem",
  [Breakpoints.desktop]: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  b: {
    fontStyle: "italic",
    fontWeight: "400",
    color: Colors.lilac,
  },
});

interface Props {}

interface State {
  showResults: boolean;
  tracks: Track[] | null;
}

export default class Search extends Component<Props, State> {
  private ref = createRef();

  constructor(props: Props) {
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
      <div class={resultsClassName}>
        <ul class={resultsListClassName}>
          {tracks.map((t) => this.renderSearchResult(t))}
        </ul>
      </div>
    );
  }

  renderSearchResult(track: Track) {
    return (
      <li class={resultsItemClassName}>
        <Link href={`/tracks/${track.id}`} onClick={this.hideResults}>
          <span
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `${track.artistHighlighted} - ${track.nameHighlighted}`,
            }}
          />
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div class={className} ref={this.ref}>
        <div class={boxClassName}>
          <input
            class={inputClassName}
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
