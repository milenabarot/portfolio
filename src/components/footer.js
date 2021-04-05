import "../styles/footer.scss";
import linkedinLogo from "../images/logos/linkedinlogo.png";
import githubLogo from "../images/logos/githublogo.png";
import MBLogo from "../images/logos/MBLogo.png";

function Footer() {
  return (
    <div className="footer">
      <a href="#top" className="footer-logo">
        <img src={MBLogo} alt="MB Logo" className="footer-logo-MBLogo" />
      </a>
      <div className="footer-title">
        <a
          href="mailto:milenabarot@gmail.com"
          title="Email me"
          rel="me"
          target="_blank"
        >
          milenabarot@gmail.com
        </a>
      </div>

      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/milena-barot-98282aa4/"
          target="_blank"
          className="footer-link"
        >
          <img
            src={linkedinLogo}
            alt="My Linkedin profile"
            className="footer-link_image"
          />
        </a>
        <a
          href="https://github.com/milenabarot"
          className="footer-link"
          target="_blank"
        >
          <img
            src={githubLogo}
            alt="My Github profile"
            className="footer-link_image"
          />
        </a>
      </div>
      <p className="footer-info">Designed and created by Milena Barot</p>
    </div>
  );
}

export default Footer;
