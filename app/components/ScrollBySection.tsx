"use client";
import React, { useEffect, useRef, useState } from "react";
import Welcome from "./Welcome/Welcome";
import MeetUs from "./MeetUs";

const ScrollBySection: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef<boolean>(false);
  const touchStart = useRef<number>(0);
  const SWIPE_THRESHOLD = 40; // Reduced for better sensitivity

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleWheel = (event: WheelEvent) => {
    if (isScrolling.current) return;

    const isScrollingDown = event.deltaY > 0;

    if (isScrollingDown && activeIndex < sectionRefs.current.length - 1) {
      isScrolling.current = true;
      sectionRefs.current[activeIndex + 1].scrollIntoView({
        behavior: "smooth",
      });
    } else if (!isScrollingDown && activeIndex > 0) {
      isScrolling.current = true;
      sectionRefs.current[activeIndex - 1].scrollIntoView({
        behavior: "smooth",
      });
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

    // Only prevent default if swipe distance exceeds threshold, and only on scroll triggers
    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      event.preventDefault();

      const isScrollingDown = distance > 0;

      if (isScrollingDown && activeIndex < sectionRefs.current.length - 1) {
        isScrolling.current = true;
        sectionRefs.current[activeIndex + 1].scrollIntoView({
          behavior: "smooth",
        });
      } else if (!isScrollingDown && activeIndex > 0) {
        isScrolling.current = true;
        sectionRefs.current[activeIndex - 1].scrollIntoView({
          behavior: "smooth",
        });
      }

      // Update `touchStart` to allow consecutive scrolling in the same direction
      touchStart.current = touchEnd;

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
    <div className="h-screen w-full overflow-hidden">
      <Welcome
        ref={(el) => {
          sectionRefs.current[0] = el!;
        }}
      />
      <MeetUs
        ref={(el) => {
          sectionRefs.current[1] = el!;
        }}
      />
    </div>
  );
};

export default ScrollBySection;
