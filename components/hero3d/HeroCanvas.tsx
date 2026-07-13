"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}