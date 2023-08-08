import ProjectCard from "@/components/project-card";
import { ProjectDetails } from "@/lib/interface";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="px-8">
      <h1 className="hello mx-16 my-8 relative text-2xl ">My Projects</h1>
      <div className="grid grid-cols-3 place-items-center gap-6 ">
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
    projectName: "Social Media Application",
    description:
      "A social media platform for connecting with friends and sharing updates.",
    GitLink: "https://github.com/WebNaresh/Social-freak-whole",
    LiveLink: "https://social-freak-ud3t.onrender.com/login",
    screenshot: "/social-media.png",
  },
  {
    projectName: "Scroll Effect Website",
    description: "A website with captivating scroll effects and animations.",
    GitLink: "https://github.com/WebNaresh/scrollingAnimation",
    LiveLink: "https://scroll-anmation.onrender.com/",
    screenshot: "/scroll-animation.png",
  },
  {
    projectName: "Twitter Clone",
    description: "A clone of the popular social media platform Twitter.",
    GitLink: "https://github.com/WebNaresh/twitterClone",
    LiveLink: "https://twitter-clone-theta-self.vercel.app/",
    screenshot: "/twitter-clone.png",
  },
  {
    projectName: "Next.js with NextAuth.js",
    description: "An authentication and authorization setup using NextAuth.js.",
    GitLink: "https://github.com/WebNaresh/next-auth-demo",
    LiveLink: "https://next-auth-login-ten.vercel.app/",
    screenshot: "/next-auth.png",
  },
  {
    projectName: "News Application",
    description: "A news app fetching latest news using a news API.",
    GitLink: "https://github.com/WebNaresh/newsapp",
    LiveLink: "https://euphonious-hotteok-b19557.netlify.app/",
    screenshot: "/news-app.png",
  },
  {
    projectName: "Blog Application",
    description: "A platform for creating and sharing blog posts.",
    GitLink: "https://github.com/WebNaresh/resume-website-another",
    LiveLink: "https://resume-website-another.vercel.app/",
    screenshot: "/blog-app.png",
  },
];
