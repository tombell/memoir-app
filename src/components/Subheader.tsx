interface Props {
  text: string;
  center?: boolean;
}

const SubHeader = ({ text, center = false }: Props) => (
  <h2
    class={["font-bold text-left text-white", center && "text-center"]
      .filter(Boolean)
      .join(" ")}
  >
    {text}
  </h2>
);

export default SubHeader;
