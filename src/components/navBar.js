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
        style={{ width: `${scrollPosition}%` }}
        className="navBar-progressBar"
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
              className="navBar-title"
              href="#top"
            >
              Milena Barot
            </motion.a>
          )}
        </AnimatePresence>
        <div className="navBar-wrapListAndButton">
          <AnimatePresence>
            {isNavBarOpen ? (
              <motion.ul
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 150 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                key="navBar-menuItems"
                className="navBar-menuItems"
              >
                {menuItems.map((menuItem) => {
                  return (
                    <li className="navBar-menuItem" key={`${menuItem}`}>
                      <a href={`#${menuItem}`}>{menuItem}</a>
                    </li>
                  );
                })}
              </motion.ul>
            ) : null}
          </AnimatePresence>

          <button className="navBar-hamburgerButton" onClick={toggleNavBar}>
            <AnimateSharedLayout>
              <motion.p layout className="navBar-hamburgerButtonTag">
                &lt;
              </motion.p>
              <AnimatePresence>
                {isNavBarOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="navBar-hamburgerButtonSlash"
                  ></motion.div>
                )}
              </AnimatePresence>

              <motion.p layout className="navBar-hamburgerButtonTag">
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
