import { h } from "preact";

import Link from "components/molecules/Link";

export interface Props {
  center?: boolean;
}

export default ({ center = false }: Props) => (
  <header class={`w-48 ${center ? "mx-auto my-0" : ""}`}>
    <Link href="/tracklists/1">
      <img width={120} height={88} src="/images/logo.svg" alt="Memoir" />
    </Link>
  </header>
);
