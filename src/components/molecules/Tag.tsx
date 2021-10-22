import { h } from "preact";

type TagColor = "blue" | "green" | "lightBlue" | "lilac" | "purple";

const colors = {
  blue: "blue-600",
  green: "green-600",
  lightBlue: "blue-400",
  lilac: "indigo-500",
  purple: "purple-600",
};

export interface Props {
  text: string | number;
  color?: TagColor;
}

export default ({ text, color = "green" }: Props) => (
  <div
    class={`inline-block py-0.5 px-2 mr-2 font-bold text-xs text-center text-white rounded bg-${colors[color]}`}
  >
    {text}
  </div>
);
