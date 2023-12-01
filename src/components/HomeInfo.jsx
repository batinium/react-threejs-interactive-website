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
      Hello, I am <span className="font-semibold"> Batin</span> 👋 <br />
      an Aviation English Specialist and a Hobbyist Developer, <br />
      with a passion for learning and teaching. <br />I am currently interested
      in <span className="font-semibold">Game Development</span> and{" "}
      <span className="font-semibold">Graphics Programming</span>.
    </h1>
  ),
  2: (
    <InfoBox
      text="Here is my story and my skills you can check out"
      link="/about"
      btnText={"About Me"}
    />
  ),
  3: (
    <InfoBox
      text="Here is my projects you can check out"
      link="/projects"
      btnText={"My Projects"}
    />
  ),
  4: (
    <InfoBox
      text="Get in touch with me for any questions or collaborations"
      link="/contact"
      btnText={"Contact Me"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
