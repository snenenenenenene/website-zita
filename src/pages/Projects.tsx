import { projects } from "../data/projects";

export const ProjectItem = ({ title, image, type }: any) => {
  return (
    <div className="w-64 h-64 m-2 bg-white relative">
      <img src={image} />
      {/* <h1 className="text-[22px] w-full absolute bottom-0 text-center uppercase">
        {title}
      </h1> */}
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="px-20 py-10 flex flex-col h-full">
      <header className="fancy-text text-[76px] flex leading-[63px]">
        <h1>Projects</h1>
      </header>
      <div className="w-auto grid grid-cols-4 mt-5 gap-4 mx-auto">
        {projects.map((project): any => (
          <ProjectItem
            title={project.title}
            image={project.image}
            type={project.type}
          />
        ))}
      </div>
    </div>
  );
};
