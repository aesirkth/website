import { useState } from "react";

export function useResting() {
  const [resting, setResting] = useState(true);

  return {
    resting,
    onRest() {
      setResting(true);
    },
    onStart() {
      setResting(false);
    }
  };
}
