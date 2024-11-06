"use client";
import React, { useEffect, useRef, useState } from "react";
import Welcome from "./Welcome/Welcome";
import MeetUs from "./MeetUs";
import Hero from "./Hero";

const ScrollBySection: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef<boolean>(false);
  const touchStart = useRef<number>(0);
  const SWIPE_THRESHOLD = 40;

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sectionRefs.current.length) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (isScrolling.current) return;

    const isScrollingDown = event.deltaY > 0;
    if (isScrollingDown && activeIndex < sectionRefs.current.length - 1) {
      isScrolling.current = true;
      scrollToSection(activeIndex + 1);
    } else if (!isScrollingDown && activeIndex > 0) {
      isScrolling.current = true;
      scrollToSection(activeIndex - 1);
    }

    setTimeout(() => (isScrolling.current = false), 600);
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStart.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (isScrolling.current) return;

    const touchEnd = event.touches[0].clientY;
    const distance = touchStart.current - touchEnd;

    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      event.preventDefault();
      const isScrollingDown = distance > 0;

      if (isScrollingDown && activeIndex < sectionRefs.current.length - 1) {
        isScrolling.current = true;
        scrollToSection(activeIndex + 1);
      } else if (!isScrollingDown && activeIndex > 0) {
        isScrolling.current = true;
        scrollToSection(activeIndex - 1);
      }

      setTimeout(() => (isScrolling.current = false), 600);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div className="h-[100dvh] w-full overflow-hidden">
      <Hero
        ref={(el) => {
          if (el) sectionRefs.current[0] = el;
        }}
      />
      <Welcome
        ref={(el) => {
          if (el) sectionRefs.current[1] = el;
        }}
      />
      <MeetUs
        ref={(el) => {
          if (el) sectionRefs.current[2] = el;
        }}
      />
      {/* Add more sections as needed */}
    </div>
  );
};

export default ScrollBySection;
