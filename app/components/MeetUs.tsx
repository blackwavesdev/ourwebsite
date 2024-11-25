import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const MeetUs = forwardRef<HTMLDivElement>((_, ref) => {
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
      id="meetus"
      ref={localRef}
      className={`overflow-y-hidden bg-transparent h-[100dvh] snap-start text-white font-bold transition-all duration-700`}
    >
      <div
        className={`w-full md:w-[60%] m-auto text-center flex flex-col justify-center h-full transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="center gap-0  md:gap-5 flex-col md:flex-row">
          <span
            className={`font-extrabold text-main md:text-[70px] text-[37px]`}
          >
            About
          </span>
          <div className="flex items-end">
            <h1
              className={`md:text-[70px] text-[37px] font-extrabold ${
                isInView
                  ? "motion-scale-in-[0.5] motion-translate-x-in-[-88%] motion-translate-y-in-[-9%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.00s] motion-duration-[0.61s]/translate motion-ease-spring-bouncy"
                  : "hidden"
              }`}
            >
              Black Waves
            </h1>{" "}
            <span className={`bg-main p-1 rounded-full mb-4 md:mb-6 `}></span>
          </div>
        </div>
        <h2 className={`text-white`}>Your Vision Our Code</h2>
        <div className="mt-10 px-2 ">
          <p className={`text-white font-bold`}>
            Black Waves is a dynamic digital agency that empowers businesses to
            thrive in the digital age. With a team of passionate and skilled
            professionals, we deliver innovative solutions that drive results.
          </p>
          <p className={`mt-4 text-white font-bold`}>
            Our Mission is to help businesses achieve their full potential by
            providing cutting-edge digital marketing and web development
            services.
          </p>
        </div>
      </div>
    </section>
  );
});
MeetUs.displayName = "MeetUs";

export default MeetUs;
