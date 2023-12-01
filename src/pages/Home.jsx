import React, { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";
import HomeInfo from "../components/HomeInfo";
import song from "../assets/bgsong.mp3";
import soundon from "../assets/icons/soundon.png";
import soundoff from "../assets/icons/soundoff.png";

const Home = () => {
  const audioRef = useRef(new Audio(song));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas camera={{ near: 0.1, far: 1000, position: [0, -5, 0] }}>
        <Experience setCurrentStage={setCurrentStage} />
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
