import "../styles/projectCard.scss";
import ProjectCardInfo from "../components/projectCardInfo";
import { motion } from "framer-motion";
import classNames from "classnames";

function ProjectCard(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className={classNames("projectCard", {
        projectCard_isSelected: props.project.selected,
      })}
      onClick={() => props.onClick(props.project.id)}
    >
      <div
        className="projectCard-image"
        style={{ backgroundImage: `url(${props.project.imgScr})` }}
        alt={props.project.imgScr}
      />
      <p className="projectCard-title">{props.project.title}</p>
      {props.project.selected && (
        <ProjectCardInfo
          moreInfo={props.project.moreInfo}
          link={props.project.link}
        />
      )}
    </motion.div>
  );
}

export default ProjectCard;
