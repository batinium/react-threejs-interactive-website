import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold"> Batin</span> 👋 <br />a
      full-stack developer with a passion for building beautiful
    </h1>
  ),
  2: (
    <InfoBox
      text="You can find more info about me"
      link="/about"
      btnText={"About me"}
    />
  ),
  3: (
    <InfoBox
      text="Here are my projects you can check"
      link="/projects"
      btnText={"My Projects"}
    />
  ),
  4: (
    <InfoBox
      text="Do you have any questions that you need to ask?"
      link="/contact"
      btnText={"Contact With Me"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
