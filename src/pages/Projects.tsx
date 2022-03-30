import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useState } from "react";
export const ProjectItem = ({ title, image, type, searchQuery }: any) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.1 },
      }}
      className={`w-72 h-72 sm:w-64 sm:h-64 m-2 overflow-hidden shadow-md bg-white relative ${
        searchQuery !== "" && !type.includes(searchQuery) ? "hidden" : "visible"
      }`}
    >
      {image !== "" ? (
        <img src={image} className="w-full object-cover h-full" alt={image} />
      ) : null}
      {/* <h1 className="text-[22px] w-full absolute bottom-0 text-center uppercase">
        {title}
      </h1> */}
    </motion.div>
  );
};

export const Projects = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="px-20 py-10 mt-10 flex flex-col h-full">
      <header className="flex sm:flex-row flex-col ">
        <h1 className="fancy-text  text-[76px] leading-[63px]">Projects</h1>
        <input
          className="sm:w-[35%] w-full sm:my-0 mt-4  mx-10 ml-auto px-8 uppercase  outline-black"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        className="w-auto grid md:grid-cols-4 grid-cols-1 mt-5 gap-4 mx-auto"
      >
        {projects.map((project): any => (
          <ProjectItem
            searchQuery={searchQuery}
            title={project.title}
            image={project.image}
            type={project.type}
          />
        ))}
      </motion.div>
    </div>
  );
};
