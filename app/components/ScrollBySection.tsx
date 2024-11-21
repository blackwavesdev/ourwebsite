"use client";
import React, { useEffect, useRef, useState } from "react";
import Welcome from "./Welcome/Welcome";
import MeetUs from "./MeetUs";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";

const ScrollBySection: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef<boolean>(false);
  const SCROLL_DURATION = 800; // Adjust duration if needed
  const [isDesktop, setIsDesktop] = useState(false);

  const scrollToSection = (index: number) => {
    if (isScrolling.current || index === activeIndex) return;

    isScrolling.current = true;
    setActiveIndex(index);

    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling.current = false;
      }, SCROLL_DURATION);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (!isDesktop || isScrolling.current) return;

    const isScrollingDown = event.deltaY > 0;
    if (isScrollingDown && activeIndex < sectionRefs.current.length - 1) {
      scrollToSection(activeIndex + 1);
    } else if (!isScrollingDown && activeIndex > 0) {
      scrollToSection(activeIndex - 1);
    }
  };

  useEffect(() => {
    // Check if the device is a desktop based on window width
    const updateIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    updateIsDesktop(); // Initial check

    window.addEventListener("resize", updateIsDesktop);

    // Add custom scroll only for desktop
    if (isDesktop) {
      window.addEventListener("wheel", handleWheel);
    }

    // Cleanup function
    return () => {
      window.removeEventListener("resize", updateIsDesktop);
      window.removeEventListener("wheel", handleWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop, activeIndex]);

  return (
    <div
      className={`h-screen w-full ${isDesktop ? "overflow-y-hidden" : ""}`} // Overflow hidden only for desktop
    >
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
      <WhatWeDo
        ref={(el) => {
          if (el) sectionRefs.current[3] = el;
        }}
      />
    </div>
  );
};

export default ScrollBySection;
