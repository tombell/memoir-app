import Link from "$components/Link";

function Header() {
  return (
    <header>
      <Link href="/tracklists">
        <img width={120} height={88} src="/images/logo.svg" alt="Memoir" />
      </Link>
    </header>
  );
}

export default Header;
