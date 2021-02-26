import classNames from "classnames";
import { useState } from "react";
import "../styles/headerNavBar.scss";
import { AnimatePresence, motion } from "framer-motion";

function HeaderNavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const navBarItems = ["projects", "about", "contact"];
  return (
    <nav className="headerNavBar">
      <AnimatePresence>
        {isNavBarOpen ? (
          <motion.ul
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            key="headerNavBar-navBarItems"
            className="headerNavBar-navBarItems"
          >
            {navBarItems.map((navBarItem) => {
              return (
                <li className="headerNavBar-navBarItem" key={`${navBarItem}`}>
                  <a href={`#${navBarItem}`}>{navBarItem}</a>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>

      <button
        className={classNames("headerNavBar-hamburgerButton", {
          "headerNavBar-hamburgerButton_isOpen": isNavBarOpen,
        })}
        onClick={toggleNavBar}
      >
        <div className="headerNavBar-hamburgerButtonLine headerNavBar-hamburgerButtonLine_isLine1"></div>
        <div className="headerNavBar-hamburgerButtonLine headerNavBar-hamburgerButtonLine_isLine2"></div>
        <div className="headerNavBar-hamburgerButtonLine headerNavBar-hamburgerButtonLine_isLine3"></div>
      </button>
    </nav>
  );
}

export default HeaderNavBar;
