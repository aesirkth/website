import React, { useMemo, useCallback } from "react";

import { useSpring, animated, config } from "react-spring";
import styles from "./style.css";
import { useCursorRotation } from "@hooks/useCursorRotation";

const trans = (x: number, y: number, s: number) =>
  `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) scale(${s})`;

export const Image: React.FC<{
  src: string;
  srcSet: string;
  images: { path: string; width: number; height: number }[];
  caption?: string;
}> = props => {
  const maxSize = useMemo(() => {
  const { transform, onMouseMove, onMouseLeave } = useCursorRotation(1);
    images.sort((a, b) => b.width - a.width);
    return images[0].path;
  }, [props.images]);

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
