import React from "react";
import styles from "./style.css";
import "!style-loader!css-loader!prismjs/themes/prism-tomorrow.css";

export const MarkdownWrapper: React.FC<{
  title?: string;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}> = props => (
  <section className={styles.markdown}>
    {props.title && <header className={styles.header}>{props.title}</header>}
    {props.readingTime && <p className={styles.readingTime}>{props.readingTime.text}</p>}
    {props.children}
  </section>
);
