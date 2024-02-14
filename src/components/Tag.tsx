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
      class={`inline-block rounded py-1 px-2 text-center text-xs font-bold text-white ${classes[color]}`}
    >
      {text}
    </div>
  );
}

export default Tag;
