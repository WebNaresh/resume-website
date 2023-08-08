import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ProjectDetails } from "@/lib/interface";
import Link from "next/link";

type Props = {};

const HeroProjects = (props: Props) => {
  return (
    <section className="px-8">
      <h1 className="hello mx-16 my-8 relative text-2xl ">My Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6 my-6">
        {projects.map((ele, i) => (
          <ProjectCard details={ele} key={i} />
        ))}
      </div>
      <Link href={"/myprojects"} className="w-full">
        <Button className=" w-full">Show More</Button>
      </Link>
    </section>
  );
};

export default HeroProjects;
const projects: ProjectDetails[] = [
  {
    projectName: "Eccomerce Project",
    description:
      "An interesting e-commerce website with a wide range of products.",
    GitLink: "https://github.com/WebNaresh/ecommerce-store",
    LiveLink: "https://ecommerce-store-mu-one.vercel.app/",
    screenshot: "/eccommerce-store.png",
  },
  {
    projectName: "Ecommerce Admin Dashboard",
    description: "A backend admin dashboard for managing an e-commerce store.",
    GitLink: "https://github.com/WebNaresh/ecommerce-admin-next",
    LiveLink: "https://ecommerce-admin-drab.vercel.app/",
    screenshot: "/eccommerce-admin.png",
  },
  {
    projectName: "Scroll Effect Website",
    description: "A website with captivating scroll effects and animations.",
    GitLink: "https://github.com/WebNaresh/scrollingAnimation",
    LiveLink: "https://scroll-anmation.onrender.com/",
    screenshot: "/scroll-animation.png",
  },
];
