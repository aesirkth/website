import React from "react";

import styles from "./index.css";
import { MarkdownWrapper } from "@components/markdown";

export const QuickLinks: React.FC = props => {
  const [first, ...rest] = React.Children.toArray(props.children);

  return (
    <MarkdownWrapper>
      <p className={styles.quickLinks}>
        <span className={styles.header}>Quick links:</span>
        {first}
        {rest.map((el, i) => (
          <React.Fragment key={i}>
            <span className={styles.separator}> </span>
            <span>{el}</span>
          </React.Fragment>
        ))}
      </p>
    </MarkdownWrapper>
  );
};
