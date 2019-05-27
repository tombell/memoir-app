import { h } from 'preact';

interface Props {
  text?: string;
}

export default ({ text }: Props) => {
  return (
    <div class="not-found">
      <h2>{text || "We can't find what you're looking for"}</h2>
    </div>
  );
};
