import { useState } from "react";

import sign from "../images/sign.jpg";
import dashboardImage from "../images/dashboardImage.PNG";
import toDoListImage from "../images/toDoListImage.PNG";
import toDoListReactImage from "../images/toDoListReactImage.PNG";
import bakeryImage from "../images/bakeryImage.PNG";

import { AnimateSharedLayout } from "framer-motion";
import ProjectCard from "../components/projectCard";
import "../styles/projects.scss";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "My Portfolio",
      moreInfo: "more info...",
      imgScr: sign,
      link: "https://github.com/milenabarot/portfolio",
      selected: false,
      contain: true,
    },
    {
      id: 1,
      title: "Dashboard",
      moreInfo: "more info...",
      imgScr: dashboardImage,
      link: "https://github.com/milenabarot/dashboard",
      selected: false,
      contain: true,
    },
    {
      id: 2,
      title: "Snake Game",
      moreInfo: "more info...",
      imgScr: sign,
      link: "https://github.com/milenabarot/to-do-list-react",
      selected: false,
      contain: true,
    },
    {
      id: 3,
      title: "To Do List with React",
      moreInfo: "more info...",
      imgScr: toDoListReactImage,
      link: "https://github.com/milenabarot/to-do-list-react",
      selected: false,
    },
    {
      id: 4,
      title: "To Do List with Vanilla JS",
      moreInfo: "more info...",
      imgScr: toDoListImage,
      link: "https://github.com/milenabarot/To-Do-List",
      selected: false,
    },
    {
      id: 5,
      title: "Bakery Website",
      moreInfo: "more info...",
      imgScr: bakeryImage,
      link: "https://github.com/milenabarot/Shop-website",
      selected: false,
    },
  ]);

  const handleCardClick = (id) => {
    let updatedProjects = [...projects];

    //toggle
    updatedProjects[id].selected = !updatedProjects[id].selected;

    updatedProjects.forEach((project) => {
      if (project.id !== id) {
        project.selected = false;
      }
    });

    setProjects(updatedProjects);
  };

  return (
    <div className="projects" id="projects">
      <h2 className="projects-mainTitle">Projects</h2>
      <AnimateSharedLayout type="crossfade">
        <ul className="projects-list">
          {projects.map((project) => {
            return (
              <ProjectCard
                project={project}
                onClick={handleCardClick}
                key={project.id}
              />
            );
          })}
        </ul>
      </AnimateSharedLayout>
    </div>
  );
}

export default Projects;
