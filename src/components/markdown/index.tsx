import React from "react";
import styles from "./style.css";
import "prismjs/themes/prism-tomorrow.css";
import clsx from "clsx";

const MarkdownHeader: React.FC<{
  leftAlign: boolean;
  prefix?: string;
  title: string;
  subTitle?: string;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}> = props => (
  <header className={clsx(styles.header, { [styles.leftAlign]: props.leftAlign })}>
    <div className={styles.box}>
      <div className={styles.title}>
        {props.prefix && <span className={styles.prefix}>{props.prefix}</span>}
        {props.title}
      </div>
      {props.subTitle && <div className={styles.subTitle}>{props.subTitle}</div>}
      {props.readingTime && <div className={styles.readingTime}>{props.readingTime.text}</div>}
    </div>
  </header>
);

export const MarkdownWrapper: React.FC<{
  leftAlign?: boolean;
  id?: string;
  prefix?: string;
  title?: string;
  subTitle?: string;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}> = props => (
  <section id={props.id} className={styles.markdown}>
    {props.title && (
      <>
        <MarkdownHeader
          prefix={props.prefix}
          leftAlign={props.leftAlign || false}
          title={props.title}
          subTitle={props.subTitle}
          readingTime={props.readingTime}
        />
        {!props.leftAlign && <hr />}
      </>
    )}
    {props.children}
  </section>
);
