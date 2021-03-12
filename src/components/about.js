import "../styles/about.scss";
import profilepic from "../images/profilepic.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [isAboutComponentVisible, setIsAboutComponentVisible] = useState(false);

  // using intersection observer API to make the about component show or hide

  useEffect(() => {
    let options = {
      threshold: [1],
    };

    let observer = new IntersectionObserver(shouldShowAboutComponent, options);

    let targetElement = document.querySelector("#about");
    observer.observe(targetElement);
  }, []);

  const shouldShowAboutComponent = (targets, observer) => {
    const target = targets[0];

    if (target.isIntersecting === true) {
      setIsAboutComponentVisible(true);
    }
  };

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
