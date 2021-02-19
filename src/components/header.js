import { useEffect, useState } from "react";
import HeaderNavBar from "./headerNavBar";
import "../styles/header.scss";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      calculateScrollDistance();
    });
  }, []);

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

  return (
    <div className="header">
      <div
        style={{ width: `${scrollPosition}%` }}
        className="header-progressBar"
      ></div>
      <HeaderNavBar />
      <h1>Milena Barot</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        augue purus. Aenean et semper lorem, sit amet dictum lectus.
      </p>
    </div>
  );
}

export default Header;
