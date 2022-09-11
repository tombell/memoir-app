import Link from "components/atoms/Link";

const Header = () => (
  <header>
    <Link href="/tracklists/1">
      <img width={120} height={88} src="/images/logo.svg" alt="Memoir" />
    </Link>
  </header>
);

export default Header;
