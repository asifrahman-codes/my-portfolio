import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
  direction = "up",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
  };

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transform
        transition-all
        duration-700
        ease-out
        ${
          isVisible
            ? "translate-x-0 translate-y-0 opacity-100"
            : `${directionClasses[direction]} opacity-0`
        }
      `}
    >
      {children}
    </div>
  );
}

export default Reveal;