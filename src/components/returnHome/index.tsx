import React from "react";

import styles from "./index.css";
import { Link } from "@reach/router";
import { Logo } from "@components/logo";

export const ReturnHomeLink: React.FC = () => {
  const isReturnHomeLink =
    typeof window !== "undefined" &&
    window.history.state &&
    window.history.state.returnHome === true;

  return (
    <div className={styles.returnHome}>
      <Logo height={50} />
      <br />
      <Link
        className={styles.link}
        to="/"
        onClick={e => {
          if (isReturnHomeLink) {
            e.preventDefault();
            window.history.back();
          }
        }}
      >
        {isReturnHomeLink ? "< return home" : "< go home"}
      </Link>
    </div>
  );
};
