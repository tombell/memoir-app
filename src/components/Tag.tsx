type TagColor = "blue" | "green" | "lightblue" | "lilac" | "purple";

const classes = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  lightblue: "bg-blue-400",
  lilac: "bg-indigo-500",
  purple: "bg-purple-600",
};

interface Props {
  text: string | number;
  color?: TagColor;
}

const Tag = ({ text, color = "green" }: Props) => (
  <div
    class={`inline-block py-0.5 px-2 text-xs font-bold text-center text-white rounded ${classes[color]}`}
  >
    {text}
  </div>
);

export default Tag;
