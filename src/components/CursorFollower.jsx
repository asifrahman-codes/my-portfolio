import { useEffect, useRef } from "react";

function CursorFollower() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
    >
      <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/70 blur-[0.5px]" />
    </div>
  );
}

export default CursorFollower;