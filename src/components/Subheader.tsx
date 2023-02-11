import "./SubHeader.css";

interface Props {
  text: string;
  center?: boolean;
}

const SubHeader = ({ text, center = false }: Props) => (
  <h2
    class={["subheader", center && "subheader-center"]
      .filter(Boolean)
      .join(" ")}
  >
    {text}
  </h2>
);

export default SubHeader;
