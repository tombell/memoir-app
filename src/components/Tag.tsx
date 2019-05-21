import { h } from 'preact';

import styles from './Tag.styles';

export default (props: { label: string | number; }) => {
  const { label } = props;
  return <div class={styles.label}>{label}</div>;
};
