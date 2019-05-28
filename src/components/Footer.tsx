import { h } from 'preact';

export default () => {
  return (
    <footer class="footer">
      <div class="footer-left">
        <a class="footer-link" href="/tracklists/1">
          Tracklists
        </a>
        <a class="footer-link" href="/tracks/mostplayed">
          Most Played Tracks
        </a>
        <a class="footer-link" href="/about">
          About
        </a>
      </div>
      <div class="footer-right">
        <a class="footer-link" href="https://mixcloud.com/iamdjriff">
          Mixcloud
        </a>
        <a class="footer-link" href="https://twitch.tv/iamdjriff">
          Twitch
        </a>
        <a class="footer-link" href="https://facebook/iamdjriff">
          Facebook
        </a>
        <a class="footer-link" href="https://twitter.com/iamdjriff">
          Twitter
        </a>
        <a class="footer-link" href="https://instagram.com/iamdjriff_">
          Instagram
        </a>
      </div>
    </footer>
  );
};
