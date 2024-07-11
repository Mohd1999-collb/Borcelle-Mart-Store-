
"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

interface ImageCarousalProps {
  data: {
    imgSrc: string;
    title: string;
  };
}

function Scroll({ data }: ImageCarousalProps) {
  return (
    <div className="relative h-[50vh] md:h-[70vh] lg:h-[92vh]">
      <Image 
        src={data.imgSrc} 
        alt="banner" 
        width={2000}
        height={1000}
        className="w-full h-full object-cover "
      />

      {/* <div className="w-full absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#000000] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-4 text-center">
        {data.title}
      </div> */}
    </div>
  );
}

export default function ImageCarousal({ imageProps }: any) {
  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      showThumbs={false} 
      interval={2000} 
      showStatus={false}
    >
      {imageProps.map((obj: any, index: any) => (
        <Scroll key={index} data={obj} />
      ))}
    </Carousel>
  );
}

