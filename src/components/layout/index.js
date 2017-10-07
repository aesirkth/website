import { h } from "preact";

import styles from "./style.scss";

const Column = (props) => (
  <section class={styles.column}>
    { props.children }
  </section>
);

export {
  Column
};