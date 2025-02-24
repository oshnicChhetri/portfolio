import { useEffect, useState } from "react";

const isElementInViewPort = (element: HTMLElement) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
};

 const useIsInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (ref.current) {
        setIsInView(isElementInViewPort(ref.current));
      }
    };

    checkVisibility(); // Initial check

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [ref]);

  return isInView;
};

export default useIsInViewport;
