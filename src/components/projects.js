import { useState } from "react";

import dashboardImage from "../images/dashboardImage.PNG";
import toDoListImage from "../images/toDoListImage.PNG";
import toDoListReactImage from "../images/toDoListReactImage.PNG";

import reactSnakeImage from "../images/snakeGameImage.PNG";
import recipeAppImage from "../images/recipeAppImage.PNG";
import portfolioImage from "../images/portfolioImage.PNG";

import { AnimateSharedLayout } from "framer-motion";
import ProjectCard from "../components/projectCard";
import "../styles/projects.scss";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Portfolio Website",
      moreInfo:
        "React, Sass (BEM), Node.js, Express, Framer Motion, Axios, Responsive Design, React Hooks, WCAG 2.0",
      imgScr: portfolioImage,
      link: "https://github.com/milenabarot/portfolio",
      selected: false,
      contain: true,
    },
    {
      id: 1,
      title: "Recipe App",
      moreInfo: "MERN stack - REST API, Node.js, Express, MongoDB & React",
      imgScr: recipeAppImage,
      link: "https://github.com/milenabarot/recipe-API",
      selected: false,
    },
    {
      id: 2,
      title: "Dashboard",
      moreInfo:
        "React, Axios, Pexels API, OpenWeather API, Framer Motion, Responsive Design, React Classes & Hooks, Local Storage",
      imgScr: dashboardImage,
      link: "https://github.com/milenabarot/dashboard",
      selected: false,
      contain: true,
    },
    {
      id: 3,
      title: "Snake Game",
      moreInfo: "React, Canvas HTML 5",
      imgScr: reactSnakeImage,
      link: "https://github.com/milenabarot/react-snake-game",
      selected: false,
      contain: true,
    },
    {
      id: 4,
      title: "To Do List with React",
      moreInfo: "React, CSS, Local Storage",
      imgScr: toDoListReactImage,
      link: "https://github.com/milenabarot/to-do-list-react",
      selected: false,
    },
    {
      id: 5,
      title: "To Do List with Vanilla JS",
      moreInfo: "Vanilla JS, HTML 5, CSS, Local Storage",
      imgScr: toDoListImage,
      link: "https://github.com/milenabarot/To-Do-List",
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
