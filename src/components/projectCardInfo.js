import { useSpring, animated } from "react-spring";

function ProjectCardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="projectCardInfo" style={style}>
      <p>{props.moreInfo}</p>
    </animated.div>
  );
}

export default ProjectCardInfo;
