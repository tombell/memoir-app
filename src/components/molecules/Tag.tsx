import { h } from "preact";

type TagColor = "blue" | "green" | "lightBlue" | "lilac" | "purple";

const colors = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  lightBlue: "bg-blue-400",
  lilac: "bg-indigo-500",
  purple: "bg-purple-600",
};

export interface Props {
  text: string | number;
  color?: TagColor;
}

export default ({ text, color = "green" }: Props) => (
  <div
    class={`inline-block py-0.5 px-2 mr-2 font-bold text-xs text-center text-white rounded ${colors[color]}`}
  >
    {text}
  </div>
);
