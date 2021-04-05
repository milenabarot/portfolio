import "../styles/projectCard.scss";
import ProjectCardInfo from "../components/projectCardInfo";
import { motion } from "framer-motion";
import classNames from "classnames";

function ProjectCard(props) {
  return (
    <motion.li
      className={classNames("project-card", {
        "project-card_is-selected": props.project.selected,
        "project-card_is-image-contained": props.project.contain === true,
      })}
      layout
      transition={{
        duration: 0.5,
        bounce: 0,
        type: "spring",
        ease: "easeInOut",
      }}
      onClick={() => props.onClick(props.project.id)}
    >
      <div
        className="project-card--image"
        style={{ backgroundImage: `url(${props.project.imgScr})` }}
        alt={props.project.imgScr}
      />
      <p className="project-card--title">{props.project.title}</p>
      {props.project.selected && (
        <ProjectCardInfo
          moreInfo={props.project.moreInfo}
          link={props.project.link}
        />
      )}
    </motion.li>
  );
}

export default ProjectCard;
