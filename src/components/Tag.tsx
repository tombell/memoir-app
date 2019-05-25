import { h } from 'preact';

export default (props: { text: string | number }) => {
  const { text } = props;
  return <div class="tag-label">{text}</div>;
};
