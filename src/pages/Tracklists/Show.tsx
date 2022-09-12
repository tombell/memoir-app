import { RoutableProps } from "preact-router";

import Genres from "components/Genres";
import Link from "components/Link";
import Loading from "components/Loading";
import Subheader from "components/Subheader";
import TrackItem from "components/TrackItem";

import useGetResource from "hooks/useGetResource";

import { Tracklist } from "services/memoir/types";

import "./Show.css";

interface Props extends RoutableProps {
  id?: string;
}

const Show = ({ id }: Props) => {
  const { isLoading, data: tracklist } = useGetResource<Tracklist>(
    `/tracklists/${id}`
  );

  if (!tracklist.value) {
    return null;
  }

  return isLoading.value ? (
    <Loading />
  ) : (
    <div class="tracklists-show">
      <Subheader text={tracklist.value.name} center />

      <div class="tracklists-show-link">
        <Link href={tracklist.value.url}>Listen on Mixcloud &rarr;</Link>
      </div>

      {tracklist.value.tracks && (
        <>
          <div class="tracklists-show-genres">
            <Genres
              genres={[
                ...new Set(tracklist.value.tracks.map((track) => track.genre)),
              ]}
            />
          </div>

          {tracklist.value.tracks.map((track) => (
            <TrackItem
              id={track.id}
              artist={track.artist}
              name={track.name}
              genre={track.genre}
              bpm={track.bpm}
              camelotKey={track.key}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Show;
