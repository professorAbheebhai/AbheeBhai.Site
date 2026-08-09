import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Box, Stars, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

function Shapes() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += 0.0012;
    group.current.rotation.x = y * 0.12;
    group.current.position.x = x * 0.5;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={1.1} floatIntensity={1.6}>
        <Icosahedron args={[1.15, 1]} position={[-3.1, 0.6, -1]}>
          <MeshDistortMaterial
            color="#7c3aed"
            distort={0.35}
            speed={1.4}
            roughness={0.15}
            metalness={0.7}
          />
        </Icosahedron>
      </Float>

      <Float speed={0.9} rotationIntensity={1.4} floatIntensity={1.2}>
        <TorusKnot args={[0.75, 0.24, 160, 24]} position={[3.2, -0.5, -1.5]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.35}
            roughness={0.25}
            metalness={0.6}
          />
        </TorusKnot>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={2}>
        <Box args={[0.85, 0.85, 0.85]} position={[1.5, 1.9, -2.5]}>
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.6}
          />
        </Box>
      </Float>

      <Float speed={1.1} rotationIntensity={1} floatIntensity={1.4}>
        <Icosahedron args={[0.5, 0]} position={[-1.9, -1.9, -2]}>
          <meshStandardMaterial color="#a78bfa" roughness={0.25} metalness={0.6} wireframe />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.6} />
      <pointLight position={[6, 6, 6]} intensity={220} color="#7c3aed" />
      <pointLight position={[-6, -4, 4]} intensity={180} color="#06b6d4" />
      <Stars radius={60} depth={40} count={1800} factor={3} saturation={0} fade speed={0.6} />
      <Shapes />
    </Canvas>
  );
}
