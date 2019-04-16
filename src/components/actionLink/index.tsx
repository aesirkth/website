import React from "react";

import styles from "./style.css";
import { Link } from "@reach/router";

export const ActionLink: React.FC<{ to: string }> = props => (
  <p>
    <Link className={styles.link} to={props.to} state={{ returnHome: true }}>
      <span className={styles.action}>
        {props.children}
        <svg className={styles.icon}>
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </span>
    </Link>
  </p>
);
