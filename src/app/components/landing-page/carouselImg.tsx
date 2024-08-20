import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import pondycherry from "@/../../public/pondycherry.jpg";
import alleppey from "@/../../public/headerimagethree.jpg";
import munnar from "@/../../public/munnar.jpg";
import Link from "next/link";
const contentStyle: React.CSSProperties = {
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const CarouselImg: React.FC = () => (
  <Carousel autoplay dots={false} arrows={true}>
    <div>
      <Link href={`/property/${"Pondycherry"}`}>
        <div className="relative">
          <Image
            src={pondycherry}
            alt={"Pondycherry"}
            width={500}
            height={10}
            className="w-full h-60 rounded-xl"
          />
          <p className="absolute bottom-[10px] left-3 px-2 py-1 bg-black bg-opacity-50 text-white rounded-xl">
            {"Pondycherry"}
          </p>
        </div>
      </Link>
    </div>
    <div>
      <Link href={`/property/${"Alleppey"}`}>
        <div className="relative">
          <Image
            src={alleppey}
            alt={"Alleppey"}
            width={500}
            height={10}
            className="w-full h-60 rounded-xl "
          />
          <p className="absolute bottom-[10px] left-3 px-2 py-1 bg-black bg-opacity-50 text-white rounded-xl">
            {"Alleppey"}
          </p>
        </div>
      </Link>
    </div>
    <div>
      <Link href={`/property/${"Munnar"}`}>
        <div className="relative">
          <Image
            src={munnar}
            alt={"Munnar"}
            width={500}
            height={10}
            className="w-full h-60 rounded-xl"
          />
          <p className="absolute bottom-[10px] left-3 px-2 py-1 bg-black bg-opacity-50 text-white rounded-xl">
            {"Munnar"}
          </p>
        </div>
      </Link>
    </div>
  </Carousel>
);
