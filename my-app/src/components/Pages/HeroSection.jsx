import React from "react";
import "../Pages/Hero.css";
import img1 from "./Assets/iPhone-13-Pro-Front.png";
import img2 from "./Assets/iPhone-13-Pro-Fronts.png";
const Main = () => {
  return (
    <>
      <div className="parent">
        <div className="child">
          <h1 id="text">Make The Best </h1>
          <h1>Finacial Decisions</h1>
        </div>
        <div className="child-2">
          <img id="img1" src={img1} alt="img1" />
          <img id="img2" src={img2} alt="img2" />
          <img id="img3" src={img2} alt="img3" />
        </div>
      </div>
    </>
  );
};

export default Main;
