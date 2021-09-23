import "../styles/projectCardInfo.scss";

function ProjectCardInfo(props) {
  return (
    <div className="project-card-info">
      <p className="project-card-info--details">{props.moreInfo}</p>
      <div className="project-card-info--wrap">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-info--view"
          tab-index="4"
        >
          View on github
        </a>
        {props.liveLink ? (
          <a
            href={props.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-info--view"
            tab-index="5"
          >
            View live
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCardInfo;
