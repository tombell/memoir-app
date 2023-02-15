interface Props {
  className?: string;
  href?: string;
  onClick?: any;
  children?: any;
}

const Link = ({ className, href, onClick, children }: Props) => (
  <a
    class={[
      "cursor-pointer text-white no-underline hover:text-green-600",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);

export default Link;
