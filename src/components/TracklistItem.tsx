import Link from "components/Link";
import Tag from "components/Tag";

import { formatFriendlyDate } from "services/datetime";

import "./TracklistItem.css";

export interface Props {
  loading?: boolean;
  id?: string;
  name?: string;
  date?: Date;
  artwork?: string;
  trackCount?: number;
}

const linearGradient =
  "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%)";

const TracklistItem = ({
  loading = false,
  id,
  name,
  date,
  artwork,
  trackCount,
}: Props) => {
  if (loading) {
    return (
      <div class="tracklist-item-loading">
        <div class="tracklist-item-loading-container">
          <div class="tracklist-item-loading-artwork">
            <div class="tracklist-item-artwork" />
          </div>

          <h3 class="tracklist-item-loading-name">&nbsp;</h3>
        </div>
      </div>
    );
  }

  const backgroundImage = `${MEMOIR_CDN_URL}/${artwork}`;

  const background = {
    backgroundImage: `${linearGradient}, url(${backgroundImage})`,
  };

  return (
    <Link href={`/tracklist/${id}`}>
      <div class="tracklist-item" style={background}>
        <div class="tracklist-item-container">
          <div class="tracklist-item-artwork-container">
            <img
              class="tracklist-item-artwork"
              alt={`${name} Artwork`}
              src={backgroundImage}
            />
          </div>

          <h3 class="tracklist-item-name">{name}</h3>

          <div class="tracklist-item-tags">
            <Tag text={`${trackCount} Tracks`} color="lilac" />
            <Tag text={formatFriendlyDate(date!)} color="lightblue" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TracklistItem;
