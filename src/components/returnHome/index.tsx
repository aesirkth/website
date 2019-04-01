import React from "react";

import styles from "./index.css";
import { Link } from "@reach/router";
import { Logo } from "@components/logo";

export const ReturnHomeLink: React.FC = () => {
  return (
    <div className={styles.returnHome}>
      <Logo height={50} />
      <br />
      <Link className={styles.link} to="/">
        {"< return home"}
      </Link>
    </div>
  );
};
