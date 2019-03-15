import { useCallback } from "react";
import { useSpring, config } from "react-spring";

export function useCursorRotation(rate: number) {
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

      set({ xys: [xValue * rate, yValue * rate, 0.99] });
    },
    [set]
  );

  const onMouseLeave = useCallback(
    (_e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      set({ xys: [0, 0, 1] });
    },
    [set]
  );

  const transform = animatedProps.xys.interpolate(((x: number, y: number, s: number) => {
    if (x === 0 && y === 0 && s === 1) {
      return "none";
    }
    return `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) scale(${s})`;
  }) as any);

  return {
    transform,
    onMouseMove,
    onMouseLeave
  };
}
