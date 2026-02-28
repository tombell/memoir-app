import clsx from "clsx";

export type Color = "blue" | "green" | "lightblue" | "lilac" | "purple";

interface Props {
  color?: Color;
  text: string | number;
}

export default function Tag({ color = "green", text }: Props) {
  return (
    <div
      class={clsx(`inline-block rounded-sm px-2 py-1 text-center text-xs font-bold text-white`, {
        "bg-blue-600": color === "blue",
        "bg-lime-700": color === "green",
        "bg-sky-700": color === "lightblue",
        "bg-indigo-700": color === "lilac",
        "bg-purple-600": color === "purple",
      })}
    >
      {text}
    </div>
  );
}
