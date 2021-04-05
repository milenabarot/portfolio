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
      title: "Portfolio Website",
      moreInfo:
        "React, Sass (BEM), Node.js, Express, ESLint, Framer Motion, Axios, Responsive Design, React Hooks",
      imgScr: sign,
      link: "https://github.com/milenabarot/portfolio",
      selected: false,
      contain: true,
    },
    {
      id: 1,
      title: "Dashboard",
      moreInfo:
        "React, Axios, Pexels API, OpenWeather API, Framer Motion, Responsive Design, React Classes & Hooks, Local Storage",
      imgScr: dashboardImage,
      link: "https://github.com/milenabarot/dashboard",
      selected: false,
      contain: true,
    },
    {
      id: 2,
      title: "Snake Game",
      moreInfo: "React, Canvas HTML 5",
      imgScr: sign,
      link: "https://github.com/milenabarot/to-do-list-react",
      selected: false,
      contain: true,
    },
    {
      id: 3,
      title: "To Do List with React",
      moreInfo: "React, CSS, Local Storage",
      imgScr: toDoListReactImage,
      link: "https://github.com/milenabarot/to-do-list-react",
      selected: false,
    },
    {
      id: 4,
      title: "To Do List with Vanilla JS",
      moreInfo: "Vanilla JS, HTML 5, CSS, Local Storage",
      imgScr: toDoListImage,
      link: "https://github.com/milenabarot/To-Do-List",
      selected: false,
    },
    {
      id: 5,
      title: "Bakery Website",
      moreInfo: "HTML 5, CSS, Vanilla JS, Git",
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
      <h2 className="projects--main-title">Projects</h2>
      <AnimateSharedLayout type="crossfade">
        <ul className="projects--list">
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
