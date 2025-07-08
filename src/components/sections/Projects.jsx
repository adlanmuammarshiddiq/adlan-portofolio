import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";

function Projects() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16"
    >
      {user_info.projects.map((project, index) => {
        return (
          <div
            key={index}
            className="border rounded-lg shadow-md dark:border-gray-700"
          >
            <Project
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              link={project.link}
            />
          </div>
        );
      })}
    </section>

  );
}

export default Projects;
