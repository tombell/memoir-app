import { h } from "preact";

import Link from "components/molecules/Link";

export default () => (
  <header>
    <Link href="/tracklists/1">
      <img width={120} height={88} src="/images/logo.svg" alt="Memoir" />
    </Link>
  </header>
);
