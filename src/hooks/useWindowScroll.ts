import { useEffect, useRef } from "react";

export function useWindowScroll(
  active: boolean,
  callback: (scroll: number | null) => void,
  min: number = 0,
  max: number = Number.MAX_VALUE
) {
  const previousCallbackValue = useRef(null);

  useEffect(() => {
    const value = Math.max(min, Math.min(max, window.scrollY));
    if (previousCallbackValue.current !== value) {
      callback(value);
    }
    previousCallbackValue.current = value;
  }, []);

  useEffect(() => {
    if (!active) {
      return callback(previousCallbackValue.current || 0);
    }
    function listener() {
      const value = Math.max(min, Math.min(max, window.scrollY));
      if (previousCallbackValue.current !== value) {
        callback(value);
      }
      previousCallbackValue.current = value;
    }
    listener();
    window.addEventListener("scroll", listener, { passive: true });
    return () => window.removeEventListener("scroll", listener);
  }, [active, min, max]);
}
