import React from "react";
import { NavbarAntispace, NavbarSpace } from "@components/navbar";

import styles from "./style.css";
import { Column } from "@components/column";
import { Logo } from "@components/logo";
import { MastheadPlanetBottom } from "./planet";

export const Masthead: React.FC = props => {
  return (
    <>
      <NavbarAntispace />
      <section className={styles.masthead}>
        <Column>
          <NavbarSpace />
          <Logo height={100} />
          <p className={styles.punchline}>{props.children}</p>
        </Column>
        <MastheadPlanetBottom />
      </section>
    </>
  );
};
