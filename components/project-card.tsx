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

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <Card className="w-[300px] h-[430px]">
      <CardContent className="p-0">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat h-[220px] flex items-center"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <Image
            className="rounded-t-lg"
            src={"/ssgm.jpg"}
            fill
            alt="24 Inch Monitor"
            // width={300}
            // height={300}
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="">Ecommerce Project</CardTitle>
        <CardDescription>
          An interstring Project which i like taking huge but worth it huge but
          worth it huge but worth it
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row-reverse justify-between">
        <Link href={"/resuem"} target="blank">
          <Button variant={"outline"} className="gap-2">
            <GitHubLogoIcon className="" />
            <div>Project Link</div>
          </Button>
        </Link>
        <Link href={"/resuem"} target="blank">
          <Button variant={"ghost"}>Live Demo</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
