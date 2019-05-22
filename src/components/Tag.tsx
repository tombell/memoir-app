import { h } from 'preact';

export default (props: { label: string | number; }) => {
  const { label } = props;
  return <div class="tag-label">{label}</div>;
};
