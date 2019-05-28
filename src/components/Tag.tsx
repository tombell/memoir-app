import { h } from 'preact';

interface Props {
  text: string | number;
  color?: string;
}

export default ({ text, color }: Props) => (
  <div class={`tag-label ${color || ''}`}>{text}</div>
);
