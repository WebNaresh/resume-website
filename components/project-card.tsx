import { ProjectDetails } from "@/lib/interface";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  details: ProjectDetails;
};

const ProjectCard = ({ details }: Props) => {
  return (
    <Card className="w-[300px] h-[370px]">
      <CardContent className="p-0">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat h-[170px] flex items-center"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <Image
            className="rounded-t-lg"
            src={details.screenshot}
            fill
            alt="24 Inch Monitor"
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="">{details.projectName}</CardTitle>
        <CardDescription>{details.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row-reverse justify-between">
        <Link href={details.GitLink} target="blank">
          <Button variant={"outline"} className="gap-2">
            <GitHubLogoIcon className="" />
            <div>Project Link</div>
          </Button>
        </Link>
        <Button variant={"ghost"}>
          <Link
            href={details.LiveLink}
            className="w-full h-full"
            target="blank"
          >
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
