import { h } from "preact";

interface Props {
  text: string;
}

export default ({ text }: Props) => <h2 class="subheader">{text}</h2>;
