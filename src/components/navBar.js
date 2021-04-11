import { useEffect, useState } from "react";
import "../styles/navBar.scss";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

function NavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavBarTitleVisible, setIsNavBarTitleVisible] = useState(false);

  useEffect(() => {
    shouldShowNavBarTitle();

    window.addEventListener("scroll", (event) => {
      calculateScrollDistance();
      shouldShowNavBarTitle();
    });
  }, []);

  // nav bar title visible

  const shouldShowNavBarTitle = () => {
    const scrollTop = window.pageYOffset;
    const headerTitleElement = document.querySelector("#headerTitle");
    const totalDistanceFromTop =
      headerTitleElement.offsetHeight + headerTitleElement.offsetTop;
    if (scrollTop >= totalDistanceFromTop) {
      setIsNavBarTitleVisible(true);
    } else {
      setIsNavBarTitleVisible(false);
    }
  };

  //progress bar
  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const newScrollPosition = Math.floor(
      (scrollTop / totalDocScrollLength) * 100
    );

    setScrollPosition(newScrollPosition);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const menuItems = ["projects", "about", "contact"];
  return (
    <>
      <div
        role="progressbar"
        aria-valuenow={scrollPosition}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuetext="Page vertical scroll progress "
        style={{ width: `${scrollPosition}%` }}
        className="navBar--progress-bar"
      ></div>
      <nav className="navBar">
        <AnimatePresence exitBeforeEnter>
          {isNavBarTitleVisible && (
            <motion.a
              initial={{ opacity: 0, x: "-30%" }}
              animate={{ opacity: 1, x: "40%" }}
              exit={{ opacity: 0, x: "-30%" }}
              transition={{ duration: 0.8 }}
              key={"navbar-title"}
              className="navBar--title"
              href="#top"
            >
              Milena Barot
            </motion.a>
          )}
        </AnimatePresence>
        <div className="navBar--wrap-list-and-button">
          <AnimatePresence>
            {isNavBarOpen ? (
              <motion.ul
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 150 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                key="navBar--menu-items"
                className="navBar--menu-items"
              >
                {menuItems.map((menuItem) => {
                  return (
                    <li className="navBar--menu-item" key={`${menuItem}`}>
                      <a href={`#${menuItem}`} tabIndex="2">
                        {menuItem}
                      </a>
                    </li>
                  );
                })}
              </motion.ul>
            ) : null}
          </AnimatePresence>

          <button
            className="navBar--hamburger-button"
            onClick={toggleNavBar}
            aria-expanded={isNavBarOpen}
            aria-label="Main navigation menu"
            tabIndex="1"
          >
            <AnimateSharedLayout>
              <motion.p layout className="navBar--hamburger-button-tag">
                &lt;
              </motion.p>
              <AnimatePresence>
                {isNavBarOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="navBar--hamburger-button-slash"
                  ></motion.div>
                )}
              </AnimatePresence>

              <motion.p layout className="navBar--hamburger-button-tag">
                &gt;
              </motion.p>
            </AnimateSharedLayout>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
