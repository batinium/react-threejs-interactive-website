import { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Plane = ({ radius, speed, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);
  const angle = useRef(0);
  useEffect(() => {
    actions["Take 001"].play();
    scene.rotation.y = Math.PI; // Rotate 180 degrees if the plane is flying backwards
  }, [actions]);
  useFrame(() => {
    angle.current += speed;
    const x = radius * Math.cos(angle.current);
    const z = radius * Math.sin(angle.current);
    const nextX = radius * Math.cos(angle.current + speed);
    const nextZ = radius * Math.sin(angle.current + speed);

    ref.current.position.set(x, 0, z);
    const lookAtVector = new THREE.Vector3(nextX, 0, nextZ);
    ref.current.lookAt(lookAtVector);
  });
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
