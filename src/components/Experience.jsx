import React, { Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loader from "./Loader";
import Sky from "../models/Sky";

import Carousel from "../models/Carousel";

const Experience = ({ isRotating, setCurrentStage }) => {
  const { camera } = useThree();
  const adjustExperienceForScreenSize = () => {
    let screenScale = null;
    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale];
  };

  const getOrbitControlLimits = () => {
    if (window.innerWidth < 768) {
      return { minDistance: 2, maxDistance: 4 }; // Closer zoom for smaller screens
    } else {
      return { minDistance: 3, maxDistance: 6 }; // Default zoom for larger screens
    }
  };

  const { minDistance, maxDistance } = getOrbitControlLimits();

  const [experienceScale] = adjustExperienceForScreenSize();

  useFrame(() => {
    // Calculate the angle in radians of the camera around the Y-axis
    const angle = Math.atan2(camera.position.x, camera.position.z);

    // Normalize the angle to be between 0 and 2 * Math.PI
    const normalizedAngle = (angle + 2 * Math.PI) % (2 * Math.PI);

    // Adjust angle by 45 degrees (π/4 radians)
    const adjustedAngle = (normalizedAngle + Math.PI / 4) % (2 * Math.PI);

    // Determine the current stage based on the adjusted angle
    if (adjustedAngle >= 0 && adjustedAngle < Math.PI / 2) {
      setCurrentStage(1); // Facing the first quadrant
    } else if (adjustedAngle >= Math.PI / 2 && adjustedAngle < Math.PI) {
      setCurrentStage(2); // Facing the second quadrant
    } else if (adjustedAngle >= Math.PI && adjustedAngle < (3 * Math.PI) / 2) {
      setCurrentStage(3); // Facing the third quadrant
    } else {
      setCurrentStage(4); // Facing the fourth quadrant
    }
  });

  return (
    <>
      <Carousel scale={experienceScale} />
      <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <hemisphereLight
          skyColor={"#b1e1ff"}
          groundColor={"#000000"}
          intensity={1}
        />
        <Sky isRotating={isRotating} />

        <OrbitControls
          target={[0, 0, 1]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          minDistance={minDistance}
          maxDistance={maxDistance}
        />
      </Suspense>
    </>
  );
};

export default Experience;
