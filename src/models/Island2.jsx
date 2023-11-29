/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Pixel (https://sketchfab.com/stefan.lengyel1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/medieval-fantasy-book-06d5a80a04fc4c5ab552759e9a97d91a
Title: Medieval Fantasy Book
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import bookScene from "../assets/3d/medieval_fantasy_book.glb";

const Island2 = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials, animations } = useGLTF(bookScene);

  const { actions } = useAnimations(animations, islandRef);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * Math.PI * 0.01;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    } else if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = +0.0125;
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());
    actions["The Life"].play();
    //console.log(actions);
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    actions,
    gl,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleKeyDown,
    handleKeyUp,
  ]);
  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) rotationSpeed.current = 0;
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      // Set the current stage based on the island's orientation
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={islandRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="dad255dd2cf24ae0bb357684e49722b4fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Scene"
                  position={[-4.794, 0, 0.278]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_5" position={[-14, 15.788, 4.337]}>
                    <mesh
                      name="Scene_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Scene_Texture-base_0"].geometry}
                      material={materials["Texture-base"]}
                    />
                    <mesh
                      name="Scene_Texture-base_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Scene_Texture-base_0_1"].geometry}
                      material={materials["Texture-base"]}
                    />
                    <mesh
                      name="Scene_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["Scene_Texture-base-gloss-jpg_0"].geometry
                      }
                      material={materials["Texture-base-gloss-jpg"]}
                    />
                    <mesh
                      name="Scene_Book-tittle_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Scene_Book-tittle_0"].geometry}
                      material={materials["Book-tittle"]}
                    />
                  </group>
                  <group
                    name="Mill-wind-wheel"
                    position={[-35.783, -27.192, 3.888]}
                    rotation={[0.445, -0.447, -0.498]}
                  >
                    <group
                      name="Object_11"
                      position={[-8.253, 39.884, -25.75]}
                      rotation={[-0.607, 0.138, 0.644]}
                    >
                      <mesh
                        name="Mill-wind-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes["Mill-wind-wheel_Texture-base_0"].geometry
                        }
                        material={materials["Texture-base"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Mill-water-wheel"
                    position={[3.708, -15.395, -0.444]}
                    rotation={[-1.92, 0, 0]}
                  >
                    <group name="Object_14" position={[-17.708, 31.183, 4.781]}>
                      <mesh
                        name="Mill-water-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes["Mill-water-wheel_Texture-base_0"].geometry
                        }
                        material={materials["Texture-base"]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="flag"
                  position={[-11.513, 12.497, -6.752]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
                >
                  <group name="Object_17" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="0"
                      castShadow
                      receiveShadow
                      geometry={nodes["0"].geometry}
                      material={materials["Texture-base"]}
                      morphTargetDictionary={nodes["0"].morphTargetDictionary}
                      morphTargetInfluences={nodes["0"].morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="flag-second"
                  position={[-11.494, 12.552, -26.245]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_20" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="1"
                      castShadow
                      receiveShadow
                      geometry={nodes["1"].geometry}
                      material={materials["Texture-base"]}
                      morphTargetDictionary={nodes["1"].morphTargetDictionary}
                      morphTargetInfluences={nodes["1"].morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Waterfall"
                  position={[-4.794, 0, 0.351]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_23" position={[-14, 15.788, 4.337]}>
                    <mesh
                      name="Waterfall_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["Waterfall_Texture-base-gloss-jpg_0"].geometry
                      }
                      material={materials["Texture-base-gloss-jpg"]}
                    />
                  </group>
                </group>
                <group
                  name="deers"
                  position={[-23.122, -0.049, 14.878]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_26" position={[4.328, 30.387, 4.387]}>
                    <mesh
                      name="deers_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["deers_Texture-base_0"].geometry}
                      material={materials["Texture-base"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Island2;
