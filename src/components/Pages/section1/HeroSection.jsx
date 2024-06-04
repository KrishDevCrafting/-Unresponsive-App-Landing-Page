import React from "react";
import "../section1/Hero.css";

import img1 from "../Assets/iPhone-13-Pro-Front.png";
import img2 from "../Assets/iPhone-13-Pro-Fronts.png";
import { motion } from "framer-motion";
import ImgDesign from "../Assets/Group 35924.png";
const Main = () => {
  return (
    <>
      <div className="parent">
        <div className="child">
          <motion.h1
            // animate={{ fontSize: 500, color: "red", x: 100, y: -100 }}
            id="text"
          >
            Make The Best
          </motion.h1>
          <h1>Finacial Decisions</h1>
          <p id="inner-text">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <button id="child-btn">
            Get Started
            <svg
              width="25"
              height="8"
              viewBox="0 0 25 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                fill="white"
              />
            </svg>
          </button>
          <button id="child-btn-2"> Watch Video</button>
          <span id="img-design">
            <img src={ImgDesign} alt="img" />
          </span>
        </div>
        <div className="child-2">
          <img id="img1" src={img2} alt="img1" />
          <img id="img2" src={img1} alt="img2" />
          <img id="img3" src={img2} alt="img3" />
        </div>
      </div>
    </>
  );
};

export default Main;
