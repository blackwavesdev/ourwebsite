"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import img from "../../../Public/01.png";
const Companies = forwardRef<HTMLDivElement>((_, ref) => {
  const [isInView, setIsInView] = useState(false);
  const localRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false); // Tracks if animation has already played

  useImperativeHandle(ref, () => localRef.current!);
  useEffect(() => {
    const element = localRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setTimeout(() => {
            setIsInView(true);
            hasAnimated.current = true; // Mark animation as played
          }, 400);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  const company = [
    {
      image: img,
      des: "Meet TheBAKERS Studios, where we seamlessly blend the finest ingredients of production expertise and post-production magic. From crafting captivating concepts passing by detailed storyboarding to presenting visual delights, we layer each frame with editing finesse and color richness to create a masterpiece that brings the taste to life. Want a ...",
      color: "main",
    },
    {
      image: img,
      des: "Meet TheBAKERS Studios, where we seamlessly blend the finest ingredients of production expertise and post-production magic. From crafting captivating concepts passing by detailed storyboarding to presenting visual delights, we layer each frame with editing finesse and color richness to create a masterpiece that brings the taste to life. Want a ...",
      color: "main",
    },
    {
      image: img,
      des: "Meet TheBAKERS Studios, where we seamlessly blend the finest ingredients of production expertise and post-production magic. From crafting captivating concepts passing by detailed storyboarding to presenting visual delights, we layer each frame with editing finesse and color richness to create a masterpiece that brings the taste to life. Want a ...",
      color: "main",
    },
    {
      image: img,
      des: "Meet TheBAKERS Studios, where we seamlessly blend the finest ingredients of production expertise and post-production magic. From crafting captivating concepts passing by detailed storyboarding to presenting visual delights, we layer each frame with editing finesse and color richness to create a masterpiece that brings the taste to life. Want a ...",
      color: "main",
    },
  ];

  return (
    <section
      ref={localRef}
      className={`overflow-y-hidden bg-black h-[100dvh] flex flex-col justify-center gap-5 snap-start text-white font-bold transition-all duration-700`}
    >
      <div
        className={`image-company h-[287px] center transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-white font-extrabold text-center text-5xl md:text-7xl  mt-0 md:mt-8
          ${
            isInView
              ? "motion-scale-in-[0.5] motion-translate-x-in-[-88%] motion-translate-y-in-[-9%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.00s] motion-duration-[0.61s]/translate motion-ease-spring-bouncy"
              : "hidden"
          }
          `}
        >
          Companies
          <span
            className={`font-extrabold text-main text-5xl ${
              isInView
                ? "motion-scale-in-[0.5] motion-translate-x-in-[-88%] motion-translate-y-in-[-9%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.00s] motion-duration-[0.61s]/translate motion-ease-spring-bouncy"
                : "hidden"
            }`}
          >
            .
          </span>
        </h2>
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 md:flex-row justify-center md:w-4/5 mx-auto mt-0 md:mt-10 gap-5 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {company.map((product, index) => (
          <div
            className={`flex flex-col items-center ${
              isInView
                ? "motion-scale-in-[0.5] motion-translate-x-in-[-88%] motion-translate-y-in-[-9%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.00s] motion-duration-[0.61s]/translate motion-ease-spring-bouncy"
                : "hidden"
            }`}
            key={index}
          >
            <Image
              className="w-32 md:w-64"
              width={200}
              height={200}
              src={product.image}
              alt="company logo"
            />
            <p className="text-white mt-3 line-clamp-2 text-center">
              {product.des}
            </p>
            <a
              href="/"
              className={`transition-all mt-5 duration-500 ease-out text-white py-2 px-6 border-opacity-50 rounded-full border-2 bg-black outline-1 outline-main border-${product.color} font-bold text-sm  lg:block cursor-pointer hover:bg-main hover:scale-95 `}
            >
              Contact Us
            </a>
          </div>
        ))}
      </div>
    </section>
  );
});
Companies.displayName = "Companies";

export default Companies;
