import { h } from 'preact';

export default () => {
  return (
    <footer class="footer">
      <div class="footer__left">
        <a class="footer__link" href="/tracklists/1">
          Tracklists
        </a>
        <a class="footer__link" href="/tracks/mostplayed">
          Most Played Tracks
        </a>
      </div>
      <div class="footer__right">
        <a class="footer__link" href="https://mixcloud.com/iamdjriff">
          IAMDJRIFF on Mixcloud
        </a>
      </div>
    </footer>
  );
};
