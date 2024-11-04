import React from "react";

const Welcome = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-around text-white">
      <div className="center flex-col">
        <h2 className="font-extrabold">Welcome To</h2>
        <div className="flex items-end">
          <h1 className="text-5xl font-extrabold">Black Waves</h1>{" "}
          <span className="bg-main p-1 rounded-full mb-2"></span>
        </div>
        <p className="text-pretty md:w-[45%] px-2 md:px-0 text-center">
          Where advertising is a Main Course, not a Piece of Cake. We blend
          creativity, strategy, and innovation to serve you delectable results.
        </p>
      </div>
      <div>
        <video
          className="bg-white"
          autoPlay
          muted
          playsInline
          loop
          controls={false}
        >
          <source src="../../../public/pattern.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Welcome;
