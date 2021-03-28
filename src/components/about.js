import "../styles/about.scss";
import profilepic from "../images/profilepic.jpg";
import { AnimatePresence, motion } from "framer-motion";
import useComponentVisibility from "../hooks/useComponentVisibility";
import { useEffect, useState } from "react";

function About() {
  const [wordArrayIndex, setWordArrayIndex] = useState(0);

  const wordArray = ["useReact", "useSass", "useAxios", "useResponsiveDesign"];

  useEffect(() => {
    let timer = setInterval(() => {
      if (wordArrayIndex === wordArray.length - 1) {
        setWordArrayIndex(0);
      } else {
        setWordArrayIndex(wordArrayIndex + 1);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [wordArrayIndex]);

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
        <div className="about-info">
          I'm a self taught frontend developer, with an Economics background and
          experience in commerce and data analysis. I work with React, Sass,
          Axios & Node in my projects and I value responsive design, web
          accessibility and clean UI.
          <p>
            I enjoy expanding my coding knowledge and discovering new libraries
            to help me build fun apps and websites.
          </p>
          <p>
            My background has taught me the importance of organisation, and I
            use Github and Git to effectively organise my projects and manage my
            app version control.
          </p>
          <p>
            Advancing my coding skills is something I'm very passionate about.
            I'm looking for a position in the industry to work on some amazing
            projects.
          </p>
        </div>
        <div className="about-wordArray">
          <div className="about-wordArrayAnimation">
            I . . .
            <AnimatePresence exitBeforeEnter>
              <motion.p
                initial={{ opacity: 0, y: 130 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -130 }}
                transition={{ duration: 0.5 }}
                key={`wordArray-${wordArrayIndex}`}
                className="about-wordArrayAnimationWords"
              >
                {wordArray[wordArrayIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
