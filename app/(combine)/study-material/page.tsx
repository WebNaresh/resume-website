import ProjectCard from "@/components/project-card";
import { ProjectDetails } from "@/lib/interface";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="px-8">
      <h1 className="hello mx-16 my-8 relative text-2xl ">Study Materials</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center gap-6 ">
        {projects.map((ele, i) => (
          <ProjectCard details={ele} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
const projects: ProjectDetails[] = [
  {
    projectName: "DMS",
    description: "Descrete Mathematics and Statistics",
    GitLink: "https://github.com/WebNaresh/resume-website",
    LiveLink: "/dms.pdf",
    screenshot: "/maths.jpg",
  },
  {
    projectName: "DSA",
    description: "Data Structure and Algorithm",
    GitLink: "https://github.com/WebNaresh/ecommerce-store",
    LiveLink: "/dsa.pdf",
    screenshot: "/data.jpg",
  },
  {
    projectName: "Object Oriented Programming",
    description: "A backend admin dashboard for managing an e-commerce store.",
    GitLink: "https://github.com/WebNaresh/ecommerce-admin-next",
    LiveLink: "/oop.pdf",
    screenshot: "/oop.webp",
  },
  {
    projectName: "SEPM",
    description: "Software Engineering and Project Management",
    GitLink: "https://github.com/WebNaresh/Social-freak-whole",
    LiveLink: "/sepm.pdf",
    screenshot: "/soft.jpg",
  },
  {
    projectName: "ISEE",
    description: "Information Systems and Engineering Economics",
    GitLink: "https://github.com/WebNaresh/scrollingAnimation",
    LiveLink: "/isee.pdf",
    screenshot: "/isee.jpg",
  },
  {
    projectName: "Python",
    description: "Not Completed",
    GitLink: "https://github.com/WebNaresh/twitterClone",
    LiveLink: "not.jpg",
    screenshot: "/twitter-clone.png",
  },
];
