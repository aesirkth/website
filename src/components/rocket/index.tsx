import React from "react";

import styles from "./style.css";

import { Image } from "@components/image";

export const Rocket: React.FC = () => (
  <div className={styles.rocket}>
    <Image {...require("@data/home/test1.png")} />
    <div className={styles.circle} />
  </div>
);
