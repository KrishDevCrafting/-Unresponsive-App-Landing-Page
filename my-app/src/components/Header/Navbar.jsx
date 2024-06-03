import React from "react";
import "../Header/Navbar.css";
import { motion } from "framer-motion";
import fire from "./Asset/Frame.png";

const Navbar = () => {
  return (
    <div className="nav">
      <motion.div
        className="change"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={fire} alt="img" />
          <p id="style">Utility</p>
        </a>
      </motion.div>

      <motion.div
        id="home"
        className="center size"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Home
        </a>
      </motion.div>

      <motion.div
        className="center size"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          About-me
        </a>
      </motion.div>

      <motion.div
        className="center size"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Pricing
        </a>
      </motion.div>

      <motion.div
        className="center size"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Features
        </a>
      </motion.div>

      <motion.div
        className="center size"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <button id="btn">Download</button>
        </a>
      </motion.div>
    </div>
  );
};

export default Navbar;
