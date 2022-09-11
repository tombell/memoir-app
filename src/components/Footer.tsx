import Link from "components/Link";

import "./Footer.css";

const Footer = () => (
  <footer class="footer">
    <div class="footer-left">
      <Link className="footer-link" href="/tracklists/1">
        Tracklists
      </Link>
      <Link className="footer-link" href="/tracks/mostplayed">
        Most Played Tracks
      </Link>
    </div>

    <div class="footer-right">
      <Link className="footer-link" href="https://mixcloud.com/iamdjriff">
        IAMDJRIFF on Mixcloud
      </Link>
    </div>
  </footer>
);

export default Footer;
