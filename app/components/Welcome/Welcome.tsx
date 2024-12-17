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
          observer.unobserve(element); // Stop observing after entering view
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
      className={`overflow-x-hidden min-h-[100dvh] snap-start bg-black pt-10 gap-5 md:gap-12 flex flex-col justify-around font-bold text-white transition-all duration-700 `}
    >
      <div
        className={`center flex-col mt-28 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-[24px] md:text-[28px] font-Poppins ${
            isInView
              ? "motion-scale-in-[0.5] motion-translate-x-in-[-88%] motion-translate-y-in-[-9%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.00s] motion-duration-[0.61s]/translate motion-ease-spring-bouncy"
              : "hidden"
          }`}
        >
          Welcome To
        </h2>
        <div className="flex items-end">
          <h1
            className={`text-5xl text-[37px] md:text-[70px] mb-2 font-Poppins`}
          >
            Black Waves
          </h1>
          <span className={`bg-main p-1 rounded-full mb-2`}></span>
        </div>
        <p className={`md:w-[45%] px-4 md:px-0 text-center font-normal`}>
          Where advertising is a Main Course, not a Piece of Cake. We blend
          creativity, strategy, and innovation to serve you delectable results.
        </p>
      </div>
      <div
        className={`transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <video
          className="mb-52 md:mb-0"
          autoPlay
          muted
          playsInline
          loop
          controls={false}
        >
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
