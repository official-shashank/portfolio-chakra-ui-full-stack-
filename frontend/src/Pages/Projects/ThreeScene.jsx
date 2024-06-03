// ThreeScene.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import icon1 from "../../assets/icons1.png"
import icon2 from "../../assets/icons2.png"
import icon3 from "../../assets/icons3.png"
const FloatingIcons = () => {
  const group = useRef();
  const textures = useTexture([icon1, icon2, icon3]);

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <group ref={group}>
      {textures.map((texture, index) => (
        <mesh key={index} position={[index * 2 - 2, 0, 0]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>
      ))}
    </group>
  );
};

const ThreeScene = () => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingIcons />
    </Canvas>
  );
};

export default ThreeScene;
