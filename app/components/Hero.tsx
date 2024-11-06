import React, { forwardRef } from "react";
import Image from "next/image";
import logo from "../../Public/logo-bw.png";
const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-[100dvh] snap-start relative back bg-cover bg-center bg-fixed h-screen flex items-center justify-center "
    >
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <Image
          src={logo}
          alt="Hero Image"
          width={200}
          height={500}
          className="flex justify-center items-center"
        />
        <p className="text-white text-base md:text-lg text-center md:text-left lg:text-xl  text-pretty leading-relaxed p-4 md:p-6">
          Digital Marketing Agency, SEO Solutions <br /> Innovative Web
          Devolpment{" "}
        </p>
      </div>
    </section>
  );
});
Hero.displayName = "Hero";

export default Hero;
