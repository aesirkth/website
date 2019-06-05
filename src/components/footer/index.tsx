import React from "react";
import styles from "./style.css";
import { Column } from "@components/column";
import { Link } from "@reach/router";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Column>
        <header className={styles.name}>Association of Engineering Students in Rocketry</header>
        <div className={styles.flex}>
          <section>
            <header>Organisation number</header>
            <div>802508-0568</div>
          </section>
          <section>
            <header>Location</header>
            <div>Drottning Kristinas väg 15-19, 114 28 Stockholm, Sweden</div>
          </section>
          <section>
            <header>Contact us</header>
            <div>
              <Link to="mailto:contact@aesir.se">contact@aesir.se</Link>
            </div>
          </section>
        </div>
      </Column>
    </footer>
  );
};
