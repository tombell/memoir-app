import { h } from "preact";

import { Tracklist } from "services/memoir";

import formatDate from "services/datetime";

import Tag from "components/Tag";

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
      <div class="tracklist-item" style={background}>
        <div class="tracklist-item__details">
          <div class="tracklist-item__image">
            <img
              class="tracklist-item__artwork"
              alt={`${tracklist.name} Artwork`}
              src={backgroundImage}
            />
          </div>

          <div class="tracklist-item__meta">
            <h3 class="tracklist-item__name">{tracklist.name}</h3>

            <div class="tracklist-item__tags">
              <Tag text={`${tracklist.trackCount} Tracks`} color="lilac" />
              <Tag text={formatDate(new Date(tracklist.date))} color="light-blue" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
