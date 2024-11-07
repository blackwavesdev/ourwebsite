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
  useImperativeHandle(ref, () => localRef.current!);
  useEffect(() => {
    const element = localRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a 300ms delay before triggering the animation
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
  return (
    <section
      ref={localRef}
      className="overflow-y-hidden min-h-[100dvh] snap-start relative back bg-cover bg-center bg-fixed h-screen flex items-center justify-center "
    >
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <Image
          src={logo}
          alt="Hero Image"
          width={200}
          height={200}
          className={`center ${
            isInView
              ? "motion-scale-in-[0.5] motion-translate-x-in-[-88%] motion-translate-y-in-[-9%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.00s] motion-duration-[0.61s]/translate motion-ease-spring-bouncy"
              : "hidden"
          }`}
        />
        <p
          className={`text-white text-base md:text-lg text-center md:text-left lg:text-xl  text-pretty leading-relaxed p-4 md:p-6 ${
            isInView
              ? "motion-scale-in-[0.5] motion-translate-x-in-[-88%] motion-translate-y-in-[-9%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.00s] motion-duration-[0.61s]/translate motion-ease-spring-bouncy"
              : "hidden"
          }`}
        >
          Digital Marketing Agency, SEO Solutions <br /> Innovative Web
          Devolpment{" "}
        </p>
      </div>
    </section>
  );
});
Hero.displayName = "Hero";

export default Hero;
