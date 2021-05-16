import "../styles/about.scss";
import bioPic from "../images/bioPic.jpg";

import reactLogo from "../images/logos/reactLogo.png";
import JSLogo from "../images/logos/JSLogo.png";
import HTML5Logo from "../images/logos/HTML5Logo.png";
import sassLogo from "../images/logos/sassLogo.png";
import gitLogo from "../images/logos/gitLogo.png";
import nodejsLogo from "../images/logos/nodejslogo.png";

import { motion } from "framer-motion";
import useComponentVisibility from "../hooks/useComponentVisibility";
import Typical from "react-typical";

function About() {
  const steps = [
    "useReact",
    6000,
    "useSass",
    6000,
    "useAxios",
    6000,
    "useResponsiveDesign",
    8000,
  ];

  // using intersection observer API to make the about component show or hide

  const isAboutComponentVisible = useComponentVisibility("about");

  const variants = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: "80%" },
  };

  const logoArray = [
    { url: reactLogo, alt: "React logo" },
    { url: JSLogo, alt: "JS Logo" },
    { url: HTML5Logo, alt: "HTML5 Logo" },
    { url: sassLogo, alt: "Sass Logo" },
    { url: gitLogo, alt: "Git Logo" },
    { url: nodejsLogo, alt: "Nodejs Logo" },
  ];

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
        <h2 className="about--title">About</h2>
        <div className="about--image">
          <img src={bioPic} alt="Picture of Milena Barot" />
        </div>
        <div className="about--info">
          <p>
            I'm a self taught frontend developer, with an Economics background
            and experience in commerce and data analysis. I work with React,
            Sass, Axios & Node in my projects and I value responsive design, web
            accessibility and clean UI.
          </p>
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
        <div className="about--word-array">
          <div className="about--word-array-animation">
            <p>I . . .</p>
            <Typical
              wrapper="p"
              steps={steps}
              loop={Infinity}
              className="about--word-array-animation-words"
            />
          </div>
        </div>
        <ul className="about--logos">
          {logoArray.map((logo) => {
            return (
              <li
                className="about--logos-image"
                style={{ backgroundImage: `url(${logo.url})` }}
                role="img"
                aria-label={logo.alt}
              ></li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}

export default About;
