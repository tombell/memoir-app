import { h, Component, createRef } from "preact";
import { css } from "g-style";

import API, { Track } from "services/memoir";

import Breakpoints from "components/atoms/Breakpoints";
import Colors from "components/atoms/Colors";

import Link from "components/Link";

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
  /* TODO: background: darken($background-color, 5%) */
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
  /* TODO: background: darken($background-color, 5%) */
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
    document.addEventListener("click", this.onBodyClick);
  }

  unregisterBodyClick() {
    document.removeEventListener("click", this.onBodyClick);
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
        <Link href={`/track/${track.id}`} onClick={this.hideResults}>
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
