"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import img from "../../../Public/clocket.png";
const Companies = forwardRef<HTMLDivElement>((_, ref) => {
  const [isInView, setIsInView] = useState(false);
  const localRef = useRef<HTMLDivElement | null>(null);
  useImperativeHandle(ref, () => localRef.current!);
  useEffect(() => {
    const element = localRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a 400ms delay before triggering the animation
          setTimeout(() => setIsInView(true), 400);
        } else {
          setIsInView(false);
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
      des: "testtttttttttttt",
      color: "main",
    },
    {
      image: img,
      des: "testtttttttttttt",
      color: "main",
    },
    {
      image: img,
      des: "testtttttttttttt",
      color: "main",
    },
    {
      image: img,
      des: "testtttttttttttt",
      color: "main",
    },
  ];

  return (
    <section
      ref={localRef}
      className="overflow-y-hidden bg-black h-[100dvh] flex flex-col justify-center gap-5 snap-start text-white"
    >
      <div className="image-company h-[287px] center">
        <h2 className="text-white text-center text-3xl md:text-5xl  mt-0 md:mt-8">
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
      <div className="grid grid-cols-2 md:grid-cols-4 md:flex-row justify-center mt-0 md:mt-10 gap-5">
        {company.map((product, index) => (
          <div className="flex flex-col items-center" key={index}>
            <Image
              className=""
              width={80}
              height={80}
              src={product.image}
              alt="company logo"
            />
            <p className="text-white mt-3">{product.des}</p>
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