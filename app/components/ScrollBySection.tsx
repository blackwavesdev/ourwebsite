"use client";
// components/ScrollBySection.tsx
import React, { useEffect, useRef, useState } from "react";
import Welcome from "./Welcome/Welcome";
import MeetUs from "./MeetUs";

const ScrollBySection: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef<boolean>(false);

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
        rootMargin: "0px 0px -50% 0px", // Trigger when 50% of section is in view
        threshold: 0.5, // At least 50% of section must be in view
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isScrolling.current) return; // Prevent multiple scrolls in quick succession

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

      // Allow scrolling again after the transition
      setTimeout(() => (isScrolling.current = false), 500);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
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
      {/* <Section3 ref={(el) => { sectionRefs.current[2] = el!; }} />
      <Section4 ref={(el) => { sectionRefs.current[3] = el!; }} /> */}
    </div>
  );
};

export default ScrollBySection;
