import Image from "next/image";
import React from "react";

const InfiniteAnimations = ({ brandImage }: any) => {
  return (

    <div className="flex flex-col items-center gap-2 py-8 px-5">
    <p className="text-heading1-bold">Our Brands</p>
    <div className="w-[60rem] pt-8 px-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        
          >
          {brandImage.map((image: any, index: string) => (
          <li key={index}>
            <Image
              src={image}
              alt="image"
              width={100}
              height={100}
              className="rounded-full w-20 h-20 cursor-pointer"
            />
          </li>
      ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true"
      
      >
      {brandImage.map((image: any, index: string) => (
          <li key={index}>
            <Image src={image} alt="image" width={100} height={100} className="rounded-full w-20 h-20 cursor-pointer"/>
          </li>
      ))}
      </ul>
    </div>

    </div>
  );
};

export default InfiniteAnimations;
