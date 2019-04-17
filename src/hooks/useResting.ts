import { useState } from "react";

// A hook providing utilities set a component as resting or animating (to apply GPU acceleration or not)
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
