import { projects } from "../data/projects";
import { motion } from "framer-motion";
export const ProjectItem = ({ title, image, type }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="w-72 h-72 sm:w-64 sm:h-64 m-2 bg-white relative"
    >
      {image ? <img src={image} alt="" /> : null}
      {/* <h1 className="text-[22px] w-full absolute bottom-0 text-center uppercase">
        {title}
      </h1> */}
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <div className="px-20 py-10 mt-10 flex flex-col h-full">
      <header className="fancy-text text-[76px] flex leading-[63px]">
        <h1>Projects</h1>
      </header>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        className="w-auto grid md:grid-cols-4 grid-cols-1 mt-5 gap-4 mx-auto"
      >
        {projects.map((project): any => (
          <ProjectItem
            title={project.title}
            image={project.image}
            type={project.type}
          />
        ))}
      </motion.div>
    </div>
  );
};
