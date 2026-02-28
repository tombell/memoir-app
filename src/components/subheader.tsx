import clsx from "clsx";

interface Props {
  center?: boolean;
  text: string;
}

export default function SubHeader({ center = false, text }: Props) {
  return <h2 class={clsx("text-left font-bold text-white", { "text-center": center })}>{text}</h2>;
}
