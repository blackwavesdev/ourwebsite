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
      id="meetus"
      ref={localRef}
      className="bg-black h-[100dvh] snap-start text-white"
    >
      <div className="w-full md:w-[80%] m-auto text-center flex flex-col justify-center h-full">
        <div className="center flex-col">
          <span
            className={`font-extrabold text-main text-5xl ${
              isInView
                ? "motion-scale-in-[0.5] motion-translate-x-in-[-48%] motion-translate-y-in-[-12%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-spring-bouncy"
                : "hidden"
            }`}
          >
            Meet
          </span>
          <div className="flex items-end">
            <h1
              className={`text-5xl font-extrabold ${
                isInView
                  ? "motion-scale-in-[0.5] motion-translate-x-in-[-48%] motion-translate-y-in-[-12%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-spring-bouncy"
                  : "hidden"
              }`}
            >
              Black Waves
            </h1>{" "}
            <span
              className={`bg-main p-1 rounded-full mb-2 ${
                isInView ? "" : "hidden"
              }`}
            ></span>
          </div>
        </div>
        <h2
          className={`text-white ${
            isInView
              ? "motion-scale-in-[0.5] motion-translate-x-in-[-48%] motion-translate-y-in-[-12%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-spring-bouncy"
              : "hidden"
          }`}
        >
          Your Vision Our Code
        </h2>
        <div className="mt-10 px-2">
          <p
            className={`text-white ${
              isInView
                ? "motion-scale-in-[0.5] motion-translate-x-in-[-48%] motion-translate-y-in-[-12%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-spring-bouncy"
                : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            voluptas, quas vel perferendis sed id suscipit fugiat distinctio
            totam corrupti voluptatibus nulla dolore iste eum, rem adipisci enim
            quidem! Adipisci ,Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
          <p
            className={`mt-4 text-white ${
              isInView
                ? "motion-scale-in-[0.5] motion-translate-x-in-[66%] motion-translate-y-in-[-6%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-spring-bouncy"
                : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            voluptas, quas vel perferendis sed id suscipit fugiat distinctio
            totam corrupti voluptatibus
          </p>
        </div>
      </div>
    </section>
  );
});
MeetUs.displayName = "MeetUs";

export default MeetUs;
