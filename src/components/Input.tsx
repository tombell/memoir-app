import clsx from "clsx";

import ValidationErrors from "~/components/ValidationErrors";

interface Props {
  autocomplete?: string;
  errors?: string[];
  label?: string;
  name: string;
  onFocus?: (e: Event) => void;
  onInput: (value: string) => void;
  placeholder: string;
  type?: string;
  value?: string;
}

export default function Input({
  autocomplete = "off",
  errors,
  label,
  name,
  onFocus,
  onInput,
  placeholder,
  type = "text",
  value,
}: Props) {
  const hasErrors = !!errors?.length;

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

      <input
        class={clsx(
          "box-border w-full rounded-sm border border-solid p-3 text-white scheme-dark",
          {
            "border-rose-800 bg-rose-950": hasErrors,
            "border-gray-700 bg-gray-800": !hasErrors,
          },
        )}
        type={type}
        id={name}
        name={name}
        autoComplete={autocomplete}
        placeholder={placeholder}
        value={value}
        onInput={(e) => onInput(e.currentTarget.value)}
        onFocus={onFocus}
      />

      {hasErrors && <ValidationErrors errors={errors} />}
    </label>
  );
}
