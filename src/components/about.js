import "../styles/about.scss";
import profilepic from "../images/profilepic.jpg";
import { motion } from "framer-motion";
import useComponentVisibility from "../hooks/useComponentVisibility";

function About() {
  // using intersection observer API to make the about component show or hide

  const isAboutComponentVisible = useComponentVisibility("about");

  const variants = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: "80%" },
  };

  return (
    <>
      <div id="about"></div>
      <motion.div
        className="about"
        animate={isAboutComponentVisible ? "show" : "hide"}
        initial="hide"
        variants={variants}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="about-title">About</h2>
        <div className="about-image">
          <img src={profilepic} alt="My profile picture" />
        </div>
        <p className="about-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          augue purus. Aenean et semper lorem, sit amet dictum lectus.
        </p>
      </motion.div>
    </>
  );
}

export default About;
