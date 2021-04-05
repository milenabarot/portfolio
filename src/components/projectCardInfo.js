import "../styles/projectCardInfo.scss";

function ProjectCardInfo(props) {
  return (
    <div className="project-card-info">
      <p className="project-card-info--details">{props.moreInfo}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-info--view"
      >
        View on github
      </a>
    </div>
  );
}

export default ProjectCardInfo;
