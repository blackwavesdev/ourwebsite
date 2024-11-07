import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from "react";

const Welcome = forwardRef<HTMLDivElement>((_, ref) => {
  const [isInView, setIsInView] = useState(false);
  // const [isAnimationDelayed, setIsAnimationDelayed] = useState(false);
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
      id="welcome"
      ref={localRef}
      className="min-h-[100dvh] snap-start bg-black pt-10 gap-5 md:gap-12 flex flex-col justify-around text-white"
    >
      <div className="center flex-col mt-28">
        <h2
          className={`font-extrabold font-Poppins ${
            isInView
              ? "motion-scale-in-[0.5] motion-translate-x-in-[-48%] motion-translate-y-in-[-12%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-spring-bouncy"
              : "hidden"
          }`}
        >
          Welcome To
        </h2>
        <div className="flex items-end">
          <h1
            className={`text-5xl font-extrabold font-Poppins ${
              isInView
                ? "motion-scale-in-[0.5] motion-translate-x-in-[-48%] motion-translate-y-in-[-12%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-spring-bouncy"
                : "hidden"
            }`}
          >
            Black Waves
          </h1>
          <span
            className={`bg-main p-1 rounded-full mb-2 ${
              isInView ? "" : "hidden"
            }`}
          ></span>
        </div>
        <p
          className={`text-pretty md:w-[45%] px-2 md:px-0 text-center ${
            isInView
              ? "motion-scale-in-[0.5] motion-translate-x-in-[66%] motion-translate-y-in-[-6%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-spring-bouncy"
              : "hidden"
          }`}
        >
          Where advertising is a Main Course, not a Piece of Cake. We blend
          creativity, strategy, and innovation to serve you delectable results.
        </p>
      </div>
      <div>
        <video autoPlay muted playsInline loop controls={false}>
          <source
            src={`${process.env.PUBLIC_URL || ""}/pattern.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
});

Welcome.displayName = "Welcome";

export default Welcome;
