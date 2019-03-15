import React from "react";
import styles from "./style.css";
import { Column } from "@components/column";
import { Link } from "@reach/router";

export const Footer: React.FC = () => {
  return (
    <Column>
      <footer className={styles.footer}>
        <div className={styles.flex}>
          <section>
            <Link to="/">Home</Link>
          </section>
          <section>
            <Link to="/about">About</Link>
          </section>
        </div>
        <div className={styles.flex}>
          <section>
            <header>Organisation number</header>
            <div>802506-0568</div>
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
      </footer>
    </Column>
  );
};
