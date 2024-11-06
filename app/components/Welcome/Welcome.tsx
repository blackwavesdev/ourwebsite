// components/Welcome.tsx
import React, { forwardRef } from "react";

const Welcome = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen snap-start bg-black pt-10 gap-5 md:gap-12 flex flex-col justify-around text-white"
    >
      <div className="center flex-col mt-28">
        <h2 className="font-extrabold">Welcome To</h2>
        <div className="flex items-end">
          <h1 className="text-5xl font-extrabold">Black Waves</h1>
          <span className="bg-main p-1 rounded-full mb-2"></span>
        </div>
        <p className="text-pretty md:w-[45%] px-2 md:px-0 text-center">
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

// Set the display name for the component
Welcome.displayName = "Welcome";

export default Welcome;
