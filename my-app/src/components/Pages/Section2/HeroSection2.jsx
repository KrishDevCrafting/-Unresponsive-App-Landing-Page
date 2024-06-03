import React from "react";
import "../Section2/Section2.css";
import img from "./Assets/Group.png";
const Section2 = () => {
  return (
    <>
      <div className="main-box">
        <div className="box">
          <img src={img} alt="img" />
        </div>
        <div className="box">
          <h3>FEATURES</h3>
          <h1>Uifry Preminum</h1>
          <ul>
            <li>budgeting intervals</li>
            <li>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </li>
            <li>budgeting intervals</li>
            <li>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </li>
            <li>budgeting intervals</li>
            <li>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Section2;
