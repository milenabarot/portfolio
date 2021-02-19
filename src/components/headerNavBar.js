import classNames from "classnames";
import { useState } from "react";
import "../styles/headerNavBar.scss";

function HeaderNavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const navBarItems = ["projects", "about", "contact"];
  return (
    <nav className="headerNavBar">
      {isNavBarOpen ? (
        <ul className="headerNavBar-navBarItems">
          {navBarItems.map((navBarItem) => {
            return (
              <li className="headerNavBar-navBarItem">
                <a href={`#${navBarItem}`}>{navBarItem}</a>
              </li>
            );
          })}
        </ul>
      ) : null}
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
