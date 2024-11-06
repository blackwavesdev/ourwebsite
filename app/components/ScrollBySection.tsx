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
  const SCROLL_DURATION = 800; // Adjust duration if needed

  const scrollToSection = (index: number) => {
    if (isScrolling.current || index === activeIndex) return;

    isScrolling.current = true;
    setActiveIndex(index);

    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      // Scroll to the target section with smooth behavior
      targetSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling.current = false;
      }, SCROLL_DURATION);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (isScrolling.current) return;

    const isScrollingDown = event.deltaY > 0;
    if (isScrollingDown && activeIndex < sectionRefs.current.length - 1) {
      scrollToSection(activeIndex + 1);
    } else if (!isScrollingDown && activeIndex > 0) {
      scrollToSection(activeIndex - 1);
    }
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
        scrollToSection(activeIndex + 1);
      } else if (!isScrollingDown && activeIndex > 0) {
        scrollToSection(activeIndex - 1);
      }

      touchStart.current = touchEnd;
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
    <div className="h-screen w-full overflow-hidden">
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
    </div>
  );
};

export default ScrollBySection;
