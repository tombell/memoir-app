import { h } from 'preact';
import { Link } from 'preact-router';

import styles from './Header.styles';

export default () => (
  <h1>
    <Link href="/" class={styles.header}>Memoir</Link>
  </h1>
);
