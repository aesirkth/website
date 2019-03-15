import React, { useMemo, useState, useLayoutEffect, useRef } from "react";

import { animated } from "react-spring";
import styles from "./style.css";
import { useCursorRotation } from "@hooks/useCursorRotation";
import clsx from "clsx";

function useMaxSize(images: { path: string; width: number; height: number }[]) {
  return useMemo(() => {
    const sortableImages = [...images];
    sortableImages.sort((a, b) => b.width - a.width);
    return sortableImages[0].path;
  }, [images]);
}

export const Image: React.FC<{
  width: number;
  height: number;
  placeholder: string;
  src: string;
  srcSet: string;
  images: { path: string; width: number; height: number }[];
  caption?: string;
}> = props => {
  const maxSize = useMaxSize(props.images);
  const { transform, onMouseMove, onMouseLeave } = useCursorRotation(1);

  const [loaded, setLoaded] = useState(false);
  const [initiallyLoaded, setInitiallyLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    if (imageRef.current == null) {
      return;
    }
    if (imageRef.current.complete) {
      setLoaded(true);
      setInitiallyLoaded(true);
      return;
    }
  }, []);

  return (
    <div className={styles.float}>
      <animated.a
        {...{ prefetch: "false" } as any}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ transform }}
        className={styles.opener}
        href={maxSize}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div
          className={clsx(styles.placeholder, {
            [styles.loaded]: loaded,
            [styles.initiallyLoaded]: initiallyLoaded
          })}
          style={{
            paddingBottom: ((props.height / props.width) * 100).toFixed(4) + "%",
            backgroundImage: `url('${props.placeholder}')`
          }}
        />
        <img
          ref={imageRef}
          data-react-img
          onLoad={() => setLoaded(true)}
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
