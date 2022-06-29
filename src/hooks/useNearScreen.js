import { useRef, useState, useEffect } from "react";

export const useNearScreen = ({distance = "100px", externalRef, once = true} = {}) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();
  
  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current;

    function onChange(entries, observer) {
      const e = entries[0];
      if (e.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      }else{
        !once && setShow(false)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    });

    if(element) observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return {isNearScreen, fromRef};
};
