import { h } from 'preact';

import styles from './Tag.styles';

export default (props: { label: string | number; }) => <span class={styles.tag}>{props.label}</span>;
