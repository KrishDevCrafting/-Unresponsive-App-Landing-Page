import React from "react";
import "../Section2/Section2.css";
import { motion } from "framer-motion";
import img from "./Assets/Group.png";
import IconImg from "./Assets/star-05.png";
import IconImg2 from "./Assets/Icon.png";
import IconImg3 from "./Assets/IconBox.png";
import iphoneImg from "./Assets/Group.png";
import iphoneVisa from "./Assets/GroupVisa.png";
import StartOr from "./Assets/GroupStart.png";
import ImgPeople from "./Assets/GroupPeople.png";
import GroupMen from "./Assets/GroupTech.png";

const Section2 = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <div className="main-box">
        <div className="box">
          <motion.img
            src={img}
            alt="img"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          />
        </div>

        <div className="box">
          <motion.h3 initial="hidden" animate="visible" variants={fadeInUp}>
            FEATURES
          </motion.h3>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            Uifry Premium
          </motion.h1>
          <ul>
            <motion.li initial="hidden" animate="visible" variants={fadeInUp}>
              <img id="star-icon" src={IconImg} alt="" />
              budgeting intervals
            </motion.li>
            <motion.li initial="hidden" animate="visible" variants={fadeInUp}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </motion.li>
            <motion.li initial="hidden" animate="visible" variants={fadeInUp}>
              <img id="star-icon" src={IconImg2} alt="img-2" />
              budgeting intervals
            </motion.li>
            <motion.li initial="hidden" animate="visible" variants={fadeInUp}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </motion.li>
            <motion.li initial="hidden" animate="visible" variants={fadeInUp}>
              <img id="star-icon" src={IconImg3} alt="img-3" />
              budgeting intervals
            </motion.li>
            <motion.li initial="hidden" animate="visible" variants={fadeInUp}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </motion.li>
          </ul>
        </div>
      </div>
      <section>
        <div className="main-box-2">
          <div className="box-2">
            <motion.h3
              id="heading"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              advantages
            </motion.h3>
            <motion.h1
              id="sub-heading"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              why choose Uifry?
            </motion.h1>
            <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
              clever notifications
            </motion.h2>
            <motion.p
              id="text"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </motion.p>
          </div>
          <div className="box-2">
            <motion.span initial="hidden" animate="visible" variants={fadeInUp}>
              <img src={iphoneImg} alt="img" />
            </motion.span>
          </div>
        </div>
      </section>
      <section>
        <div className="main-box-3">
          <div className="box-3">
            <motion.span initial="hidden" animate="visible" variants={fadeInUp}>
              <img src={iphoneVisa} alt="" />
            </motion.span>
          </div>
          <div className="box-3">
            <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
              <img id="startOr" src={StartOr} alt="" />
              fully customizable
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <motion.h1
          id="align"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          what our users say about us?
        </motion.h1>
        <div className="main-box-4">
          <div className="box-4">
            <motion.span initial="hidden" animate="visible" variants={fadeInUp}>
              <img src={ImgPeople} alt="" />
            </motion.span>
          </div>
          <div className="box-4">
            <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
              the best financial accounting app ever!
            </motion.h1>
            <motion.p
              id="text-style"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </motion.p>
            <motion.span initial="hidden" animate="visible" variants={fadeInUp}>
              <img id="GroupMenImg" src={GroupMen} alt="img" />
              <p id="name">nick jonas</p>
            </motion.span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
