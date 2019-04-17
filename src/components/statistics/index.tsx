import React from "react";
import styles from "./style.css";

export const Statistics: React.FC = props => {
  return <section className={styles.statistics}>{props.children}</section>;
};

export const StatisticsEntry: React.FC<{
  title: string;
  value: string | number;
}> = props => {
  return (
    <div className={styles.statisticsEntry}>
      <div className={styles.value}>{props.value}</div>
      <header className={styles.title}>{props.title}</header>
    </div>
  );
};
