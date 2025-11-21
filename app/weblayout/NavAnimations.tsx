"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 3D Cosmic Particles Component
export const CosmicParticles = () => {
  const particlesRef = useRef<THREE.Points | null>(null);
  const particleCount = 3000;

  const particleData = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 80 + 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      velocities[i * 3] = (Math.random() - 0.5) * 0.03;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.03;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.03;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    return { positions, velocities, sizes };
  }, [particleCount]);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      positions[i3] += particleData.velocities[i3];
      positions[i3 + 1] += particleData.velocities[i3 + 1];
      positions[i3 + 2] += particleData.velocities[i3 + 2];

      positions[i3] += Math.sin(time * 0.3 + i * 0.01) * 0.01;
      positions[i3 + 1] += Math.cos(time * 0.4 + i * 0.01) * 0.01;
      positions[i3 + 2] += Math.sin(time * 0.2 + i * 0.02) * 0.015;

      const maxDist = 100;
      if (Math.abs(positions[i3]) > maxDist) positions[i3] *= -0.9;
      if (Math.abs(positions[i3 + 1]) > maxDist) positions[i3 + 1] *= -0.9;
      if (Math.abs(positions[i3 + 2]) > maxDist) positions[i3 + 2] *= -0.9;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;

    particlesRef.current.rotation.y = time * 0.03;
    particlesRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particleData.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[particleData.sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        color="#39ACE2"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
};

export const SecondaryParticles = () => {
  const particlesRef = useRef<THREE.Points | null>(null);
  const particleCount = 1500;

  const particleData = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      velocities[i * 3] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    return { positions, velocities };
  }, [particleCount]);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] += particleData.velocities[i3];
      positions[i3 + 1] += particleData.velocities[i3 + 1];
      positions[i3 + 2] += particleData.velocities[i3 + 2];

      if (Math.abs(positions[i3]) > 60) positions[i3] *= -0.95;
      if (Math.abs(positions[i3 + 1]) > 60) positions[i3 + 1] *= -0.95;
      if (Math.abs(positions[i3 + 2]) > 30) positions[i3 + 2] *= -0.95;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.y = -time * 0.02;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particleData.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#0B5DA7"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
};

export const ParticleScene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[20, 20, 20]} intensity={0.4} color="#39ACE2" />
      <pointLight position={[-20, -20, -10]} intensity={0.3} color="#0B5DA7" />
      <CosmicParticles />
      <SecondaryParticles />
    </>
  );
};

export const ParticleCanvas = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        key="canvas"
        camera={{ position: [0, 0, 35], fov: 75 }}
        style={{
          width: "100%",
          height: "100%",
          background: `
            linear-gradient(170deg, 
              #000000 0%, 
              #000204 8%,
              #000408 15%, 
              #00060d 22%, 
              #000912 28%,
              #000c18 34%,
              #000f1e 40%,
              #001224 46%, 
              #00152a 52%,
              #001830 58%,
              #001b36 64%,
              #001e3c 70%, 
              #002242 76%, 
              #002648 82%,
              #002a4e 86%, 
              #003055 90%,
              #00365c 93%,
              #004068 95%,
              #0B5DA7 97%, 
              #1a6db5 98.5%, 
              #39ACE2 100%)
          `,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <ParticleScene />
      </Canvas>
    </div>
  );
};

const NavAnimations = () => {
  return (
    <div>Navbar Animations Files</div>
  )
}

export default NavAnimations;