
import { FaPlus } from "react-icons/fa6";
import { ReviewCarosel } from "../reviews/user-reviews";
export const UserReviews = () => {
  return (
    <div className="w-full h-full py-[20px] md:px-8 px-5">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-2xl font-bold text-white">Our customer reviews</p>
        </div>
      </div>
      <div className="mt-5">
        <ReviewCarosel/>
      </div>
    </div>
  );
};
