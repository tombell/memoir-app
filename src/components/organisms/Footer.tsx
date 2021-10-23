import { h } from "preact";

import Link from "components/molecules/Link";

export default () => (
  <footer class="flex font-bold text-xs">
    <div class="flex-1 space-x-4">
      <Link className="inline" href="/tracklists/1">
        Tracklists
      </Link>
      <Link className="inline" href="/tracks/mostplayed">
        Most Played Tracks
      </Link>
    </div>

    <div class="flex flex-1 justify-end">
      <Link className="inline" href="https://mixcloud.com/iamdjriff">
        IAMDJRIFF on Mixcloud
      </Link>
    </div>
  </footer>
);
