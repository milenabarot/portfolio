import { useEffect, useState } from "react";

import "../styles/header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-intro">
        <h1 id="headerTitle" className="header-intro-title">
          Milena Barot
        </h1>
        <p className="header-intro-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          augue purus. Aenean et semper lorem, sit amet dictum lectus.
        </p>
      </div>
    </div>
  );
}

export default Header;
