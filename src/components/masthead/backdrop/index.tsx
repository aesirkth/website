import React from "react";
import { animated, useSpring, config } from "react-spring";

import styles from "./style.css";
import { BackdropMountains } from "./mountains";
import { BackdropDetails } from "./details";
import { useWindowScroll } from "@hooks/useWindowScroll";

const height = 550;

export const Backdrop = () => {
  const [{ offset }, set] = useSpring(() => ({
    offset: 0,
    config: {
      ...config.stiff
    }
  }));

  useWindowScroll(
    true,
    scroll => {
      set({
        offset: scroll
      });
    },
    0,
    height
  );

  const transform = offset.interpolate((value: number) => `translate3d(0, ${value * 0.05}px, 0)`);

  return (
    <>
      <animated.div className={styles.container} style={{ transform }}>
        <animated.svg
          className={styles.backdrop}
          viewBox="0 0 2494 298"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <BackdropMountains />
        </animated.svg>
      </animated.div>
      <div className={styles.container}>
        <svg
          className={styles.backdrop}
          viewBox="0 0 2494 298"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <BackdropDetails />
        </svg>
      </div>
    </>
  );
};
