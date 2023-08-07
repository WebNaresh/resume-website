import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GearCardInterface } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";

type Props = {
  gear: GearCardInterface;
};

const GearCard = ({ gear }: Props) => {
  return (
    <Card className="w-[300px] h-[430px]">
      <CardHeader>
        <CardTitle className="">{gear.name}</CardTitle>
        <CardDescription>{gear.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat h-[220px] flex items-center"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <Image
            className="rounded-t-lg"
            src={gear.image}
            alt="24 Inch Monitor"
            width={300}
            height={300}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-row-reverse justify-between">
        <Link href={gear.amazonLink} target="blank">
          <Button>Amazon</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GearCard;
