import Backgroundimg from "@/../../public/headingimageone.jpg";
import Image from "next/image";
import Link from "next/link";
export const AboutUs = () => {
  const contentdata = [
    {
      id: 1,
      content:
        "We believe that travel should be an enriching, rewarding experience that broadens the mind and opens the heart. That's why we work tirelessly to craft personalized travel itineraries that cater to your unique interests and preferences. Whether you're a foodie, an adrenaline junkie, or a history buff, we've got the perfect destination for you",
      button: false,
    },
    {
      id: 2,
      content:
        "At Bestinationz, we're committed to responsible travel practices that support local communities and protect the environment. We believe that travel should benefit everyone involved, and we work closely with local partners to ensure that our trips are both sustainable and socially responsible.",
      button: false,
    },
    // {
    //   id: 3,
    //   content:
    //     "So why wait? Start planning your next adventure with Bestinationz today and discover the world in a whole new way!",
    //   button: true,
    // },
  ];
  return (
    <div>
      <div className=" w-full h-full md:items-center  px-5  py-[20px] flex flex-col gap-20">
        <div>
          <p className=" md:text-4xl text-2xl text-white  font-bold">
            Welcome to Bestinationz
          </p>
        </div>
        <div className="flex md:flex-row flex-col  sm:gap-y-0 gap-y-3 sm:justify-between gap-x-10  -mt-14">
          {contentdata?.map((items) => (
            <div key={items?.id}>
              <div className="w-full md:px-3 px-0">
                <p className=" text-base text-justify   font-medium text-white">
                  {items?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};