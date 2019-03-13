import React, { useEffect } from "react";
import { NavbarAntispace, NavbarSpace } from "@components/navbar";

import styles from "./style.css";
import { Column } from "@components/column";
import { animated, config } from "react-spring";
import { useSpring } from "react-spring";
import { Logo } from "@components/logo";
import { MastheadPlanetBottom } from "./planet";

export const Masthead: React.FC = props => {
  const height = 550;

  const [{ offset }, set] = useSpring(() => ({
    offset: 0,
    config: {
      ...config.stiff
    }
  }));

  useEffect(() => {
    function listener() {
      set({
        offset: Math.min(height, window.scrollY)
      });
    }
    listener();
    window.addEventListener("scroll", listener, { passive: true });

    return () => window.removeEventListener("scroll", listener);
  }, []);

  const transform = offset.interpolate((value: number) => `translate3d(0, ${value * 0.15}px, 0)`);

  return (
    <>
      <NavbarAntispace />
      <section className={styles.masthead} style={{ height }}>
        <animated.div
          className={styles.image}
          style={{
            transform
          }}
        />
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
