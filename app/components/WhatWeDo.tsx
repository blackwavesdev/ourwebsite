/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import sv1 from "../../Public/grid icons-14.png";
import sv2 from "../../Public/grid icons-15.png";
import sv3 from "../../Public/grid icons-16.png";
import sv4 from "../../Public/grid icons-17.png";
import sv5 from "../../Public/grid icons-18.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const svgItems = [
  { id: "1", src: sv1, desc: "Brand Strategies" },
  { id: "2", src: sv2, desc: "Media Productions" },
  { id: "3", src: sv3, desc: "Branding & Packaging" },
  { id: "4", src: sv4, desc: "Digital Marketing" },
  { id: "5", src: sv5, desc: "Coding & Developments" },
];

const WhatWeDo = forwardRef<HTMLDivElement>((_, ref) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isInView, setIsInView] = useState(false); // Tracks if section is in view
  const hasAnimated = useRef(false); // Tracks if animation has already occurred
  const localRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => localRef.current!);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api || !autoScroll) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, [api, autoScroll]);

  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);

  // Animation logic
  useEffect(() => {
    const element = localRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true; // Mark animation as played
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={localRef}
      className={`bg-black  h-[100dvh] snap-start font-bold transition-all duration-700`}
    >
      <div
        className={`w-full md:w-[60%] m-auto text-center flex flex-col justify-center h-full transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          className={`w-full px-4 md:px-0 text-[37px] md:text-[70px] flex flex-col text-5xl justify-center text-white mx-auto text-center gap-4 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1>
            <span className="text-main">What</span> We Do?
          </h1>
          <p className="text-lg">
            At Black Waves, we are more than just a digital agency. We are your
            partners in innovation, dedicated to transforming your online
            presence into a powerful tool for growth.
          </p>
        </div>
        <div className="mx-auto mt-20 w-full center">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {svgItems.map((svg, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/4 basis-1/2"
                >
                  <div className="p-1">
                    <Card className="bg-transparent border-none">
                      <CardContent className="flex flex-col gap-5 aspect-square items-center justify-center p-0">
                        <Image src={svg.src} alt="" width={50} />{" "}
                        <h3 className="text-sm text-white">{svg.desc}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
});
WhatWeDo.displayName = "WhatWeDo";

export default WhatWeDo;
