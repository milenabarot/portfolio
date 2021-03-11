import "../styles/about.scss";
import profilepic from "../images/profilepic.jpg";

function About() {
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
