import { CarouselImg } from "./carouselImg";
import pondycherry from "@/../../public/pondycherry.jpg";
import alleppey from "@/../../public/headerimagethree.jpg";
import munnar from "@/../../public/munnar.jpg";
import Link from "next/link";
import Image from "next/image";

const trendingplaces = [
  {
    id: 1,
    name: "Pondycherry",
    image: pondycherry,
  },
  {
    id: 2,
    name: "Alleppey",
    image: alleppey,
  },
  {
    id: 3,
    name: "Munnar",
    image: munnar,
  },
];

export const TrendingLocations = () => {
  return (
    <div className="md:px-8 px-5 py-[20px]">
      <h2 className="text-2xl font-bold text-white">Trending Locations</h2>
      <div className="sm:grid grid-cols-3 gap-3 hidden mt-5 ">
        {trendingplaces.map((place) => (
          <div key={place?.id}>
            <Link href={`/property/${place?.name}`}>
              <div className="relative">
                <Image
                  src={place?.image}
                  alt={place?.name}
                  width={500}
                  height={10}
                  className="w-full h-60 rounded-xl transition ease-in-out delay-75 hover:-translate-y-1 hover:lg:scale-95 hover:scale-110 duration-300"
                />
                <p className="absolute bottom-[10px] left-3  px-2 py-1 bg-black bg-opacity-50 text-white rounded-xl">
                  {place?.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="sm:hidden block mt-5">
            <CarouselImg/>
      </div>
    </div>
  );
};
