import { useState } from "react";
import sign from "../images/sign.jpg";
import beach from "../images/beach.JPG";
import { motion, AnimateSharedLayout } from "framer-motion";

import ProjectCard from "../components/projectCard";
import "../styles/projects.scss";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Dashboard",
      moreInfo: "more info...",
      imgScr: beach,
      link: "https://github.com/milenabarot/dashboard",
      selected: false,
    },
    {
      id: 1,
      title: "To Do List with React",
      moreInfo: "more info...",
      imgScr: sign,
      link: "https://github.com/milenabarot/to-do-list-react",
      selected: false,
    },
    {
      id: 2,
      title: "To Do List with Vanilla JS",
      moreInfo: "more info...",
      imgScr: beach,
      link: "https://github.com/milenabarot/To-Do-List",
      selected: false,
    },
    {
      id: 3,
      title: "Blog Website",
      moreInfo: "more info...",
      imgScr: beach,
      link: "https://github.com/milenabarot/My-website",
      selected: false,
    },
    {
      id: 4,
      title: "Bakery Website",
      moreInfo: "more info...",
      imgScr: sign,
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
  console.log(handleCardClick);

  return (
    <div id="projects">
      <h2 className="projects-mainTitle">My projects</h2>
      <AnimateSharedLayout type="crossfade">
        <motion.div layout className="projects">
          {projects.map((project) => {
            return (
              <ProjectCard
                project={project}
                onClick={handleCardClick}
                key={project.id}
              />
            );
          })}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
}

export default Projects;
