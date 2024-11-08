/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { forwardRef, useEffect, useState } from "react";

const svgItems = [
  <svg key="1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#3b82f6" />
  </svg>,
  <svg key="2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="80" fill="#10b981" />
  </svg>,
  <svg key="3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 90,90 10,90" fill="#f59e0b" />
  </svg>,
  <svg key="4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="45" ry="30" fill="#ef4444" />
  </svg>,
  <svg key="5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 H 90 V 90 L 50 50 Z" fill="#8b5cf6" />
  </svg>,
];

const WhatWeDo = forwardRef<HTMLDivElement>((_, ref) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

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

  return (
    <section ref={ref} className=" bg-black  h-[100dvh] snap-start">
      <div className="w-full md:w-[80%] m-auto text-center flex flex-col justify-center h-full">
        <div className="w-full  md:w-4/5  flex  flex-col text-5xl justify-center text-white mx-auto text-center gap-4">
          <h1 className="">
            <span className="text-blue-800 ">What</span> We Do ?
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            nostrum sapiente quos nisi. Cupiditate qui voluptates quisquam,
          </p>
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div className="mx-auto mt-5">
          <Carousel
            setApi={setApi}
            className="w-full max-w-3xl"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {svgItems.map((svg, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        {svg}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
});
WhatWeDo.displayName = "WhatWeDo";

export default WhatWeDo;
