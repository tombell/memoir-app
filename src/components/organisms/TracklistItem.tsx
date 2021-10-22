import { css } from "g-style";
import { Fragment, h } from "preact";

import Breakpoints from "components/atoms/Breakpoints";
import Colors from "components/atoms/Colors";

import Link from "components/molecules/Link";
import Tag from "components/molecules/Tag";

import { formatFriendlyDate } from "services/datetime";

const className = css({
  alignItems: "center",
  borderRadius: "0.1875rem",
  flexWrap: "wrap",
  margin: "0 0.5rem 1rem 0.5rem",
  padding: "0.5rem",
  [Breakpoints.desktop]: {
    margin: "0 0 0.625rem 0",
  },
});

const detailsClassName = css({
  alignItems: "center",
  display: "flex",
});

const imgClassName = css({
  border: `0.0625rem solid ${Colors.greyDark}`,
  marginRight: "0.75rem",
});

const artClassName = css({
  height: "5rem",
  width: "5rem",
});

const nameClassName = css({
  flex: 1,
  fontWeight: "bold",
  lineHeight: 1.3,
  margin: 0,
});

const tagsClassName = css({
  marginLeft: 'auto',
});

export interface Props {
  id: string;
  name: string;
  date: Date;
  artwork: string;
  trackCount: number;
}

const linearGradient =
  "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%)";

export default ({ id, name, date, artwork, trackCount }: Props) => {
  const backgroundImage = `${MEMOIR_CDN_URL}/${artwork}`;

  const background = {
    backgroundImage: `${linearGradient}, url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Link href={`/tracklist/${id}`}>
      <div class={className} style={background}>
        <div class={detailsClassName}>
          <div class={imgClassName}>
            <img
              class={artClassName}
              alt={`${name} Artwork`}
              src={backgroundImage}
            />
          </div>

          <>
            <h3 class={nameClassName}>{name}</h3>

            <div class={tagsClassName}>
              <Tag text={`${trackCount} Tracks`} color="lilac" />
              <Tag text={formatFriendlyDate(date)} color="light-blue" />
            </div>
          </>
        </div>
      </div>
    </Link>
  );
};
