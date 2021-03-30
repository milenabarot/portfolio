import "../styles/projectCardInfo.scss";

function ProjectCardInfo(props) {
  return (
    <div className="projectCardInfo">
      <p className="projectCardInfo-details">{props.moreInfo}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="projectCardInfo-view"
      >
        View on github
      </a>
    </div>
  );
}

export default ProjectCardInfo;
