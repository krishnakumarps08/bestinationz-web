import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Image from "next/image";
import HeaderImages from "@/lib/header";
import Link from "next/link";
export const HeaderCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      {HeaderImages?.map((items) => (
        <div key={items?.id} className="relative">
          <Image src={items?.images} alt={`Image ${items?.id}`} className="max-h-screen w-fit" />
          <div className="absolute top-1/2 left-[100px] transform -translate-y-1/2 p-4 bg-opacity-50 rounded-lg bg-black text-white flex flex-col gap-2">
          <div className="text-start">
          <p className="text-2xl">{items?.title}</p>
          </div>
          <div className="text-start w-[700px]">
            <p>{items?.content}</p>
          </div>
          <div className="flex justify-end">
          <Link href={"/property"} className='rounded-[10px] p-2 bg-black/80 hover:bg-black/60 text-white' >Explore Now</Link>
          </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
