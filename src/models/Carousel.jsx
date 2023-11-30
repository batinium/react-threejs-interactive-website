import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import DRaccoon from "./DreamingRaccoon";
import MRaccoon from "./RaccoonMascot";
import MailboxPhone from "./MailboxPhone";
import FHouse from "./ForestHouse";

const Carousel = ({ scale, ...props }) => {
  return (
    <group
      {...props}
      scale={scale}
      rotation-y={-Math.PI / 4}
      position-y={-0.01}
    >
      <group>
        <FHouse
          position={[0, -1, 0]}
          scale={[0.007, 0.007, 0.007]}
          rotation={[0, Math.PI - 0.5, 0]}
        />
        <MailboxPhone
          position={[-1.6, -0.42, 1.6]}
          scale={[0.2, 0.2, 0.2]}
          rotation={[0, Math.PI / 4, 0]}
        />
        <DRaccoon position={[-10, 0, 0]} scale={[0.05, 0.05, 0.05]} />
        <MRaccoon
          position={[2, -0.4, 2]}
          scale={[0.1, 0.1, 0.1]}
          rotation={[0, Math.PI / 4, 0]}
        />
        <mesh position={[0, -0.7, 0]}>
          <meshStandardMaterial color={"#80917e"} />
          <cylinderGeometry args={[5, 5, 1 / 6, 64]} />
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
