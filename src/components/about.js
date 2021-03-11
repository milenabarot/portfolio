import "../styles/about.scss";
import profilepic from "../images/profilepic.jpg";
import { useEffect, useState } from "react";

function About() {
  const [isAboutComponentVisible, setIsAboutComponentVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      shouldShowAboutComponent();
    });
  }, []);

  // scroll function to calculate when to show About component

  const shouldShowAboutComponent = () => {
    const scrollTop = window.pageYOffset;
    const aboutElement = document.querySelector("#about");
    const headerElement = document.querySelector("#header");
    const projectsElement = document.querySelector("#projects");

    const aboutTotalDistanceFromTop = aboutElement.offsetHeight;
    const headerTotalDistanceFromTop = headerElement.offsetHeight;
    const projectsTotalDistanceFromTop = projectsElement.offsetHeight;

    const distanceNeeded =
      headerTotalDistanceFromTop +
      projectsTotalDistanceFromTop -
      aboutTotalDistanceFromTop;

    if (scrollTop >= distanceNeeded) {
      setIsAboutComponentVisible(true);
    }
  };

  return (
    <div id="about" className="about">
      <h2 className="about-title">About</h2>
      <div className="about-image">
        <img src={profilepic} alt="My profile picture" />
      </div>
      <p className="about-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        augue purus. Aenean et semper lorem, sit amet dictum lectus.
      </p>
    </div>
  );
}

export default About;
