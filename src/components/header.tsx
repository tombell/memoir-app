import Link from "~/components/link";

import logo from "~/images/logo.svg";

export default function Header() {
  return (
    <header>
      <Link href="/tracklists">
        <img width={120} height={88} src={logo} alt="Memoir" />
      </Link>
    </header>
  );
}
