export interface Props {
  className?: string;
  href?: string;
  onClick?: any;
  children?: any;
}

const Link = ({ className, href, onClick, children }: Props) => (
  <a
    class={[
      "text-white no-underline cursor-pointer hover:text-green-600",
      className,
    ].join(" ")}
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);

export default Link;
