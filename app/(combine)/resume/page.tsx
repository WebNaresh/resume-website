import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {};

const Resume = (props: Props) => {
  return (
    <section className="mx-16">
      <h1 className="hello  my-8 relative text-2xl ">My Resume</h1>
      <div className="flex">
        <Image
          src={"/resume-screen.png"}
          height={200}
          width={400}
          alt="resume"
        />
        <a href="/resumenew.pdf" download="resumenew.pdf">
          <Button className="w-full m-4">Download Resume</Button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
