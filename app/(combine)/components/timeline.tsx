import { Separator } from "@/components/ui/separator";
import { EducationCard } from "@/lib/interface";
import { Backpack, School, School2 } from "lucide-react";
import Educard from "./edu-card";

type Props = {};

const TimeLine = (props: Props) => {
  return (
    <>
      <div className="">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-foreground h-full border left-[57px] lg:left-2/4"></div>
          {array.map((e, i) => (
            <Educard key={i} index={i} details={e} />
          ))}
        </div>
        <Separator className="mx-auto my-6 box-border w-11/12" />
      </div>
    </>
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
