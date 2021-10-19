import { h, Fragment } from "preact";
import { useCallback } from "preact/hooks";
import { RoutableProps } from "preact-router";
import { css } from "g-style";

import { patchTracklist } from "services/memoir/tracklists";

import Input from "components/molecules/form/Input";
import Submit from "components/molecules/form/Submit";

import Subheader from "components/molecules/Subheader";
import TrackItem from "components/organisms/TrackItem";

import useTracklist from "hooks/useTracklist";

import { formatYearMonthDay } from "services/datetime";

const formClassName = css({
  marginBottom: "1rem",
});

interface Props extends RoutableProps {
  id?: string;
}

export default ({ id }: Props) => {
  const { tracklist } = useTracklist(id!);

  const handleNameInput = useCallback(
    (e: Event) => {
      tracklist!.name = (e.target as HTMLInputElement).value;
    },
    [tracklist]
  );

  const handleDateInput = useCallback(
    (e: Event) => {
      tracklist!.date = new Date((e.target as HTMLInputElement).value);
    },
    [tracklist]
  );

  const handleUrlInput = useCallback(
    (e: Event) => {
      tracklist!.url = (e.target as HTMLInputElement).value;
    },
    [tracklist]
  );

  const handleSubmit = useCallback(async () => {
    if (tracklist) {
      await patchTracklist(id!, tracklist);
    }
  }, [tracklist, id]);

  return (
    <>
      <Subheader text="Edit Tracklist" />

      {tracklist && (
        <>
          <div class={formClassName}>
            <Input
              name="name"
              text="Name"
              type="text"
              value={tracklist.name}
              onInput={handleNameInput}
            />

            <Input
              name="date"
              text="Date"
              type="date"
              value={formatYearMonthDay(tracklist.date)}
              onInput={handleDateInput}
            />

            <Input
              name="url"
              text="URL"
              type="text"
              value={tracklist.url}
              onInput={handleUrlInput}
            />

            <Submit onClick={handleSubmit} />
          </div>

          <>
            {tracklist.tracks!.map((track) => (
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
        </>
      )}
    </>
  );
};
