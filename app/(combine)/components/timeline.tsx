import { EducationCard } from "@/lib/interface";
import { Backpack, School, School2 } from "lucide-react";
import Educard from "./edu-card";

type Props = {};

const TimeLine = (props: Props) => {
  return (
    <div className="">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: "50%" }}
        ></div>
        {array.map((e, i) => (
          //   <div
          //     className={`mb-8 flex justify-between ${
          //       i % 2 === 0 ? "" : "flex-row-reverse"
          //     } items-center w-full right-timeline`}
          //   >
          //     <div className="order-1 w-5/12"></div>
          //     <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-10 h-10 rounded-full">
          //       <div className="mx-auto font-semibold text-lg text-white">
          //         {e.icons}
          //       </div>
          //     </div>
          //     <div className="order-1 rounded-lg shadow-xl w-5/12 ">
          <Educard key={i} index={i} details={e} />
          //     </div>
          //   </div>
        ))}

        {/* <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TimeLine;
const array: EducationCard[] = [
  {
    icons: <Backpack size={20} />,
    heading: "Rajendra Vidyalay Khandala",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
    link1: "http://ssgmkhandala.org/",
    link2: "https://www.facebook.com/groups/998809613474607",
    year: "2018",
  },
  {
    icons: <School size={20} />,
    heading: "Rajendra Vidyalay Khandala",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
    link1: "http://ssgmkhandala.org/",
    link2: "https://www.facebook.com/groups/998809613474607",
    year: "2018",
  },
  {
    icons: <School2 size={20} />,
    heading: "Rajendra Vidyalay Khandala",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
    link1: "http://ssgmkhandala.org/",
    link2: "https://www.facebook.com/groups/998809613474607",
    year: "2018",
  },
];
