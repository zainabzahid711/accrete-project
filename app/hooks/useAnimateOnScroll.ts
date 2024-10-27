import { useEffect, useRef } from "react";

const useAnimateOnScroll = (
  animationClass = "animate-slide-up-fade",
  threshold = 0.1
) => {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false); // Track whether the animation has occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            entry.target.classList.add(animationClass);
            hasAnimated.current = true; // Set the flag to true to prevent further animations
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationClass, threshold]);

  return elementRef;
};

export default useAnimateOnScroll;
