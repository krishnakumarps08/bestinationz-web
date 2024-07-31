import Properties from "@/lib/properties";
import { Card } from "antd";
import Image from "next/image";
export const AllLocations = () => {
  return (
    <div className="mt-10 grid  md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-5">
      {Properties?.map((items) => (
        <div key={items?.id}>
          <div className="relative">
            <Image
              src={items?.image}
              className=" w-full h-[550px] rounded-[10px] object-cover"
              alt={items?.name}
            />
            <div className="flex flex-row">
              
                <div className="absolute bottom-5 left-2 text-white p-2">
                  {items?.name}
                </div>
                <div className="absolute bottom-2 left-2 text-white px-2">
                  <p className="text-[14px]">{items?.totalproperties} Properties</p>
                </div>
             
            </div>
            <div className="right-2  bottom-3 absolute">
                <button className="text-white bg-black/80 hover:text-black hover:bg-white/80 hover:transition hover:duration-300 rounded-[10px] p-2 ">Explore</button>
                </div>
          </div>
        </div>
      ))}
    </div>
  );
};
