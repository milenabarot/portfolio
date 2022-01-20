import { motion, AnimatePresence } from "framer-motion";
import { Pace, Pause, WindupChildren } from "windups";
import "../styles/header.scss";

function Header() {
  const WindUpOfIntroText = () => {
    return (
      <WindupChildren>
        <Pause ms={1000} />
        <Pace getPace={(char) => (char === " " ? 80 : 30)}>
          {"Hello, I'm Milena. "}
        </Pace>
        <Pause ms={300} />
        <Pace getPace={(char) => (char === " " ? 100 : 40)}>
          {
            "A Frontend Developer who loves to learn new technologies and create cool projects."
          }
        </Pace>
      </WindupChildren>
    );
  };

  return (
    <div className="header" id="header">
      <div className="header--intro">
        <h1 id="headerTitle" className="header--intro-title">
          Milena Barot
        </h1>

        <AnimatePresence>
          <motion.p
            initial={{ opacity: 0, x: -450 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="header--intro-body"
          >
            <WindUpOfIntroText />
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
