"use client";

export default function FloatingGlow() {
  return (
    <mesh position={[-3.8, 1.8, -2]}>
      <sphereGeometry args={[1.3, 64, 64]} />
      <meshBasicMaterial
        color="#8B42FF"
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}