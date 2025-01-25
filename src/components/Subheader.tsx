interface Props {
  text: string;
  center?: boolean;
}

export default function SubHeader({ text, center = false }: Props) {
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
