import ProjectCard from "@/components/project-card";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="px-8">
      <h1 className="hello mx-16 my-8 relative text-2xl ">My Projects</h1>
      <div className="grid grid-cols-3 place-items-center gap-6 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
