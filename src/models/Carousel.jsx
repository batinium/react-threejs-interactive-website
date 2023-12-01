import React, { useEffect, useRef } from "react";
import Plane from "./Plane";
import DRaccoon from "./DreamingRaccoon";
import MRaccoon from "./RaccoonMascot";
import MailboxPhone from "./MailboxPhone";
import FHouse from "./ForestHouse";
import BunnyD from "../models/BunnyDetective";
import Desk from "./Stylized_Desk";
import Frog from "./Frog";
import Bird from "../models/Bird";
const Carousel = ({ scale, ...props }) => {
  return (
    <group
      {...props}
      scale={scale}
      rotation-y={-Math.PI / 4}
      position-y={-0.01}
    >
      <group>
        <Bird position={[-5, 0, 1]} scale={[0.001, 0.001, 0.001]} />
        <Frog
          position={[2, -0.6, -2]}
          scale={[0.5, 0.5, 0.5]}
          rotation={[0, (Math.PI / 180) * 140, 0]}
        />
        <Desk
          position={[-1.5, -0.6, -1.5]}
          scale={[0.01, 0.01, 0.01]}
          rotation={[0, (Math.PI / 180) * 135, 0]}
        />
        <BunnyD radius={5} speed={0.002} scale={[0.3, 0.3, 0.3]} />
        <FHouse
          position={[0, -1, 0]}
          scale={[0.007, 0.007, 0.007]}
          rotation={[0, Math.PI - 0.5, 0]}
        />
        <MailboxPhone
          position={[-2, -0.6, 2]}
          scale={[0.15, 0.15, 0.15]}
          rotation={[0, Math.PI / 4, 0]}
        />
        {/* <DRaccoon position={[-10, 0, 0]} scale={[0.05, 0.05, 0.05]} /> */}
        <MRaccoon
          position={[2, -0.4, 2]}
          scale={[0.1, 0.1, 0.1]}
          rotation={[0, Math.PI / 4, 0]}
        />
        <mesh position={[0, -0.7, 0]}>
          <meshStandardMaterial color={"#80917e"} />
          <cylinderGeometry args={[15, 15, 1 / 6, 64]} />
        </mesh>
        {/* <mesh scale={[1 / 6, 1, 6]}>
          <boxGeometry />
          <meshStandardMaterial color={"#9a6055"} />
        </mesh>
        <mesh scale={[6, 1, 1 / 6]}>
          <boxGeometry />
          <meshStandardMaterial color={"#9a6055"} />
        </mesh> */}
      </group>
    </group>
  );
};

export default Carousel;
