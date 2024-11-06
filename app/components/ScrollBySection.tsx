"use client";
import React, { useEffect, useRef, useState } from "react";
import Welcome from "./Welcome/Welcome";
import MeetUs from "./MeetUs";

const ScrollBySection: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef<boolean>(false);
  const touchStart = useRef<number>(0);
  const SWIPE_THRESHOLD = 40;
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }
  }, []);

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

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      if (isSafari) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      } else {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (isScrolling.current) return;

    const isScrollingDown = event.deltaY > 0;

    if (isScrollingDown && activeIndex < sectionRefs.current.length - 1) {
      isScrolling.current = true;
      scrollToSection(activeIndex + 1);
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else if (!isScrollingDown && activeIndex > 0) {
      isScrolling.current = true;
      scrollToSection(activeIndex - 1);
      setActiveIndex((prevIndex) => prevIndex - 1);
    }

    setTimeout(() => (isScrolling.current = false), 600);
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStart.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (isScrolling.current) return;

    const touchEnd = event.changedTouches[0].clientY;
    const distance = touchStart.current - touchEnd;

    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      const isScrollingDown = distance > 0;

      if (isScrollingDown && activeIndex < sectionRefs.current.length - 1) {
        isScrolling.current = true;
        scrollToSection(activeIndex + 1);
        setActiveIndex((prevIndex) => prevIndex + 1);
      } else if (!isScrollingDown && activeIndex > 0) {
        isScrolling.current = true;
        scrollToSection(activeIndex - 1);
        setActiveIndex((prevIndex) => prevIndex - 1);
      }

      setTimeout(() => (isScrolling.current = false), 600);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
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
