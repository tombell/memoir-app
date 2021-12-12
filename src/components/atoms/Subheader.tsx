import { h } from "preact";

export interface Props {
  text: string;
  center?: boolean;
}

export default ({ text, center = false }: Props) => (
  <h2 class={`font-bold text-white ${center ? "text-center" : "text-left"}`}>
    {text}
  </h2>
);
