"use client";

import { RoutesA } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const MainNav = (props: Props) => {
  const pathname = usePathname();

  const rountes: RoutesA[] = [
    {
      href: "/",
      label: "Me",
      active: pathname === "/",
    },
    {
      href: "/resume",
      label: "Resume",
      active: pathname === "/resume",
    },
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects",
    },
    {
      href: "/mygears",
      label: "My Gears",
      active: pathname === "/mygears",
    },
  ];
  return (
    <div className="flex items-center">
      {rountes.map((ele, i) =>
        ele.href === "/" ? (
          <li key={i}>
            <Link
              className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900  hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href={ele.href}
            >
              <Image
                src="/nareshBhosale.jpg"
                height={40}
                width={40}
                className={`hover:border-foreground ${
                  ele.active === true ? "border-foreground" : ""
                } border-2 rounded-full`}
                alt="TE Logo"
                loading="lazy"
              />
            </Link>
          </li>
        ) : (
          <li key={i} className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <Link
              className={`${
                ele.active === true
                  ? "dark:text-foreground"
                  : "dark:text-neutral-200"
              }  text-neutral-500 transition duration-200 active:text-black hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  dark:hover:text-foreground  lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400`}
              href={ele.href}
              data-te-nav-link-ref
            >
              {ele.label}
            </Link>
          </li>
        )
      )}
    </div>
  );
};

export default MainNav;
