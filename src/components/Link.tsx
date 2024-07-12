import type { ComponentChildren, JSX } from "preact";

interface Props {
  className?: string;
  href?: string;
  onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
  children: ComponentChildren;
}

function Link({ className, href, onClick, children }: Props) {
  return (
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
}

export default Link;
