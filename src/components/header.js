import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/header.scss";

function Header() {
  return (
    <div className="header" id="header">
      <div className="header-intro">
        <h1 id="headerTitle" className="header-intro-title">
          Milena Barot
        </h1>
        <AnimatePresence>
          <motion.p
            initial={{ opacity: 0, x: -450 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="header-intro-body"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            augue purus. Aenean et semper lorem, sit amet dictum lectus.
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
