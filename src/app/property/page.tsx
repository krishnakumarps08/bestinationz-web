"use client";
import { useQuery } from "@tanstack/react-query"
import { getproperties } from "../api/allproperties/actions";
const PropertyPage =() =>{

    const {data, isLoading} = useQuery({
        queryKey: ['properties'],
        queryFn: () =>getproperties(),
    })

    return(
        <div className="px-10 pb-5 flex flex-col mt-20 gap-y-2">
            <div>
            <p className="text-4xl font-semibold">Your Ultimate Gateway Awaits</p>
            </div>
            <div className="border-b border-black/50 pb-1">
            <div className="w-3/4 text-justify text-base font-normal ">
                <p>Explore our diverse range of resort and hotel locations. Find the perfect destination for your next vacation, whether it&apos;s a beachside resort, a mountain retreat, or a city hotel.</p>
            </div>
            </div>
            
        </div>
    )
}
export default PropertyPage