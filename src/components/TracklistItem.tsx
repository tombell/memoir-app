import Link from "~/components/Link";
import Tag from "~/components/Tag";

import { formatFriendlyDate } from "~/services/datetime";

interface Props {
  loading?: boolean;
  id?: string;
  name?: string;
  date?: Date;
  artwork?: string;
  trackCount?: number;
}

const linearGradient =
  "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%)";

export default function TracklistItem({
  loading = false,
  id,
  name,
  date,
  artwork,
  trackCount,
}: Props) {
  if (loading) {
    return (
      <div
        class="mb-2.5 animate-pulse items-center rounded-sm border border-solid border-gray-700 p-2"
        role="progressbar"
      >
        <div class="flex items-center space-x-3">
          <div class="rounded-sm border border-solid border-gray-700">
            <div class="h-20 w-20" />
          </div>

          <h3 class="m-0 w-full rounded-sm border border-solid border-gray-700 leading-5 font-bold">
            &nbsp;
          </h3>
        </div>
      </div>
    );
  }

  const backgroundImage = `${import.meta.env.VITE_MEMOIR_CDN_URL}/${artwork}`;

  const background = {
    backgroundImage: `${linearGradient}, url(${backgroundImage})`,
  };

  return (
    <Link href={`/tracklist/${id}`}>
      <div
        class="mb-2.5 items-center rounded-sm border border-solid border-gray-700 bg-cover bg-no-repeat p-2"
        style={background}
      >
        <div class="flex items-center space-x-3">
          <div class="rounded-sm border border-solid border-gray-700">
            <img
              class="h-20 w-20"
              alt={`${name} Artwork`}
              src={backgroundImage}
            />
          </div>

          <h3 class="m-0 flex-1 leading-5 font-bold">{name}</h3>

          <div class="ml-auto space-x-2">
            <Tag text={`${trackCount} Tracks`} color="lilac" />
            {date && <Tag text={formatFriendlyDate(date)} color="lightblue" />}
          </div>
        </div>
      </div>
    </Link>
  );
}
