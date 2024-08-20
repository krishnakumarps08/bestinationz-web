import Marquee from "react-fast-marquee";
import Card from "antd/es/card/Card";
import { RiDoubleQuotesR } from "react-icons/ri";
const ReviewsData = [
  {
    id: "1",
    name: "John Doe",
    review:
      "The trip was fantastic! The itinerary was well-planned and the guide was very knowledgeable.",
  },
  {
    id: "2",
    name: "Jane Smith",
    review:
      "Had an amazing time exploring the city. The recommendations were spot on!",
  },
  {
    id: "3",
    name: "Alice Johnson",
    review:
      "Excellent service! The accommodations were top-notch and the activities were fun and engaging.",
  },
  {
    id: "4",
    name: "Bob Brown",
    review:
      "A wonderful experience from start to finish. Everything was organized perfectly.",
  },
  {
    id: "5",
    name: "Emily Davis",
    review:
      "Great trip! The local insights provided were invaluable and made our visit truly memorable.",
  },
];

export const ReviewCarosel = () => {
  return (
    <div>
      <Marquee
        className="hide-scroll-bar flex overflow-x-scroll overflow-y-hidden py-1 md:pl-10 pl-5 "
        pauseOnHover={true}
      >
        <div className="gap-x-5 ml-5 flex flex-row">
          {ReviewsData?.map((items) => (
            <Card key={items?.id} className="bg-transparent">
              <div className="flex flex-row justify-between">
                <div>
                  <p className="text-2xl font-medium text-white">
                    {items?.name}
                  </p>
                </div>
                <div>
                  <RiDoubleQuotesR className="text-2xl " />
                </div>
              </div>
              <div className="w-[350px] pt-10">
                <p className="text-start text-lg text-white">
                  {" "}
                  {items?.review}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
