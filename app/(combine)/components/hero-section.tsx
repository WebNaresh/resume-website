import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="mb-10">
      <div className="px-6 pt-12 text-center md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 h-full lg:mt-0 flex flex-col justify-evenly">
              <span className="text-3xl text-muted-foreground">
                Hi 👋, I&apos;m <br />
              </span>{" "}
              <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Naresh Bhosale
                </h1>
                <div className="leading-7 justify-center lg:justify-normal [&:not(:first-child)]:mt-6 gap-4 flex">
                  <Link
                    href={"https://www.facebook.com/iMNareshAtTheRateInfinite/"}
                  >
                    <Button variant={"outline"} className=" bg-theme">
                      <FaFacebookF className="text-xl" color="#0573e7" />
                    </Button>
                  </Link>
                  <Link href={"https://www.instagram.com/web_x__/"}>
                    <Button variant={"outline"}>
                      <AiFillInstagram className="text-xl text-pink-500" />
                    </Button>
                  </Link>
                  <Link href={"https://github.com/WebNaresh"}>
                    <Button variant={"outline"}>
                      <AiFillGithub className="text-xl" color="white" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <Link href="/resume">
                  <Button variant={"default"} size={"lg"} className=" mr-6">
                    Resume
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size={"lg"} variant={"outline"}>
                    Project
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mb-12 lg:mb-0 flex flex-row-reverse justify-center lg:justify-normal">
              <Image
                draggable={false}
                src="/image2.jpg"
                className=" rounded-full shadow-lg dark:shadow-black/20"
                width={300}
                height={300}
                alt=""
              />
            </div>
          </div>
          <Separator className=" mt-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
