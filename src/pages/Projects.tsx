import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useState } from "react";
export const ProjectItem = ({ title, image, type, searchQuery }: any) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className={`w-72 h-72 sm:w-64 mx-auto rounded sm:h-64 overflow-hidden shadow-md bg-white relative ${
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
    <div className="md:px-20 px-0 py-10 mt-10 flex flex-col h-full">
      <header className="flex sm:flex-row flex-col items-center">
        <h1 className="fancy-text  text-[76px] leading-[63px]">My Work</h1>
        <div className="flex items-center border-b border-black sm:ml-auto w-64 mx-auto sm:mx-0 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 uppercase px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
        </div>
      </header>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-5"
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
