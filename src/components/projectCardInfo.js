import { useSpring, animated } from "react-spring";
import "../styles/projectCardInfo.scss";

function ProjectCardInfo(props) {
  const style = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div className="projectCardInfo" style={style}>
      <p>{props.moreInfo}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        View on github
      </a>
    </animated.div>
  );
}

export default ProjectCardInfo;
