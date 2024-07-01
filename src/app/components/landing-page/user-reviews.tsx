
import { FaPlus } from "react-icons/fa6";
import { ReviewCarosel } from "../reviews/user-reviews";
export const UserReviews = () => {
  return (
    <div className="w-full h-full py-24 px-28">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-2xl font-medium ">Our customer reviews</p>
        </div>
        <div>
          <button className="rounded-[10px] p-2 bg-black/80 hover:bg-black/60 text-white">
            <FaPlus className="inline-block" /> <span>Add Review</span>
          </button>
        </div>
      </div>
      <div className="mt-5">
        <ReviewCarosel/>
      </div>
    </div>
  );
};
