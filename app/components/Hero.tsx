import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import logo from "../../Public/logo-bw.png";
const Hero = forwardRef<HTMLDivElement>((_, ref) => {
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
  return (
    <section
      ref={localRef}
      className={`overflow-x-hidden flex justify-center h-screen w-full snap-start`}
    >
      <div
        className={`flex w-full h-full flex-col md:flex-row justify-center items-center transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Image
          src={logo}
          alt="Hero Image"
          width={200}
          height={200}
          className={`flex justify-center items-center 
            
          `}
        />
        <p
          className={`text-white text-base md:text-lg text-center md:text-left lg:text-xl  text-pretty leading-relaxed p-4 md:p-6 `}
        >
          Digital Marketing Agency, SEO Solutions <br /> Innovative Web
          Development
        </p>
      </div>
    </section>
  );
});
Hero.displayName = "Hero";

export default Hero;
