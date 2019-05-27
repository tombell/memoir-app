import { h } from 'preact';

interface Props {
  text: string | number;
}

export default ({ text }: Props) => <div class="tag-label">{text}</div>;
