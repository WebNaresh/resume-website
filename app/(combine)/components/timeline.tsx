import { Separator } from "@/components/ui/separator";
import { EducationCard } from "@/lib/interface";
import { Backpack, GraduationCap, School, School2 } from "lucide-react";
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
      "Sushila Shankarrao Gadhave Mahavidyalaya (formerly Rajendra Vidyalaya, Khandala) holds my 10th-grade memories. Established in 1951, it represents village-based education, now offering diverse courses for holistic growth.",
    link1: "http://ssgmkhandala.org/",
    link2: "https://www.facebook.com/groups/998809613474607",
    year: "2018",
    collegeImage: "/ssgm.jpg",
  },
  {
    icons: <School size={20} />,
    heading: "Rajendra Vidyalay Khandala",
    description:
      "Sushila Shankarrao Gadhave Mahavidyalaya, previously Rajendra Vidyalaya, Khandala, is a cherished institution where I completed my 12th grade. Established in 1951, it symbolizes village-based education and offers diverse courses for comprehensive growth.",
    link1: "http://ssgmkhandala.org/",
    link2: "https://www.facebook.com/groups/998809613474607",
    year: "2018",
    collegeImage: "/ssgm.jpg",
  },
  {
    icons: <School2 size={20} />,
    heading: "Rajendra Vidyalay Khandala",
    description:
      "Sushila Shankarrao Gadhave Mahavidyalaya, formerly Rajendra Vidyalaya, Khandala, holds a special place as the institution where I completed my BCA. Established in 1951, it promotes holistic growth through diverse courses.",
    link1: "http://ssgmkhandala.org/",
    link2: "https://www.facebook.com/pesmoderncoepune",
    year: "2018",
    collegeImage: "/ssgm.jpg",
  },
  {
    icons: <GraduationCap size={20} />,
    heading: "PES's Modern College of Engineering",
    description:
      "I completed my MCA at P.E.S Modern College of Engineering, a part of Progressive Education Society, established in 1934. The institution's commitment to progress and modernity aligns with my educational journey.",
    link1: "https://moderncoe.edu.in/",
    link2: "https://www.facebook.com/groups/998809613474607",
    year: "2018",
    collegeImage: "/mca-college.jpg",
  },
];
