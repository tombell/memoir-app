export type Color = "blue" | "green" | "lightblue" | "lilac" | "purple";

const classes = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  lightblue: "bg-blue-400",
  lilac: "bg-indigo-500",
  purple: "bg-purple-600",
};

interface Props {
  text: string | number;
  color?: Color;
}

const Tag = ({ text, color = "green" }: Props) => (
  <div
    class={`inline-block rounded py-1 px-2 text-center text-xs font-bold text-white ${classes[color]}`}
  >
    {text}
  </div>
);

export default Tag;
