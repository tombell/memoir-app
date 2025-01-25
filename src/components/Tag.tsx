export type Color = "blue" | "green" | "lightblue" | "lilac" | "purple";

const classes = {
  blue: "bg-blue-600",
  green: "bg-lime-700",
  lightblue: "bg-sky-700",
  lilac: "bg-indigo-700",
  purple: "bg-purple-600",
};

interface Props {
  text: string | number;
  color?: Color;
}

function Tag({ text, color = "green" }: Props) {
  return (
    <div
      class={`inline-block rounded-sm px-2 py-1 text-center text-xs font-bold text-white ${classes[color]}`}
    >
      {text}
    </div>
  );
}

export default Tag;
