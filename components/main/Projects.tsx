import Link from "next/link";
import ProjectCard from "../sub/ProjectCard";

const Data: any = [
  {
    name: "KBlog",
    src: "/kblog.png",
    title: "KBlog",
    description:
      "Kblog, built using React and integrated with Appwrite as a Backend-as-a-Service (BAAS), offers a blogging experience.",
    link: "https://k-blog-silk.vercel.app/",
  },
  {
    name: "KApp",
    src: "/kapp.png",
    title: "KApp",
    description:
      "Kapp, a SaaS, utilizes OpenAI and Replicate AI APIs. Developed with Next.js, Tailwind, and TypeScript for efficient and dynamic web applications",
    link: "https://k-kakcysvz9-khushj007.vercel.app/",
  },
  {
    name: "KVideoChat",
    src: "/kvideochat.png",
    title: "KVideoChat",
    description:
      "This application utilizes WebRTC and Socket.IO, developed with React for the frontend and Node.js for the backend",
    link: "https://k-video-chat-9rgi.vercel.app/",
  },
  {
    name: "KChat",
    src: "/kchat.png",
    title: "KChat",
    description:
      "Created a chat application utilizing socket.io. Feel free to explore it by clicking the provided link. Check out the GitHub repository for more details.",
    link: "https://kchatapplication.netlify.app/",
  },
  {
    name: "AmazonClone",
    src: "/amazon.png",
    title: "Amazon Clone",
    description:
      "I've created a React-based Amazon clone. Using React in frontend and firebase as backend as a service ",
    link: "https://amazon-clone-7340d5.netlify.app/",
  },
  {
    name: "TechWebsite",
    src: "/techwebsite.png",
    title: "TechWebsite",
    description:
      "This website is developed using HTML, JavaScript, and CSS . I have integrated dynamic features for enhanced functionality.",
    link: "https://technicalwebsite.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-row md:flex-row gap-10 px-10 projects">
        {Data.map((project: any) => {
          return (
            <Link href={project.link} key={project.src}>
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.description}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
