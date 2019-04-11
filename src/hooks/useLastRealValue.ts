import { useState, useLayoutEffect } from "react";

export function useLastRealValue(value: string | undefined) {
  const [state, setState] = useState<string | undefined>(value);

  useLayoutEffect(() => {
    if (typeof value === "string" && value.length > 0) {
      setState(value);
    }
  }, [value]);

  return [state, value != null];
}
