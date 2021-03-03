import "../styles/projectCard.scss";
import ProjectCardInfo from "../components/projectCardInfo";
import classNames from "classnames";

function ProjectCard(props) {
  return (
    <div
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
        <ProjectCardInfo moreInfo={props.project.moreInfo} />
      )}
    </div>
  );
}

export default ProjectCard;
