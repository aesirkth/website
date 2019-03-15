import React, { useCallback, useState, useEffect } from "react";

import styles from "./style.css";
import { useSpring, animated, config } from "react-spring";
import { useGesture, GestureState } from "react-with-gesture";

export const NavbarLink: React.FC<{ href: string; icon: string; title: string }> = props => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: {
      ...config.stiff
    }
  }));

  const [indicatorProps, setIndicator] = useSpring(() => ({
    opacity: 0,
    scale: 0.6,
    config: {
      ...config.stiff
    }
  }));

  const gesture = useCallback((state: GestureState) => {
    const velocity = Math.max(1, Math.min(8, state.velocity));
    set({
      xy: state.down ? state.delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 }
    });
  }, []);

  const [hovering, setHovering] = useState(false);
  const [dragging, setDragging] = useState(false);

  const onUp = useCallback(
    (state: GestureState) => {
      setDragging(false);
      setHovering(false);
      return gesture(state);
    },
    [setDragging, gesture]
  );

  const onDown = useCallback(
    (state: GestureState) => {
      setDragging(true);
      return gesture(state);
    },
    [setDragging, gesture]
  );

  const [bind] = useGesture({
    passive: true,
    touch: false,
    mouse: true,
    onUp,
    onMove: gesture,
    onDown
  });

  /*
  ,
    ({ down, delta, velocity }) => {
      velocity = Math.max(1, Math.min(8, velocity));
      set({
        xy: down ? delta : [0, 0],
        config: { mass: velocity, tension: 500 * velocity, friction: 50 }
      });
    }
    */

  useEffect(() => {
    if (dragging) {
      setIndicator({
        opacity: 0.5,
        scale: 1.05
      });
    } else if (hovering) {
      setIndicator({
        opacity: 0.4,
        scale: 0.95
      });
    } else {
      setIndicator({
        opacity: 0,
        scale: 0.6
      });
    }
  }, [dragging, hovering]);

  const transform = xy.interpolate(((x: number, y: number) => {
    if (x === 0 && y === 0) {
      return "none";
    }
    return `translate3d(${x}px,${y}px,0)`;
  }) as any) as any;

  return (
    <animated.a
      {...bind()}
      style={{
        transform
      }}
      title={props.title}
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.link}
      draggable={false}
      onClick={e => {
        const values = xy.getValue();
        if (Math.sqrt(values[0] * values[0] + values[1] * values[1]) > 5) {
          e.preventDefault();
        }
      }}
      onMouseOver={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <svg viewBox="0 0 24 24" className={styles.svg}>
        <path d={props.icon} />
      </svg>
      <animated.div
        className={styles.indicator}
        style={{
          opacity: indicatorProps.opacity,
          transform: indicatorProps.scale.interpolate((v: number) =>
            v === 0.6 ? "none" : `scale3d(${v}, ${v}, ${v})`
          )
        }}
      />
    </animated.a>
  );
};
