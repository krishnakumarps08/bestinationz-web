import Image from "next/image";
import { CarouselImg } from "./carouselImg";
import backgroundimage from "@/../../public/backgroundimg.jpg";
import Link from "next/link";
export const AboutProperty = () => {
  return (
    <div>
      <div className="w-full h-full py-24 ">
        <div className="flex flex-row justify-center w-full gap-20">
          <div className="w-2/5 flex flex-col">
            <div>
              <CarouselImg />
            </div>
            <div className="py-5 px-2 text-base font-normal border rounded-b-[10px]">
              <p>
                Are you looking for the perfect destination for your next
                adventure? Look no further than Bestinationz! Our team of travel
                experts has scoured the global to bring you the very best in
                travel destinations. From breathtaking beaches to scenic
                mountain retreats, Bestinationz has it all.
              </p>
              <div className="flex justify-end mt-2">
                <Link
                  href={"/property"}
                  className="rounded-[10px] p-2 bg-black/80 hover:bg-black/60 text-white"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col ">
            <div
              className="relative bg-cover bg-center h-full rounded-b-lg flex items-center justify-center"
              style={{ backgroundImage: `url(${backgroundimage.src})` }}
            >
              <div className="flex flex-col gap-4 items-center">
                <p className="text-white text-2xl font-bold">
                  &quot;Bestinationz&quot;
                </p>
                <p className="text-white text-2xl font-bold text-center w-[400px]">
                  BEING WITH YOUR BEST FRIENDS IN A BEAUTIFUL DESTINATION
                </p>
                <p className="text-white text-sm font-normal  text-justify px-10">
                  is one of life&apos;s greatest pleasures. Whether it&apos;s
                  exploring a new city, lounging on a tropical beach, or
                  embarking on an adventure-filled trip, sharing these
                  experiences with your closest friends can create memories that
                  last a lifetime. Not only do you get to see new sights and try
                  new things, but you also get to bond with the people who know
                  you best. Laughing over inside jokes, reminiscing about old
                  times, and creating new stories together can strengthen your
                  friendships in ways that nothing else can. So, if you have the
                  opportunity to travel with your best friends, seize it!
                  It&apos;s sure to be an unforgettable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
