import { h } from "preact";

import Link from "components/molecules/Link";

export default () => (
  <footer class="flex font-bold text-xs">
    <div class="flex-1">
      <Link className="inline mb-2 mr-4" href="/tracklists/1">
        Tracklists
      </Link>
      <Link className="inline mb-2 mr-4" href="/tracks/mostplayed">
        Most Played Tracks
      </Link>
    </div>

    <div class="flex flex-1 justify-end">
      <Link className="inline mb-2 mr-4" href="https://mixcloud.com/iamdjriff">
        IAMDJRIFF on Mixcloud
      </Link>
    </div>
  </footer>
);
