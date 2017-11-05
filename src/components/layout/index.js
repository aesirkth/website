import { h } from "preact";
import classnames from "classnames";

import styles from "./style.scss";

const Column = (props) => (
  <section className={classnames(props.className, props.class, styles.column)}>
    { props.children }
  </section>
);

export {
  Column
};