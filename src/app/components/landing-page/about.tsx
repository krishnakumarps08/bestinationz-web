import Backgroundimg from "@/../../public/headingimageone.jpg"
import Image from 'next/image'
import Link from "next/link"
export const AboutUs =() =>{

    const contentdata =[
        {id:1,
        content:"We believe that travel should be an enriching, rewarding experience that broadens the mind and opens the heart. That's why we work tirelessly to craft personalized travel itineraries that cater to your unique interests and preferences. Whether you're a foodie, an adrenaline junkie, or a history buff, we've got the perfect destination for you",
        button: false
        },
        {
        id: 2,
        content:"At Bestinationz, we're committed to responsible travel practices that support local communities and protect the environment. We believe that travel should benefit everyone involved, and we work closely with local partners to ensure that our trips are both sustainable and socially responsible.",
        button: false
        },
        {
            id:3,
            content:"So why wait? Start planning your next adventure with Bestinationz today and discover the world in a whole new way!",
            button: true
        }

    ]
    return(
        <div>
            <div  className=" w-full h-full items-center py-[178px] flex flex-col gap-20">
            <div>
                <p className="text-4xl font-medium text-black">Why Bestinationz?</p>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-3 sm:justify-between gap-x-10 ">
                {contentdata?.map((items) =>(
                    <div key={items?.id}>
                        <div className="w-[450px]">
                            <p className="text-justify text-base font-medium text-black">{items?.content}</p>
                            </div>
                        <div>
                            {items?.button === true &&(
                                <div className="flex justify-end">
                                    <Link href={'/contactus'} className="p-2 rounded-[10px] bg-black/80 hover:bg-black/60 text-white ">
                                        Contact Us
                                    </Link>
                                    </div>
                            )}
                        </div>
                        </div>
                ))}
            </div>
        </div>
        </div>
    )
}