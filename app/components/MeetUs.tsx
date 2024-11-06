import React, { forwardRef } from "react";

const MeetUs = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="bg-black h-[100dvh] snap-start text-white">
      <div className="w-full md:w-[80%] m-auto text-center flex flex-col justify-center h-full">
        <div className="center flex-col">
          <span className="font-extrabold text-main text-5xl">Meet</span>
          <div className="flex items-end">
            <h1 className="text-5xl font-extrabold">Black Waves</h1>{" "}
            <span className="bg-main p-1 rounded-full mb-2"></span>
          </div>
        </div>
        <h2 className="text-white">Your Vision Our Code</h2>
        <div className="mt-10 px-2">
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            voluptas, quas vel perferendis sed id suscipit fugiat distinctio
            totam corrupti voluptatibus nulla dolore iste eum, rem adipisci enim
            quidem! Adipisci ,Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
          <p className="mt-4 text-white">
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
