import "./Button.css";

export interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => (
  <button class="button" type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
