export interface Props {
  text: string;
  center?: boolean;
}

const SubHeader = ({ text, center = false }: Props) => (
  <h2 class={`font-bold text-white ${center ? "text-center" : "text-left"}`}>
    {text}
  </h2>
);

export default SubHeader;
