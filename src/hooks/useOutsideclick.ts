import { RefObject, useEffect } from "react";

const useOutsideclick = (
  ref: RefObject<HTMLElement>,
  callback: CallableFunction
) => {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const elementRef = ref.current;

      if (!elementRef || elementRef.contains(event.target as Node)) {
        return;
      }

      callback();
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [ref, callback]);
};

export default useOutsideclick;
