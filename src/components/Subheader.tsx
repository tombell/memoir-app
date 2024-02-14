interface Props {
  text: string;
  center?: boolean;
}

function SubHeader({ text, center = false }: Props) {
  return (
    <h2
      class={["text-left font-bold text-white", center && "text-center"]
        .filter(Boolean)
        .join(" ")}
    >
      {text}
    </h2>
  );
}

export default SubHeader;
