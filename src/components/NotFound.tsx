import { h } from 'preact';

export default (props: { text?: string }) => {
  const { text } = props;

  return (
    <div class="not-found">
      <h2>{text || "We can't find what you're looking for"}</h2>
    </div>
  );
};
