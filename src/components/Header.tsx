import { h } from 'preact';
import { Link } from 'preact-router';

import styles from './Header.styles';

export default () => (
  <h1>
    <Link href="/" class={styles.link}>Memoir</Link>
  </h1>
);
