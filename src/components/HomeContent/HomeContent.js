import React from "react";
import "./HomeContent.css";
import HomeMiniCard from "./HomeMiniCard";
import Agency from "../../img/agency.svg";
import Digital from "../../img/digital.svg";
import Coop from "../../img/coop.svg";
import HB from "../../img/hb.svg";
import Konga from "../../img/konga.svg";
import Egole from "../../img/egole.svg";
import Amali from "../../img/amali.svg";
import Riby from "../../img/riby.svg";
import Sabi from "../../img/sabi.svg";
import GB from "../../img/gatebank.svg";
import TB from "../../img/thrift-bank.svg";
import HomeImg from "../../img/homepage_img.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const homeVariants = {
  startAnimation: {
    opacity: 0,
  },
  endAnimation: {
    opacity: 1,
    transition: {
      duration: 1.5,
      type: " ",
      stiffness: 60,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  startAnimation: {
    opacity: 0,
    y: -50,
  },
  endAnimation: {
    opacity: 1,
    y: 0,
  },
};

const childVariantsBottom = {
  startAnimation: {
    opacity: 0,
    y: 50,
  },
  endAnimation: {
    opacity: 1,
    y: 0,
  },
};

const imgVariants = {
  startAnimation: {
    opacity: 0,
    x: 100,
  },
  endAnimation: {
    opacity: 1,
    x: 0,
  },
};
const HomeContent = () => {
  return (
    <motion.div initial="startAnimation" animate="endAnimation">
      <motion.div variants={homeVariants} className="home-content-container">
        <motion.div className="home-content-left" variants={homeVariants}>
          <motion.h2 variants={childVariants} className="home-title">
            Powering last mile transactions in <span>Africa! </span>{" "}
          </motion.h2>
          <div className="home-details">
            <motion.p variants={childVariants}>
              We’re a type of branchless banking that allows the traditional
              banks to extend their network of branches and services in a
              cost-efficient manner through authorized agents. Agency banking is
              gaining popularity due to various reasons like product
              availability, risk management, improvement in financial inclusion,
              and many more...
            </motion.p>
            <motion.p variants={childVariants}>
              Bytestacks Technology limited provides you with everything your
              company/business needs; from top notch custom web and mobile
              solutions, IT consulting, full-cycle software development and
              UX/UI design.
            </motion.p>
          </div>

          <motion.div variants={childVariants} className="banking-type">
            <HomeMiniCard
              linkTo="/AgencyBanking"
              leftClass="leftdiv"
              img={Agency}
              title="Agency Banking"
            />
            <HomeMiniCard
              linkTo="/Analytics"
              img={Digital}
              title="Analytics"
              leftClass="middlediv"
            />
            <HomeMiniCard
              linkTo="/SoftwareSolutions"
              img={Coop}
              title="Software Solutions"
              leftClass="rightdiv"
            />
          </motion.div>

          <div className="platforms-container">
            <div className="platforms">
              <motion.h5
                variants={childVariantsBottom}
                className="platforms-title"
              >
                Platforms we power :{" "}
              </motion.h5>
            </div>
            <motion.div
              variants={childVariantsBottom}
              className="platforms-imgs"
            >
              <img src={HB} alt="" className="platform-img" />
              <img src={Konga} alt="" className="platform-img" />
              <img src={Egole} alt="" className="platform-img" />
              <img src={Amali} alt="" className="platform-img" />
              <img src={Riby} alt="" className="platform-img" />
              <img src={Sabi} alt="" className="platform-img" />
              <img src={GB} alt="" className="platform-img" />
              <img src={TB} alt="" className="platform-img" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div variants={imgVariants} className="home-content-right">
          <img src={HomeImg} alt="" className="home-img" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomeContent;
