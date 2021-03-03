import { useState } from "react";
import profilepic from "../images/profilepic.jpg";
import sign from "../images/sign.jpg";
import beach from "../images/beach.JPG";

import ProjectCard from "../components/projectCard";
import "../styles/projects.scss";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Dashboard",
      moreInfo: "more info...",
      imgScr: beach,
      selected: false,
    },
    {
      id: 1,
      title: "To Do List with React",
      moreInfo: "more info...",
      imgScr: sign,
      selected: false,
    },
    {
      id: 2,
      title: "To Do List with Vanilla JS",
      moreInfo: "more info...",
      imgScr: beach,
      selected: false,
    },
    {
      id: 3,
      title: "Blog Website",
      moreInfo: "more info...",
      imgScr: beach,
      selected: false,
    },
    {
      id: 4,
      title: "Bakery Website",
      moreInfo: "more info...",
      imgScr: sign,
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
  console.log(handleCardClick);

  return (
    <div id="projects">
      <h2>My projects</h2>
      <div className="projects">
        {projects.map((project) => {
          return (
            <ProjectCard
              project={project}
              onClick={handleCardClick}
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
