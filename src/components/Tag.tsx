import "./Tag.css";

type TagColor = "blue" | "green" | "lightblue" | "lilac" | "purple";

export interface Props {
  text: string | number;
  color?: TagColor;
}

const Tag = ({ text, color = "green" }: Props) => (
  <div class={`tag tag-${color}`}>{text}</div>
);

export default Tag;
