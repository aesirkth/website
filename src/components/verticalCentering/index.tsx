import React from "react";

import styles from "./style.css";

export const VerticalCentering: React.FC = props => (
  <div className={styles.centering}>
    <div>{props.children}</div>
  </div>
);
