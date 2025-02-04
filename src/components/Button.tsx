import clsx from "clsx";

type Variant = "large" | "medium" | "small";

interface Props {
  text: string;
  variant?: Variant;
  onClick: () => void;
}

export default function Button({ text, variant = "large", onClick }: Props) {
  return (
    <button
      class={clsx(
        "rounded-sm bg-gray-800 font-bold text-white hover:bg-gray-700 active:bg-gray-800",
        {
          "px-6 py-2 text-base": variant == "large",
          "px-4 py-2 text-sm": variant == "medium",
          "px-4 py-2 text-xs": variant == "small",
        },
      )}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
