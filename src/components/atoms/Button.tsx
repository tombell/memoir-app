export interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => (
  <button
    class="py-3 px-6 font-bold text-white bg-gray-800 rounded border-gray-700 border-solid hover:bg-gray-700"
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
