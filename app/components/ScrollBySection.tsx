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
  const SCROLL_DURATION = 800; // Duration of the scroll animation in ms

  const smoothScrollTo = (targetY: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / SCROLL_DURATION, 1);

      // Ease-in-out effect
      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startY + distance * easeInOut);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling.current = false; // Reset scrolling lock
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToSection = (index: number) => {
    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      isScrolling.current = true;
      smoothScrollTo(targetSection.offsetTop);
      setActiveIndex(index);
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
