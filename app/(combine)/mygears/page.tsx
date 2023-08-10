import GearCard from "@/components/gear-card";
import { GearCardInterface } from "@/lib/interface";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <h1 className="hello mx-16 my-8 relative text-2xl ">My Gears</h1>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 place-items-center">
        {array.map((ele, i) => (
          <GearCard key={i} gear={ele} />
        ))}
      </div>
    </div>
  );
};

export default Page;

const array: GearCardInterface[] = [
  {
    name: "My GirlFriend",
    description: "My love which i fool you",
    image: "/my-girlfriend.png",
    amazonLink:
      "https://www.amazon.in/Mom-Says-Girlfriend-Subhasis-Das/dp/8129117037?keywords=mom+says+no+girlfriend&sr=8-1&linkId=8749fcb92193b588a6f0815b29030ee5&language=en_IN&ref_=as_li_ss_tl",
  },
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
  {
    name: "My Right Hand ✌️",
    description: "Offbeat Dash 2.4GHz Wireless + Bluetooth 5.1 Mouse",
    image: "/mouse-.png",
    amazonLink:
      "https://www.amazon.in/gp/product/B08Y7MXFMK/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1",
  },
  {
    name: "My Darling 🥰",
    description: "Itel Magic 2(Blue, 4G, Wi-Fi Hotspot Support)",
    image: "/mobiledevice.png",
    amazonLink:
      "https://www.amazon.in/gp/product/B08Y7MXFMK/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1",
  },
  {
    name: "My Monitor Arm 🥰",
    description: "amazon basics Dual Monitor Stand",
    image: "/dualarm.png",
    amazonLink:
      "https://www.amazon.in/AmazonBasics-Dual-Monitor-Stand-Height-Adjustable/dp/B076B3Q8JR/ref=sr_1_3?keywords=dual+monitor+arm&sr=8-3",
  },
];
