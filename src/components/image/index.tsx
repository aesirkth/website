import React, { useMemo, useCallback } from "react";

import { useSpring, animated, config } from "react-spring";
import styles from "./style.css";

const trans = (x: number, y: number, s: number) =>
  `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) scale(${s})`;

export const Image: React.FC<{
  src: string;
  srcSet: string;
  images: { path: string; width: number; height: number }[];
  caption?: string;
}> = props => {
  const maxSize = useMemo(() => {
    const images = [...props.images];
    images.sort((a, b) => b.width - a.width);
    return images[0].path;
  }, [props.images]);

  const [animatedProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { ...config.wobbly }
  }));

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const { clientX: x, clientY: y, currentTarget: target } = e;
      const rect = target.getBoundingClientRect();

      const xValue = ((x - rect.left) / rect.width) * 2 - 1;
      const yValue = ((y - rect.top) / rect.height) * 2 - 1;

      const rate = 3;

      set({ xys: [xValue * rate, yValue * rate, 1.01] });
    },
    [set]
  );

  const onMouseLeave = useCallback(
    (_e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      set({ xys: [0, 0, 1] });
    },
    [set]
  );

  return (
    <div className={styles.float}>
      <animated.a
        {...{ prefetch: "false" } as any}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ transform: animatedProps.xys.interpolate(trans as any) }}
        className={styles.opener}
        href={maxSize}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          data-react-img
          className={styles.image}
          src={props.src}
          srcSet={props.srcSet}
          alt={props.caption || "An image"}
        />
        {props.caption && (
          <>
            <div className={styles.gradient} />
            <header className={styles.caption}>{props.caption}</header>
          </>
        )}
      </animated.a>
    </div>
  );
};

export const Images: React.FC = props => (
  <section className={styles.images}>{props.children}</section>
);
