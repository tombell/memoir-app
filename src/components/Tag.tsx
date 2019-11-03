import { h } from 'preact';

interface Props {
  text: string | number;
  color?: string;
}

export default ({ text, color }: Props) => {
  const klass = color ? `tag--${color}` : '';
  return <div class={`tag ${klass}`}>{text}</div>;
};
