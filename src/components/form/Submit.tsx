import { h } from 'preact';

interface Props {
  onClick: () => void;
}

export default ({ onClick }: Props) => {
  return (
    <button type="submit" class="submit" onClick={onClick}>
      Submit
    </button>
  );
};
