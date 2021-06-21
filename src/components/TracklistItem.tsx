import { h } from "preact";
import { css } from "g-style";

import formatDate from "services/datetime";
import { Tracklist } from "services/memoir";

import Breakpoints from "components/atoms/Breakpoints";

import Tag from "components/Tag";

const className = css({
  flexWrap: "wrap",
  alignItems: "center",
  padding: "0.5rem",
  margin: "0 0.5rem 1rem 0.5rem",
  borderRadius: "0.1875rem",
  [Breakpoints.desktop]: {
    margin: "0 0 0.625rem 0",
  },
});

const detailsClassName = css({
  display: "flex",
  alignItems: "center",
});

const imgClassName = css({
  marginRight: "0.75rem",
  /* border: 0.0625rem solid darken($grey, 35%); */
});

const artClassName = css({
  width: "5rem",
  height: "5rem",
});

const nameClassName = css({
  margin: "0 0 0.5rem 0",
  fontWeight: "bold",
  lineHeight: 1.3,
});

interface Props {
  tracklist: Tracklist;
}

const linearGradient =
  "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%,rgba(0, 0, 0, 0.6) 100%)";

export default ({ tracklist }: Props) => {
  const backgroundImage = `${MEMOIR_CDN_URL}/${tracklist.artwork}`;

  const background = {
    backgroundImage: `${linearGradient}, url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <a href={`/tracklist/${tracklist.id}`}>
      <div class={className} style={background}>
        <div class={detailsClassName}>
          <div class={imgClassName}>
            <img
              class={artClassName}
              alt={`${tracklist.name} Artwork`}
              src={backgroundImage}
            />
          </div>

          <div>
            <h3 class={nameClassName}>{tracklist.name}</h3>

            <div>
              <Tag text={`${tracklist.trackCount} Tracks`} color="lilac" />
              <Tag
                text={formatDate(new Date(tracklist.date))}
                color="light-blue"
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
