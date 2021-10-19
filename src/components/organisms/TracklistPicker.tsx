import { css } from "g-style";
import { Fragment, h } from "preact";

import { useCallback, useMemo, useState } from "preact/hooks";

import Colors from "components/atoms/Colors";

import Tag from "components/molecules/Tag";
import FilePicker from "components/molecules/form/FilePicker";

import parse from "services/tracklists";

const tracksClassName = css({
  boxSizing: "border-box",
  width: "100%",
  padding: "1rem",
  listStylePosition: "inside",
  listStyleType: "decimal",
  background: Colors.backgroundDark,
  borderRadius: "0.1875rem",
});

const trackClassName = css({
  margin: "0.5rem 0",
  fontSize: "0.75rem",
  "&:last-of-type": {
    marginBottom: 0,
  },
});

const tagsClassName = css({
  marginTop: "0.5rem",
});

interface Props {
  onSelect: (tracks: string[][]) => void;
}

export default ({ onSelect }: Props) => {
  const [tracks, setTracks] = useState<string[][] | null>(null);

  const reader = useMemo(() => new FileReader(), []);

  const onFileRead = useCallback(() => {
    if (reader.result) {
      const parsed = parse(reader.result.toString());
      setTracks(parsed);
      onSelect(parsed);
    }
  }, [reader, onSelect]);

  const handleSelect = useCallback(
    (file: File) => {
      reader.onload = onFileRead;
      reader.readAsText(file);
    },
    [reader, onFileRead]
  );

  return (
    <>
      {!tracks && <FilePicker accept="text/plain" onSelect={handleSelect} />}

      {tracks && (
        <ol class={tracksClassName}>
          {tracks.map((track) => (
            <li class={trackClassName}>
              <p>
                {track[1]}
                {" - "}
                {track[0]}
              </p>

              <div class={tagsClassName}>
                <Tag text={track[2]} color="purple" />
                <Tag text={track[3]} color="lilac" />
                <Tag text={track[4]} color="blue" />
              </div>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};
