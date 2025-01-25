type Variant = "large" | "medium" | "small";

interface Props {
  text: string;
  variant?: Variant;
  onClick: () => void;
}

const classes = {
  large: "py-2 px-6 text-base",
  medium: "py-2 px-4 text-sm",
  small: "py-2 px-4 text-xs",
};

export default function Button({ text, variant = "large", onClick }: Props) {
  return (
    <button
      class={`rounded-sm bg-gray-800 font-bold text-white hover:bg-gray-700 active:bg-gray-800 ${classes[variant]}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
