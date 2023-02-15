interface Props {
  text: string;
  variant?: "large" | "medium" | "small";
  onClick: () => void;
}

const classes = {
  large: "",
  medium: "py-2 px-4 text-sm",
  small: "py-2 px-4 text-xs",
};

const Button = ({ text, variant = "large", onClick }: Props) => (
  <button
    class={`py-2 px-6 font-bold text-base text-white bg-gray-800 rounded border-gray-700 border-solid hover:bg-gray-700 ${classes[variant]}`}
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
