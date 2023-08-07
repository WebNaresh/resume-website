import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EducationCard } from "@/lib/interface";
import Link from "next/link";

type Props = {
  details: EducationCard;
  index: number;
};

const Educard = ({ details, index }: Props) => {
  return (
    <div
      className={`mb-8 flex justify-between ${
        index % 2 === 0 ? "" : "lg:flex-row-reverse"
      }  items-center w-full right-timeline`}
    >
      <div className="order-1 w-5/12 hidden lg:block"></div>
      <div className="z-20 flex items-center order-1 bg-foreground shadow-xl w-10 h-10 rounded-full">
        <div className="mx-auto font-semibold text-lg text-background relative">
          {details.icons}
        </div>
      </div>
      <div className="order-1 rounded-lg shadow-xl w-full lg:w-5/12 ">
        <div className=" order-1 mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-slate-900 dark:shadow-black/10">
          <div className="mb-4 flex justify-between">
            <Link
              href={details.link1}
              className="text-lg text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              {details.heading}
            </Link>
            <Link
              href={details.link1}
              className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              <Avatar>
                <AvatarImage src={details.collegeImage} alt={details.heading} />
                <AvatarFallback>{details.heading}</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          <p className="mb-6 text-neutral-700 dark:text-neutral-400 text-sm">
            {details.description}
          </p>
          <div className="flex gap-4">
            <Link href={details.link1}>
              <Button variant={"default"}>College Website</Button>
            </Link>
            <Link href={details.link2}>
              <Button variant={"ghost"}>College Social Media</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educard;
