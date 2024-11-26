"use client";
import React, { useEffect, useRef, useState } from "react";
import Welcome from "./Welcome/Welcome";
import MeetUs from "./MeetUs";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import Companies from "./companies/Companies";
import Footer from "./Footer";

const ScrollBySection: React.FC = () => {
  const sectionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);
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
    if (
      isScrollingDown &&
      activeIndex < Object.keys(sectionRefs.current).length - 1
    ) {
      scrollToSection(activeIndex + 1);
    } else if (!isScrollingDown && activeIndex > 0) {
      scrollToSection(activeIndex - 1);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isDesktop || isScrolling.current) return;

    if (
      event.key === "ArrowDown" &&
      activeIndex < Object.keys(sectionRefs.current).length - 1
    ) {
      scrollToSection(activeIndex + 1);
    } else if (event.key === "ArrowUp" && activeIndex > 0) {
      scrollToSection(activeIndex - 1);
    }
  };

  useEffect(() => {
    const updateIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    updateIsDesktop(); // Initial check

    window.addEventListener("resize", updateIsDesktop);
    if (isDesktop) {
      window.addEventListener("wheel", handleWheel);
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("resize", updateIsDesktop);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop, activeIndex]);

  return (
    <div
      className={`h-[100dvh] w-full ${isDesktop ? "overflow-y-hidden" : ""}`} // Overflow hidden only for desktop
    >
      <Hero
        ref={(el) => {
          {
            sectionRefs.current[0] = el;
          }
        }}
      />
      <Welcome
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      />
      <MeetUs
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      />
      <WhatWeDo
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
      />
      <Companies
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
      />
      <Footer
        ref={(el) => {
          sectionRefs.current[5] = el;
        }}
      />
    </div>
  );
};

export default ScrollBySection;
