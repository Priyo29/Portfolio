import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      console.log("Mouse Position", e.clientX, e.clientY);
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.05, ease: "none" });
    };

    //lag effect for the ring
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.to(ring, { x: ringX, y: ringY });
      requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateRing();

    const handleMouseEnter = () => gsap.to(ring, { scale: 2.5, duration: 0.3 });
    const handleMouseLeave = () => gsap.to(ring, { scale: 1, duration: 0.3 });

    document.querySelectorAll("a ,.project-card, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a ,.project-card, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef}>
        <div className="cursor-dot">DOT</div>
      </div>

      <div className="cursor" ref={ringRef}>
        <div className="cursor-ring">RING</div>  { /* The Dot and RING are for debugging , remove once it works fine */ }
      </div>
    </>
  );
  
};

export default CustomCursor;
