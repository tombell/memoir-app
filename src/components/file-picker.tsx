import clsx from "clsx";
import { useCallback, useRef } from "preact/hooks";

import ValidationErrors from "~/components/validation-errors";

interface Props {
  accept: string;
  errors?: string[];
  label?: string;
  name: string;
  onSelect: (file: File) => void;
}

export default function FilePicker({
  accept,
  errors,
  label,
  name,
  onSelect,
}: Props) {
  const input = useRef<HTMLInputElement>(null);

  const hasErrors = !!errors?.length;

  const handleChange = useCallback(() => {
    if (input.current?.files) {
      const file = input.current.files[0];
      onSelect(file);
    }
  }, [onSelect]);

  return (
    <label class="flex flex-col gap-2">
      {label && (
        <span
          class={clsx("block font-bold", {
            "text-rose-600": hasErrors,
            "text-white": !hasErrors,
          })}
        >
          {label}
        </span>
      )}

      <div>
        <input
          class={clsx(
            "box-border w-full rounded-sm border border-solid p-3 text-white scheme-dark file:mr-4 file:cursor-pointer file:rounded-full file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-900 hover:file:bg-violet-100",
            {
              "border-rose-800 bg-rose-950": hasErrors,
              "border-gray-700 bg-gray-800": !hasErrors,
            },
          )}
          name={name}
          type="file"
          ref={input}
          accept={accept}
          onChange={handleChange}
        />
      </div>

      {hasErrors && <ValidationErrors errors={errors} />}
    </label>
  );
}
