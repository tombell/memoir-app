import "./Link.css";

interface Props {
  className?: string;
  href?: string;
  onClick?: any;
  children?: any;
}

const Link = ({ className, href, onClick, children }: Props) => (
  <a
    class={["link", className].filter(Boolean).join(" ")}
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);

export default Link;
