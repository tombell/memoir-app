import { h } from "preact";

import Link from "components/atoms/Link";

import Tag from "components/molecules/Tag";

import { formatFriendlyDate } from "services/datetime";

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
  };

  return (
    <Link href={`/tracklist/${id}`}>
      <div
        class="items-center p-2 mb-2.5 bg-no-repeat bg-cover rounded border border-gray-700 border-solid"
        style={background}
      >
        <div class="flex items-center space-x-3">
          <div class="rounded border border-gray-700 border-solid">
            <img
              class="w-20 h-20"
              alt={`${name} Artwork`}
              src={backgroundImage}
            />
          </div>

          <h3 class="flex-1 m-0 font-bold leading-5">{name}</h3>

          <div class="ml-auto space-x-2">
            <Tag text={`${trackCount} Tracks`} color="lilac" />
            <Tag text={formatFriendlyDate(date)} color="lightBlue" />
          </div>
        </div>
      </div>
    </Link>
  );
};
