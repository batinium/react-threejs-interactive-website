import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import RobotC from "../models/Robot";
import StudyR from "../models/StudyRoom";

const Carousel = ({ scale, ...props }) => {
  return (
    <group
      {...props}
      scale={scale}
      rotation-y={-Math.PI / 4}
      position-y={-0.01}
    >
      <group>
        <RobotC
          currentAnimation={"Experiment"}
          scale={scale}
          position={[0.8, -0.4, 0.8]}
        />
        <StudyR scale={scale} position={[0, 0, 0]} />
        <mesh position={[0, -1 / 2, 0]}>
          <meshStandardMaterial color={"blue"} />
          <cylinderGeometry args={[3, 3, 1 / 6, 64]} />
        </mesh>
        <mesh scale={[1 / 6, 1, 6]}>
          <boxGeometry />
          <meshStandardMaterial color={"purple"} />
        </mesh>
        <mesh scale={[6, 1, 1 / 6]}>
          <boxGeometry />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </group>
    </group>
  );
};

export default Carousel;
