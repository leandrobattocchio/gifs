import { useRef, useState, useEffect } from "react";

export const useNearScreen = ({distance = "100px"} = {}) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    function onChange(entries, observer) {
      const e = entries[0];
      if (e.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(fromRef.current);

    return () => observer.disconnect();
  });

  return {isNearScreen, fromRef};
};
