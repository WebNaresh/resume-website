import GearCard from "@/components/gear-card";
import { Button } from "@/components/ui/button";
import { GearCardInterface } from "@/lib/interface";
import Link from "next/link";

type Props = {};

const Gears = (props: Props) => {
  return (
    <section className="p-4 flex flex-col">
      <h1 className="hello mx-10 my-8 relative text-2xl ">My Gears</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-6 place-items-center">
        {array.map((ele, i) => (
          <GearCard key={i} gear={ele} />
        ))}
      </div>
      <Link href={"/mygears"} className="w-full">
        <Button className=" w-full">Show More</Button>
      </Link>
    </section>
  );
};
export default Gears;

const array: GearCardInterface[] = [
  {
    name: "My Vertical Monitor",
    description: "HP M24f 23.8-Inch(60.45cm)",
    image: "/monitor24inch.png",
    amazonLink:
      "https://www.amazon.in/HP-M24f-23-8-Inch-Micro-Edge-Monitor/dp/B09535DPLC/ref=sr_1_3?keywords=hp+24+inch+monitor&sr=8-3",
  },
  {
    name: "My Wide Monitor",
    description: "PHILIPS 32 inches Monitor",
    image: "/32inchmonitor.png",
    amazonLink:
      "https://www.amazon.in/PHILIPS-Monitor-Picture-325E8-94/dp/B096XD1QF7/ref=sr_1_6?keywords=haier+32+inch+monitor&sr=8-6",
  },
  {
    name: "My left Hand ✌️",
    description: "LED Monitor Desk Arm with Laptop Tray",
    image: "/mountlaptop.png",
    amazonLink:
      "https://www.amazon.in/gp/product/B0B18S72J8/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1",
  },
];
