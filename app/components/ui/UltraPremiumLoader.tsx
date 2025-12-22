// "use client";

// import { useEffect, useState, useRef, useCallback } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import {
//   MeshWobbleMaterial,
//   Float,
//   Center,
//   Environment,
//   OrbitControls,
//   Text,
//   Sphere,
//   Box,
//   Torus,
//   Cone,
//   Tetrahedron,
//   Octahedron,
//   Dodecahedron,
//   Icosahedron,
//   Ring,
// } from "@react-three/drei";
// import { motion, AnimatePresence } from "framer-motion";
// import * as THREE from "three";
// import { RiLoader2Fill } from "react-icons/ri";

// /* =========================
//    3D SUNRISE TEXT
// ========================= */
// function SunriseText() {
//   const meshRef = useRef<THREE.Mesh>(null);
//   const [hovered, setHovered] = useState(false);

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y =
//         Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
//       meshRef.current.rotation.x =
//         Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
//       <Center>
//         <Text
//           ref={meshRef}
//           fontSize={1.2}
//           letterSpacing={0.1}
//           onPointerOver={() => setHovered(true)}
//           onPointerOut={() => setHovered(false)}
//         >
//           SUNRISE
//           <MeshWobbleMaterial
//             color={hovered ? "#6BB6E8" : "#1F4FA3"}
//             emissive="#6BB6E8"
//             emissiveIntensity={0.35}
//             metalness={0.9}
//             roughness={0.1}
//             factor={hovered ? 0.3 : 0.1}
//             speed={hovered ? 2 : 1}
//           />
//         </Text>
//       </Center>
//     </Float>
//   );
// }

// /* =========================
//    MASSIVE STARFIELD PARTICLES - ULTRA DENSE
// ========================= */
// function StarfieldParticles({ count = 12000 }: { count: number }) {
//   const meshRef = useRef<THREE.Points>(null);
//   const positions = useRef(new Float32Array(count * 3));
//   const colors = useRef(new Float32Array(count * 3));
//   const sizes = useRef(new Float32Array(count));
//   const velocities = useRef(new Array(count).fill(null).map(() => ({
//     x: (Math.random() - 0.5) * 0.05,
//     y: (Math.random() - 0.5) * 0.05,
//     z: (Math.random() - 0.5) * 0.05
//   })));

//   useEffect(() => {
//     // Initialize ultra-dense starfield
//     for (let i = 0; i < count; i++) {
//       // Random positions in multiple layers
//       const layer = Math.floor(Math.random() * 3);
//       let radius;
      
//       if (layer === 0) {
//         radius = 15 + Math.random() * 20; // Close layer
//       } else if (layer === 1) {
//         radius = 40 + Math.random() * 30; // Middle layer
//       } else {
//         radius = 80 + Math.random() * 50; // Far layer
//       }
      
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
      
//       positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
//       positions.current[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
//       positions.current[i * 3 + 2] = radius * Math.cos(phi);

//       // Premium color palette
//       const color = new THREE.Color();
//       const colorType = Math.random();
//       if (colorType < 0.5) {
//         // Crystal blue-white stars
//         color.setRGB(0.9, 0.95, 1);
//       } else if (colorType < 0.75) {
//         // Warm golden stars
//         color.setRGB(1, 0.98, 0.9);
//       } else if (colorType < 0.9) {
//         // Icy cyan stars
//         color.setRGB(0.8, 0.95, 1);
//       } else {
//         // Rare violet stars
//         color.setRGB(0.95, 0.85, 1);
//       }
      
//       colors.current[i * 3] = color.r;
//       colors.current[i * 3 + 1] = color.g;
//       colors.current[i * 3 + 2] = color.b;

//       // Size distribution - mostly micro particles
//       const sizeRand = Math.random();
//       if (sizeRand < 0.85) {
//         // Ultra small particles (90% of total)
//         sizes.current[i] = Math.random() * 0.008 + 0.003;
//       } else if (sizeRand < 0.97) {
//         // Medium particles
//         sizes.current[i] = Math.random() * 0.02 + 0.01;
//       } else {
//         // Large particles
//         sizes.current[i] = Math.random() * 0.04 + 0.02;
//       }
//     }
//   }, [count]);

//   useFrame((state) => {
//     if (meshRef.current) {
//       const time = state.clock.elapsedTime;
      
//       // Multi-layered rotation
//       meshRef.current.rotation.y = time * 0.003;
//       meshRef.current.rotation.x = Math.sin(time * 0.05) * 0.005;
      
//       // Update particle positions
//       const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      
//       for (let i = 0; i < count; i++) {
//         const idx = i * 3;
        
//         // Enhanced movement patterns based on size
//         const speed = sizes.current[i] * 5;
//         positionsArray[idx] += velocities.current[i].x * speed;
//         positionsArray[idx + 1] += velocities.current[i].y * speed;
//         positionsArray[idx + 2] += velocities.current[i].z * speed;
        
//         // Add swirling motion
//         const swirl = 0.0008;
//         positionsArray[idx] += Math.sin(time * 0.3 + i * 0.01) * swirl;
//         positionsArray[idx + 1] += Math.cos(time * 0.4 + i * 0.01) * swirl;
//         positionsArray[idx + 2] += Math.sin(time * 0.5 + i * 0.01) * swirl;
        
//         // Smart boundary with teleport effect
//         const maxDistance = 100;
//         for (let j = 0; j < 3; j++) {
//           if (Math.abs(positionsArray[idx + j]) > maxDistance) {
//             positionsArray[idx + j] = (Math.random() - 0.5) * maxDistance * 0.5;
//           }
//         }
        
//         // Dynamic pulsing with varied intensity
//         const pulseIntensity = Math.random() * 0.3 + 0.1;
//         const pulseSpeed = Math.random() * 4 + 2;
//         const scale = 1 + Math.sin(time * pulseSpeed + i * 0.1) * pulseIntensity;
        
//         const sizeAttr = meshRef.current.geometry.attributes.size;
//         if (sizeAttr) {
//           sizeAttr.array[i] = sizes.current[i] * scale;
//           sizeAttr.needsUpdate = true;
//         }
//       }
      
//       meshRef.current.geometry.attributes.position.needsUpdate = true;
//     }
//   });

//   return (
//     <points ref={meshRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           array={positions.current}
//           itemSize={3}
//           count={count}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           array={colors.current}
//           itemSize={3}
//           count={count}
//         />
//         <bufferAttribute
//           attach="attributes-size"
//           array={sizes.current}
//           itemSize={1}
//           count={count}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         vertexColors
//         size={0.025}
//         transparent
//         opacity={0.95}
//         depthWrite={false}
//         sizeAttenuation={true}
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   );
// }

// /* =========================
//    HYPER DENSE BACKGROUND PARTICLES
// ========================= */
// function HyperDenseParticles({ count = 8000 }: { count: number }) {
//   const meshRef = useRef<THREE.Points>(null);
//   const positions = useRef(new Float32Array(count * 3));
//   const colors = useRef(new Float32Array(count * 3));
//   const sizes = useRef(new Float32Array(count));

//   useEffect(() => {
//     for (let i = 0; i < count; i++) {
//       // Create ultra-dense background
//       const radius = 50 + Math.random() * 100;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
      
//       positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
//       positions.current[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
//       positions.current[i * 3 + 2] = radius * Math.cos(phi);

//       // Soft, distant colors
//       const color = new THREE.Color();
//       const colorType = Math.random();
//       if (colorType < 0.4) {
//         color.setRGB(0.3, 0.5, 0.8); // Deep space blue
//       } else if (colorType < 0.7) {
//         color.setRGB(0.4, 0.4, 0.7); // Cosmic purple
//       } else if (colorType < 0.9) {
//         color.setRGB(0.2, 0.6, 0.7); // Nebula cyan
//       } else {
//         color.setRGB(0.6, 0.4, 0.8); // Galactic violet
//       }
      
//       colors.current[i * 3] = color.r;
//       colors.current[i * 3 + 1] = color.g;
//       colors.current[i * 3 + 2] = color.b;

//       // Very small background particles
//       sizes.current[i] = Math.random() * 0.006 + 0.002;
//     }
//   }, [count]);

//   useFrame((state) => {
//     if (meshRef.current) {
//       const time = state.clock.elapsedTime;
      
//       // Gentle cosmic drift
//       meshRef.current.rotation.x = time * 0.0008;
//       meshRef.current.rotation.y = time * 0.0004;
      
//       // Subtle expansion/contraction
//       const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
//       const breath = Math.sin(time * 0.1) * 0.0002;
      
//       for (let i = 0; i < count; i += 1) {
//         const idx = i * 3;
//         positionsArray[idx] *= (1 + breath);
//         positionsArray[idx + 1] *= (1 + breath);
//         positionsArray[idx + 2] *= (1 + breath);
//       }
      
//       meshRef.current.geometry.attributes.position.needsUpdate = true;
//     }
//   });

//   return (
//     <points ref={meshRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           array={positions.current}
//           itemSize={3}
//           count={count}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           array={colors.current}
//           itemSize={3}
//           count={count}
//         />
//         <bufferAttribute
//           attach="attributes-size"
//           array={sizes.current}
//           itemSize={1}
//           count={count}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         vertexColors
//         size={0.01}
//         transparent
//         opacity={0.4}
//         depthWrite={false}
//         sizeAttenuation={true}
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   );
// }

// /* =========================
//    SMALL FAST MOVING PARTICLES
// ========================= */
// function FastMovingParticles({ count = 3000 }: { count: number }) {
//   const meshRef = useRef<THREE.Points>(null);
//   const positions = useRef(new Float32Array(count * 3));
//   const colors = useRef(new Float32Array(count * 3));
//   const sizes = useRef(new Float32Array(count));
//   const velocities = useRef(new Array(count).fill(null).map(() => ({
//     x: (Math.random() - 0.5) * 0.08,
//     y: (Math.random() - 0.5) * 0.08,
//     z: (Math.random() - 0.5) * 0.08
//   })));

//   useEffect(() => {
//     for (let i = 0; i < count; i++) {
//       // Closer, faster moving particles
//       const radius = 5 + Math.random() * 25;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
      
//       positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
//       positions.current[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
//       positions.current[i * 3 + 2] = radius * Math.cos(phi);

//       // Bright, fast-moving colors
//       const color = new THREE.Color();
//       const colorType = Math.random();
//       if (colorType < 0.4) {
//         color.setRGB(0.6, 0.8, 1); // Bright blue
//       } else if (colorType < 0.7) {
//         color.setRGB(0.9, 0.95, 1); // White-blue
//       } else {
//         color.setRGB(0.7, 0.9, 1); // Cyan
//       }
      
//       colors.current[i * 3] = color.r;
//       colors.current[i * 3 + 1] = color.g;
//       colors.current[i * 3 + 2] = color.b;

//       // Small but visible
//       sizes.current[i] = Math.random() * 0.012 + 0.005;
//     }
//   }, [count]);

//   useFrame((state) => {
//     if (meshRef.current) {
//       const time = state.clock.elapsedTime;
      
//       // Fast rotation
//       meshRef.current.rotation.y = time * 0.01;
      
//       const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      
//       for (let i = 0; i < count; i++) {
//         const idx = i * 3;
        
//         // Fast movement
//         positionsArray[idx] += velocities.current[i].x * 0.1;
//         positionsArray[idx + 1] += velocities.current[i].y * 0.1;
//         positionsArray[idx + 2] += velocities.current[i].z * 0.1;
        
//         // Add chaotic motion
//         const chaos = 0.002;
//         positionsArray[idx] += Math.sin(time * 5 + i) * chaos;
//         positionsArray[idx + 1] += Math.cos(time * 4 + i) * chaos;
//         positionsArray[idx + 2] += Math.sin(time * 6 + i) * chaos;
        
//         // Boundary with bounce
//         const maxDistance = 30;
//         for (let j = 0; j < 3; j++) {
//           if (Math.abs(positionsArray[idx + j]) > maxDistance) {
//             velocities.current[i][j === 0 ? 'x' : j === 1 ? 'y' : 'z'] *= -1;
//             positionsArray[idx + j] = Math.sign(positionsArray[idx + j]) * maxDistance * 0.95;
//           }
//         }
        
//         // Twinkling effect
//         const twinkle = 1 + Math.sin(time * 8 + i * 0.2) * 0.3;
//         const sizeAttr = meshRef.current.geometry.attributes.size;
//         if (sizeAttr) {
//           sizeAttr.array[i] = sizes.current[i] * twinkle;
//           sizeAttr.needsUpdate = true;
//         }
//       }
      
//       meshRef.current.geometry.attributes.position.needsUpdate = true;
//     }
//   });

//   return (
//     <points ref={meshRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           array={positions.current}
//           itemSize={3}
//           count={count}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           array={colors.current}
//           itemSize={3}
//           count={count}
//         />
//         <bufferAttribute
//           attach="attributes-size"
//           array={sizes.current}
//           itemSize={1}
//           count={count}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         vertexColors
//         size={0.02}
//         transparent
//         opacity={0.8}
//         depthWrite={false}
//         sizeAttenuation={true}
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   );
// }

// /* =========================
//    3D SHAPES - PREMIUM GEOMETRIC ELEMENTS
// ========================= */
// function FloatingShapes() {
//   const shapesRef = useRef<THREE.Group>(null);
//   const shapes = useRef<Array<{ 
//     type: string, 
//     position: [number, number, number],
//     rotationSpeed: [number, number, number],
//     scale: number,
//     color: string
//   }>>([]);

//   // Initialize 15 premium 3D shapes
//   useEffect(() => {
//     const shapeTypes = ['sphere', 'box', 'torus', 'cone', 'tetrahedron', 'octahedron', 'dodecahedron', 'icosahedron', 'ring'];
//     const colors = ['#6BB6E8', '#1F4FA3', '#4A7DB0', '#8BCFFF', '#2C5AA0', '#3D6CB9'];
    
//     for (let i = 0; i < 15; i++) {
//       const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
//       const position: [number, number, number] = [
//         (Math.random() - 0.5) * 20,
//         (Math.random() - 0.5) * 20,
//         (Math.random() - 0.5) * 20 - 10
//       ];
//       const rotationSpeed: [number, number, number] = [
//         (Math.random() - 0.5) * 0.02,
//         (Math.random() - 0.5) * 0.02,
//         (Math.random() - 0.5) * 0.02
//       ];
//       const scale = Math.random() * 0.3 + 0.1;
//       const color = colors[Math.floor(Math.random() * colors.length)];
      
//       shapes.current.push({ type, position, rotationSpeed, scale, color });
//     }
//   }, []);

//   useFrame((state) => {
//     if (shapesRef.current) {
//       shapesRef.current.children.forEach((shape, i) => {
//         const data = shapes.current[i];
//         if (data && shape) {
//           shape.rotation.x += data.rotationSpeed[0];
//           shape.rotation.y += data.rotationSpeed[1];
//           shape.rotation.z += data.rotationSpeed[2];
          
//           // Floating animation
//           shape.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001;
//           shape.position.x += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.001;
//         }
//       });
//     }
//   });

//   return (
//     <group ref={shapesRef}>
//       {shapes.current.map((shape, i) => {
//         const material = (
//           <meshPhysicalMaterial
//             color={shape.color}
//             emissive={shape.color}
//             emissiveIntensity={0.1}
//             metalness={0.9}
//             roughness={0.1}
//             transparent
//             opacity={0.8}
//             transmission={0.2}
//             thickness={1}
//           />
//         );

//         switch (shape.type) {
//           case 'sphere':
//             return (
//               <Sphere key={i} args={[shape.scale]} position={shape.position}>
//                 {material}
//               </Sphere>
//             );
//           case 'box':
//             return (
//               <Box key={i} args={[shape.scale, shape.scale, shape.scale]} position={shape.position}>
//                 {material}
//               </Box>
//             );
//           case 'torus':
//             return (
//               <Torus key={i} args={[shape.scale, shape.scale * 0.3]} position={shape.position}>
//                 {material}
//               </Torus>
//             );
//           case 'cone':
//             return (
//               <Cone key={i} args={[shape.scale, shape.scale * 1.5]} position={shape.position}>
//                 {material}
//               </Cone>
//             );
//           case 'tetrahedron':
//             return (
//               <Tetrahedron key={i} args={[shape.scale]} position={shape.position}>
//                 {material}
//               </Tetrahedron>
//             );
//           case 'octahedron':
//             return (
//               <Octahedron key={i} args={[shape.scale]} position={shape.position}>
//                 {material}
//               </Octahedron>
//             );
//           case 'dodecahedron':
//             return (
//               <Dodecahedron key={i} args={[shape.scale]} position={shape.position}>
//                 {material}
//               </Dodecahedron>
//             );
//           case 'icosahedron':
//             return (
//               <Icosahedron key={i} args={[shape.scale]} position={shape.position}>
//                 {material}
//               </Icosahedron>
//             );
//           case 'ring':
//             return (
//               <Ring key={i} args={[shape.scale * 0.5, shape.scale, 32]} position={shape.position}>
//                 {material}
//               </Ring>
//             );
//           default:
//             return null;
//         }
//       })}
//     </group>
//   );
// }

// /* =========================
//    LARGE GLOWING PARTICLES
// ========================= */
// function GlowingParticles({ count = 50 }: { count: number }) {
//   const meshRef = useRef<THREE.Points>(null);
//   const positions = useRef(new Float32Array(count * 3));
//   const colors = useRef(new Float32Array(count * 3));
//   const sizes = useRef(new Float32Array(count));

//   useEffect(() => {
//     for (let i = 0; i < count; i++) {
//       // Strategic positions around the text
//       const angle = (i / count) * Math.PI * 2;
//       const radius = 8 + Math.random() * 6;
//       const height = (Math.random() - 0.5) * 10;
      
//       positions.current[i * 3] = Math.cos(angle) * radius;
//       positions.current[i * 3 + 1] = height;
//       positions.current[i * 3 + 2] = Math.sin(angle) * radius;

//       // Bright glowing colors
//       const color = new THREE.Color();
//       const colorType = Math.random();
//       if (colorType < 0.33) {
//         color.setRGB(0.2, 0.6, 1); // Bright blue
//       } else if (colorType < 0.66) {
//         color.setRGB(0.8, 0.9, 1); // White-blue
//       } else {
//         color.setRGB(0.4, 0.8, 1); // Cyan
//       }
      
//       colors.current[i * 3] = color.r;
//       colors.current[i * 3 + 1] = color.g;
//       colors.current[i * 3 + 2] = color.b;

//       // Large glowing particles
//       sizes.current[i] = Math.random() * 0.3 + 0.1;
//     }
//   }, [count]);

//   useFrame((state) => {
//     if (meshRef.current) {
//       const time = state.clock.elapsedTime;
      
//       // Rotate around center
//       meshRef.current.rotation.y = time * 0.01;
      
//       // Update positions for orbiting motion
//       const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      
//       for (let i = 0; i < count; i++) {
//         const idx = i * 3;
//         const angle = (i / count) * Math.PI * 2 + time * 0.02;
//         const radius = 8 + Math.sin(time * 0.1 + i) * 2;
        
//         positionsArray[idx] = Math.cos(angle) * radius;
//         positionsArray[idx + 2] = Math.sin(angle) * radius;
        
//         // Bobbing motion
//         positionsArray[idx + 1] += Math.sin(time * 0.5 + i) * 0.01;
        
//         // Pulsing size
//         const sizeAttr = meshRef.current.geometry.attributes.size;
//         if (sizeAttr) {
//           const pulse = 1 + Math.sin(time * 2 + i) * 0.3;
//           sizeAttr.array[i] = sizes.current[i] * pulse;
//           sizeAttr.needsUpdate = true;
//         }
//       }
      
//       meshRef.current.geometry.attributes.position.needsUpdate = true;
//     }
//   });

//   return (
//     <points ref={meshRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           array={positions.current}
//           itemSize={3}
//           count={count}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           array={colors.current}
//           itemSize={3}
//           count={count}
//         />
//         <bufferAttribute
//           attach="attributes-size"
//           array={sizes.current}
//           itemSize={1}
//           count={count}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         vertexColors
//         size={0.4}
//         transparent
//         opacity={0.6}
//         depthWrite={false}
//         sizeAttenuation={true}
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   );
// }

// /* =========================
//    GRID
// ========================= */
// function AnimatedGrid() {
//   const gridRef = useRef<THREE.GridHelper>(null);

//   useFrame((state) => {
//     if (gridRef.current) {
//       gridRef.current.position.z =
//         Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
//     }
//   });

//   return (
//     <gridHelper
//       ref={gridRef}
//       args={[10, 20, "#1F4FA3", "#6BB6E8"]}
//       position={[0, -1.5, 0]}
//     />
//   );
// }

// /* =========================
//    CAMERA
// ========================= */
// function CameraController() {
//   const { camera } = useThree();

//   useEffect(() => {
//     camera.position.set(0, 0, 5);
//   }, [camera]);

//   return <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />;
// }

// /* =========================
//    LOADER
// ========================= */
// interface UltraPremiumLoaderProps {
//   onSkip?: () => void;
// }

// export default function UltraPremiumLoader({ onSkip }: UltraPremiumLoaderProps) {
//   const [progress, setProgress] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);
//   const [loadingMessage, setLoadingMessage] = useState(
//     "Loading Core Modules..."
//   );

//   const progressInterval = useRef<NodeJS.Timeout | null>(null);

//   const handleSkip = useCallback(() => {
//     setIsVisible(false);
//     onSkip?.();
//   }, [onSkip]);

//   useEffect(() => {
//     progressInterval.current = setInterval(() => {
//       setProgress((prev) => {
//         const next = Math.min(prev + Math.random() * 6 + 3, 100);

//         if (next < 30) setLoadingMessage("Loading Core Modules...");
//         else if (next < 60) setLoadingMessage("Initializing 3D Engine...");
//         else if (next < 90) setLoadingMessage("Preparing Visual Assets...");
//         else setLoadingMessage("Finalizing Experience...");

//         if (next >= 100) {
//           clearInterval(progressInterval.current!);
//           setTimeout(() => {
//             setIsVisible(false);
//             onSkip?.();
//           }, 4500);
//         }

//         return next;
//       });
//     }, 320);

//     return () => {
//       if (progressInterval.current) clearInterval(progressInterval.current);
//     };
//   }, [onSkip]);

//   if (!isVisible) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.6 }}
//         className="fixed inset-0 z-[9999] bg-black overflow-hidden"
//       >
//         <Canvas 
//           camera={{ position: [0, 0, 5], fov: 50 }}
//           dpr={[1, 2]}
//           style={{ background: 'radial-gradient(circle at center, #0a0a2a 0%, #000000 70%)' }}
//         >
//           {/* Deep space gradient background */}
//           <color attach="background" args={["#000000"]} />
          
//           {/* Premium lighting setup */}
//           <ambientLight intensity={0.5} color="#1F4FA3" />
//           <directionalLight 
//             position={[10, 10, 5]} 
//             intensity={1.5} 
//             color="#6BB6E8" 
//             castShadow
//           />
//           <pointLight 
//             position={[-5, -5, -5]} 
//             intensity={1} 
//             color="#4A7DB0" 
//             distance={60}
//             decay={1.5}
//           />
//           <pointLight 
//             position={[5, 5, 5]} 
//             intensity={0.8} 
//             color="#8BCFFF" 
//             distance={50}
//             decay={1.5}
//           />
          
//           {/* MASSIVE PARTICLE SYSTEMS - ULTRA DENSE */
//           /* Total: 12,000 + 8,000 + 3,000 + 50 = 23,050 particles */}
//           <StarfieldParticles count={12000} />
//           <HyperDenseParticles count={8000} />
//           <FastMovingParticles count={3000} />
//           <GlowingParticles count={50} />
          
//           {/* Premium 3D shapes floating around */}
//           <FloatingShapes />
          
//           {/* Main text */}
//           <SunriseText />
//           <AnimatedGrid />
//           <CameraController />
          
//           {/* Atmospheric effects */}
//           <fog attach="fog" args={["#000000", 20, 80]} />
//           <Environment preset="studio" background={false} />
//         </Canvas>

//         {/* Premium UI Overlay */}
//         <div className="absolute bottom-4 left-0 right-0 max-w-2xl mx-auto px-6">
//           {/* Glowing progress bar */}
//           <div className="relative h-2 bg-gray-900/30 rounded-full overflow-hidden backdrop-blur-lg border border-white/10">
//             <motion.div
//               animate={{ width: `${progress}%` }}
//               className="h-full bg-gradient-to-r from-[#1F4FA3] via-[#6BB6E8] to-[#8BCFFF] relative"
//             >
//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-[#1F4FA3] via-[#6BB6E8] to-[#8BCFFF] blur-xl opacity-60 animate-pulse" />
//             </motion.div>
//           </div>

//           {/* Premium progress info */}
//           <div className="flex justify-between mt-6 items-center">
//             <span className="text-gray-400/90 text-sm font-light tracking-widest">INITIALIZING</span>
//             <div className="flex items-center gap-4">
//               <RiLoader2Fill className="text-[#6BB6E8] animate-spin text-2xl drop-shadow-lg" />
//               <span className="text-4xl font-black bg-gradient-to-r from-[#1F4FA3] via-[#6BB6E8] to-[#8BCFFF] bg-clip-text text-transparent tracking-tighter drop-shadow-lg">
//                 {Math.round(progress)}%
//               </span>
//             </div>
//             <span className="text-gray-400/90 text-sm font-light tracking-widest">READY</span>
//           </div>

//           {/* Status message with premium typography */}
//           <div className="mt-8 text-center">
//             <motion.div
//               key={loadingMessage}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-gray-200 text-xl font-light tracking-wider drop-shadow-lg"
//             >
//               {loadingMessage}
//             </motion.div>
//           </div>

//           {/* Subtitle with glow */}
//           <div className="mt-6 text-center">
//             <div className="text-gray-400 text-sm tracking-[0.3em] uppercase font-light inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-sm">
//               SUNRISE CONSULTING
//             </div>
//           </div>
//         </div>

//         {/* Premium skip button */}
//         <button
//           onClick={handleSkip}
//           className="absolute top-8 right-8 text-gray-300 hover:text-white text-sm font-light tracking-widest hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:shadow-[0_0_30px_rgba(107,182,232,0.3)] group"
//         >
//           <span className="group-hover:translate-x-1 transition-transform">SKIP INTRO →</span>
//         </button>

//         {/* Company branding */}
//         <div className="absolute top-8 left-8">
//           <div className="text-gray-300 text-lg tracking-[0.4em] uppercase font-bold">SUNRISE</div>
//           <div className="text-gray-500 text-xs tracking-[0.2em] uppercase mt-1">CONSULTING GROUP</div>
//         </div>

//         {/* Particle count indicator (for debug - optional) */}
//         <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-gray-600 text-xs tracking-widest">
//           <div className="backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
//             {Math.round(progress)}% • 23K+ PARTICLES
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }






















"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  MeshWobbleMaterial,
  Float,
  Center,
  Environment,
  OrbitControls,
  Text,
  Sphere,
  Box,
  Torus,
  Cone,
  Tetrahedron,
  Octahedron,
  Dodecahedron,
  Icosahedron,
  Ring,
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { RiLoader2Fill } from "react-icons/ri";

/* =========================
   3D SUNRISE TEXT
========================= */
function SunriseText() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center>
        <Text
          ref={meshRef}
          fontSize={1.2}
          letterSpacing={0.1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          SUNRISE
          <MeshWobbleMaterial
            color={hovered ? "#6BB6E8" : "#1F4FA3"}
            emissive="#6BB6E8"
            emissiveIntensity={0.35}
            metalness={0.9}
            roughness={0.1}
            factor={hovered ? 0.3 : 0.1}
            speed={hovered ? 2 : 1}
          />
        </Text>
      </Center>
    </Float>
  );
}

/* =========================
   MASSIVE STARFIELD PARTICLES - ULTRA DENSE
========================= */
function StarfieldParticles({ count = 12000 }: { count: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const positions = useRef(new Float32Array(count * 3));
  const colors = useRef(new Float32Array(count * 3));
  const sizes = useRef(new Float32Array(count));
  const velocities = useRef(new Array(count).fill(null).map(() => ({
    x: (Math.random() - 0.5) * 0.05,
    y: (Math.random() - 0.5) * 0.05,
    z: (Math.random() - 0.5) * 0.05
  })));

  useEffect(() => {
    // Initialize ultra-dense starfield
    for (let i = 0; i < count; i++) {
      // Random positions in multiple layers
      const layer = Math.floor(Math.random() * 3);
      let radius;
      
      if (layer === 0) {
        radius = 15 + Math.random() * 20; // Close layer
      } else if (layer === 1) {
        radius = 40 + Math.random() * 30; // Middle layer
      } else {
        radius = 80 + Math.random() * 50; // Far layer
      }
      
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions.current[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions.current[i * 3 + 2] = radius * Math.cos(phi);

      // Premium color palette
      const color = new THREE.Color();
      const colorType = Math.random();
      if (colorType < 0.5) {
        // Crystal blue-white stars
        color.setRGB(0.9, 0.95, 1);
      } else if (colorType < 0.75) {
        // Warm golden stars
        color.setRGB(1, 0.98, 0.9);
      } else if (colorType < 0.9) {
        // Icy cyan stars
        color.setRGB(0.8, 0.95, 1);
      } else {
        // Rare violet stars
        color.setRGB(0.95, 0.85, 1);
      }
      
      colors.current[i * 3] = color.r;
      colors.current[i * 3 + 1] = color.g;
      colors.current[i * 3 + 2] = color.b;

      // Size distribution - mostly micro particles
      const sizeRand = Math.random();
      if (sizeRand < 0.85) {
        // Ultra small particles (90% of total)
        sizes.current[i] = Math.random() * 0.008 + 0.003;
      } else if (sizeRand < 0.97) {
        // Medium particles
        sizes.current[i] = Math.random() * 0.02 + 0.01;
      } else {
        // Large particles
        sizes.current[i] = Math.random() * 0.04 + 0.02;
      }
    }
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Multi-layered rotation
      meshRef.current.rotation.y = time * 0.003;
      meshRef.current.rotation.x = Math.sin(time * 0.05) * 0.005;
      
      // Update particle positions
      const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        
        // Enhanced movement patterns based on size
        const speed = sizes.current[i] * 5;
        positionsArray[idx] += velocities.current[i].x * speed;
        positionsArray[idx + 1] += velocities.current[i].y * speed;
        positionsArray[idx + 2] += velocities.current[i].z * speed;
        
        // Add swirling motion
        const swirl = 0.0008;
        positionsArray[idx] += Math.sin(time * 0.3 + i * 0.01) * swirl;
        positionsArray[idx + 1] += Math.cos(time * 0.4 + i * 0.01) * swirl;
        positionsArray[idx + 2] += Math.sin(time * 0.5 + i * 0.01) * swirl;
        
        // Smart boundary with teleport effect
        const maxDistance = 100;
        for (let j = 0; j < 3; j++) {
          if (Math.abs(positionsArray[idx + j]) > maxDistance) {
            positionsArray[idx + j] = (Math.random() - 0.5) * maxDistance * 0.5;
          }
        }
        
        // Dynamic pulsing with varied intensity
        const pulseIntensity = Math.random() * 0.3 + 0.1;
        const pulseSpeed = Math.random() * 4 + 2;
        const scale = 1 + Math.sin(time * pulseSpeed + i * 0.1) * pulseIntensity;
        
        const sizeAttr = meshRef.current.geometry.attributes.size;
        if (sizeAttr) {
          sizeAttr.array[i] = sizes.current[i] * scale;
          sizeAttr.needsUpdate = true;
        }
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors.current, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes.current, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.025}
        transparent
        opacity={0.95}
        depthWrite={false}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* =========================
   HYPER DENSE BACKGROUND PARTICLES
========================= */
function HyperDenseParticles({ count = 8000 }: { count: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const positions = useRef(new Float32Array(count * 3));
  const colors = useRef(new Float32Array(count * 3));
  const sizes = useRef(new Float32Array(count));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      // Create ultra-dense background
      const radius = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions.current[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions.current[i * 3 + 2] = radius * Math.cos(phi);

      // Soft, distant colors
      const color = new THREE.Color();
      const colorType = Math.random();
      if (colorType < 0.4) {
        color.setRGB(0.3, 0.5, 0.8); // Deep space blue
      } else if (colorType < 0.7) {
        color.setRGB(0.4, 0.4, 0.7); // Cosmic purple
      } else if (colorType < 0.9) {
        color.setRGB(0.2, 0.6, 0.7); // Nebula cyan
      } else {
        color.setRGB(0.6, 0.4, 0.8); // Galactic violet
      }
      
      colors.current[i * 3] = color.r;
      colors.current[i * 3 + 1] = color.g;
      colors.current[i * 3 + 2] = color.b;

      // Very small background particles
      sizes.current[i] = Math.random() * 0.006 + 0.002;
    }
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Gentle cosmic drift
      meshRef.current.rotation.x = time * 0.0008;
      meshRef.current.rotation.y = time * 0.0004;
      
      // Subtle expansion/contraction
      const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      const breath = Math.sin(time * 0.1) * 0.0002;
      
      for (let i = 0; i < count; i += 1) {
        const idx = i * 3;
        positionsArray[idx] *= (1 + breath);
        positionsArray[idx + 1] *= (1 + breath);
        positionsArray[idx + 2] *= (1 + breath);
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors.current, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes.current, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.01}
        transparent
        opacity={0.4}
        depthWrite={false}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* =========================
   SMALL FAST MOVING PARTICLES
========================= */
function FastMovingParticles({ count = 3000 }: { count: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const positions = useRef(new Float32Array(count * 3));
  const colors = useRef(new Float32Array(count * 3));
  const sizes = useRef(new Float32Array(count));
  const velocities = useRef(new Array(count).fill(null).map(() => ({
    x: (Math.random() - 0.5) * 0.08,
    y: (Math.random() - 0.5) * 0.08,
    z: (Math.random() - 0.5) * 0.08
  })));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      // Closer, faster moving particles
      const radius = 5 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions.current[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions.current[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions.current[i * 3 + 2] = radius * Math.cos(phi);

      // Bright, fast-moving colors
      const color = new THREE.Color();
      const colorType = Math.random();
      if (colorType < 0.4) {
        color.setRGB(0.6, 0.8, 1); // Bright blue
      } else if (colorType < 0.7) {
        color.setRGB(0.9, 0.95, 1); // White-blue
      } else {
        color.setRGB(0.7, 0.9, 1); // Cyan
      }
      
      colors.current[i * 3] = color.r;
      colors.current[i * 3 + 1] = color.g;
      colors.current[i * 3 + 2] = color.b;

      // Small but visible
      sizes.current[i] = Math.random() * 0.012 + 0.005;
    }
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Fast rotation
      meshRef.current.rotation.y = time * 0.01;
      
      const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        
        // Fast movement
        positionsArray[idx] += velocities.current[i].x * 0.1;
        positionsArray[idx + 1] += velocities.current[i].y * 0.1;
        positionsArray[idx + 2] += velocities.current[i].z * 0.1;
        
        // Add chaotic motion
        const chaos = 0.002;
        positionsArray[idx] += Math.sin(time * 5 + i) * chaos;
        positionsArray[idx + 1] += Math.cos(time * 4 + i) * chaos;
        positionsArray[idx + 2] += Math.sin(time * 6 + i) * chaos;
        
        // Boundary with bounce
        const maxDistance = 30;
        for (let j = 0; j < 3; j++) {
          if (Math.abs(positionsArray[idx + j]) > maxDistance) {
            velocities.current[i][j === 0 ? 'x' : j === 1 ? 'y' : 'z'] *= -1;
            positionsArray[idx + j] = Math.sign(positionsArray[idx + j]) * maxDistance * 0.95;
          }
        }
        
        // Twinkling effect
        const twinkle = 1 + Math.sin(time * 8 + i * 0.2) * 0.3;
        const sizeAttr = meshRef.current.geometry.attributes.size;
        if (sizeAttr) {
          sizeAttr.array[i] = sizes.current[i] * twinkle;
          sizeAttr.needsUpdate = true;
        }
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors.current, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes.current, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.02}
        transparent
        opacity={0.8}
        depthWrite={false}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* =========================
   3D SHAPES - PREMIUM GEOMETRIC ELEMENTS
========================= */
function FloatingShapes() {
  const shapesRef = useRef<THREE.Group>(null);
  const shapes = useRef<Array<{ 
    type: string, 
    position: [number, number, number],
    rotationSpeed: [number, number, number],
    scale: number,
    color: string
  }>>([]);

  // Initialize 15 premium 3D shapes
  useEffect(() => {
    const shapeTypes = ['sphere', 'box', 'torus', 'cone', 'tetrahedron', 'octahedron', 'dodecahedron', 'icosahedron', 'ring'];
    const colors = ['#6BB6E8', '#1F4FA3', '#4A7DB0', '#8BCFFF', '#2C5AA0', '#3D6CB9'];
    
    for (let i = 0; i < 15; i++) {
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20 - 10
      ];
      const rotationSpeed: [number, number, number] = [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ];
      const scale = Math.random() * 0.3 + 0.1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      shapes.current.push({ type, position, rotationSpeed, scale, color });
    }
  }, []);

  useFrame((state) => {
    if (shapesRef.current) {
      shapesRef.current.children.forEach((shape, i) => {
        const data = shapes.current[i];
        if (data && shape) {
          shape.rotation.x += data.rotationSpeed[0];
          shape.rotation.y += data.rotationSpeed[1];
          shape.rotation.z += data.rotationSpeed[2];
          
          // Floating animation
          shape.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001;
          shape.position.x += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.001;
        }
      });
    }
  });

  return (
    <group ref={shapesRef}>
      {shapes.current.map((shape, i) => {
        const material = (
          <meshPhysicalMaterial
            color={shape.color}
            emissive={shape.color}
            emissiveIntensity={0.1}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
            transmission={0.2}
            thickness={1}
          />
        );

        switch (shape.type) {
          case 'sphere':
            return (
              <Sphere key={i} args={[shape.scale]} position={shape.position}>
                {material}
              </Sphere>
            );
          case 'box':
            return (
              <Box key={i} args={[shape.scale, shape.scale, shape.scale]} position={shape.position}>
                {material}
              </Box>
            );
          case 'torus':
            return (
              <Torus key={i} args={[shape.scale, shape.scale * 0.3]} position={shape.position}>
                {material}
              </Torus>
            );
          case 'cone':
            return (
              <Cone key={i} args={[shape.scale, shape.scale * 1.5]} position={shape.position}>
                {material}
              </Cone>
            );
          case 'tetrahedron':
            return (
              <Tetrahedron key={i} args={[shape.scale]} position={shape.position}>
                {material}
              </Tetrahedron>
            );
          case 'octahedron':
            return (
              <Octahedron key={i} args={[shape.scale]} position={shape.position}>
                {material}
              </Octahedron>
            );
          case 'dodecahedron':
            return (
              <Dodecahedron key={i} args={[shape.scale]} position={shape.position}>
                {material}
              </Dodecahedron>
            );
          case 'icosahedron':
            return (
              <Icosahedron key={i} args={[shape.scale]} position={shape.position}>
                {material}
              </Icosahedron>
            );
          case 'ring':
            return (
              <Ring key={i} args={[shape.scale * 0.5, shape.scale, 32]} position={shape.position}>
                {material}
              </Ring>
            );
          default:
            return null;
        }
      })}
    </group>
  );
}

/* =========================
   LARGE GLOWING PARTICLES
========================= */
function GlowingParticles({ count = 50 }: { count: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const positions = useRef(new Float32Array(count * 3));
  const colors = useRef(new Float32Array(count * 3));
  const sizes = useRef(new Float32Array(count));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      // Strategic positions around the text
      const angle = (i / count) * Math.PI * 2;
      const radius = 8 + Math.random() * 6;
      const height = (Math.random() - 0.5) * 10;
      
      positions.current[i * 3] = Math.cos(angle) * radius;
      positions.current[i * 3 + 1] = height;
      positions.current[i * 3 + 2] = Math.sin(angle) * radius;

      // Bright glowing colors
      const color = new THREE.Color();
      const colorType = Math.random();
      if (colorType < 0.33) {
        color.setRGB(0.2, 0.6, 1); // Bright blue
      } else if (colorType < 0.66) {
        color.setRGB(0.8, 0.9, 1); // White-blue
      } else {
        color.setRGB(0.4, 0.8, 1); // Cyan
      }
      
      colors.current[i * 3] = color.r;
      colors.current[i * 3 + 1] = color.g;
      colors.current[i * 3 + 2] = color.b;

      // Large glowing particles
      sizes.current[i] = Math.random() * 0.3 + 0.1;
    }
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Rotate around center
      meshRef.current.rotation.y = time * 0.01;
      
      // Update positions for orbiting motion
      const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        const angle = (i / count) * Math.PI * 2 + time * 0.02;
        const radius = 8 + Math.sin(time * 0.1 + i) * 2;
        
        positionsArray[idx] = Math.cos(angle) * radius;
        positionsArray[idx + 2] = Math.sin(angle) * radius;
        
        // Bobbing motion
        positionsArray[idx + 1] += Math.sin(time * 0.5 + i) * 0.01;
        
        // Pulsing size
        const sizeAttr = meshRef.current.geometry.attributes.size;
        if (sizeAttr) {
          const pulse = 1 + Math.sin(time * 2 + i) * 0.3;
          sizeAttr.array[i] = sizes.current[i] * pulse;
          sizeAttr.needsUpdate = true;
        }
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors.current, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes.current, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.4}
        transparent
        opacity={0.6}
        depthWrite={false}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* =========================
   GRID
========================= */
function AnimatedGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[10, 20, "#1F4FA3", "#6BB6E8"]}
      position={[0, -1.5, 0]}
    />
  );
}

/* =========================
   CAMERA
========================= */
function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 5);
  }, [camera]);

  return <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />;
}

/* =========================
   LOADER
========================= */
interface UltraPremiumLoaderProps {
  onSkip?: () => void;
}

export default function UltraPremiumLoader({ onSkip }: UltraPremiumLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState(
    "Loading Core Modules..."
  );

  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const handleSkip = useCallback(() => {
    setIsVisible(false);
    onSkip?.();
  }, [onSkip]);

  useEffect(() => {
    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 6 + 3, 100);

        if (next < 30) setLoadingMessage("Loading Core Modules...");
        else if (next < 60) setLoadingMessage("Initializing 3D Engine...");
        else if (next < 90) setLoadingMessage("Preparing Visual Assets...");
        else setLoadingMessage("Finalizing Experience...");

        if (next >= 100) {
          clearInterval(progressInterval.current!);
          setTimeout(() => {
            setIsVisible(false);
            onSkip?.();
          }, 4500);
        }

        return next;
      });
    }, 320);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [onSkip]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[9999] bg-black overflow-hidden"
      >
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 2]}
          style={{ background: 'radial-gradient(circle at center, #0a0a2a 0%, #000000 70%)' }}
        >
          {/* Deep space gradient background */}
          <color attach="background" args={["#000000"]} />
          
          {/* Premium lighting setup */}
          <ambientLight intensity={0.5} color="#1F4FA3" />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.5} 
            color="#6BB6E8" 
            castShadow
          />
          <pointLight 
            position={[-5, -5, -5]} 
            intensity={1} 
            color="#4A7DB0" 
            distance={60}
            decay={1.5}
          />
          <pointLight 
            position={[5, 5, 5]} 
            intensity={0.8} 
            color="#8BCFFF" 
            distance={50}
            decay={1.5}
          />
          
          {/* MASSIVE PARTICLE SYSTEMS - ULTRA DENSE */
          /* Total: 12,000 + 8,000 + 3,000 + 50 = 23,050 particles */}
          <StarfieldParticles count={12000} />
          <HyperDenseParticles count={8000} />
          <FastMovingParticles count={3000} />
          <GlowingParticles count={50} />
          
          {/* Premium 3D shapes floating around */}
          <FloatingShapes />
          
          {/* Main text */}
          <SunriseText />
          <AnimatedGrid />
          <CameraController />
          
          {/* Atmospheric effects */}
          <fog attach="fog" args={["#000000", 20, 80]} />
          <Environment preset="studio" background={false} />
        </Canvas>

        {/* Premium UI Overlay */}
        <div className="absolute bottom-4 left-0 right-0 max-w-2xl mx-auto px-6">
          {/* Glowing progress bar */}
          <div className="relative h-2 bg-gray-900/30 rounded-full overflow-hidden backdrop-blur-lg border border-white/10">
            <motion.div
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-[#1F4FA3] via-[#6BB6E8] to-[#8BCFFF] relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F4FA3] via-[#6BB6E8] to-[#8BCFFF] blur-xl opacity-60 animate-pulse" />
            </motion.div>
          </div>

          {/* Premium progress info */}
          <div className="flex justify-between mt-6 items-center">
            <span className="text-gray-400/90 text-sm font-light tracking-widest">INITIALIZING</span>
            <div className="flex items-center gap-4">
              <RiLoader2Fill className="text-[#6BB6E8] animate-spin text-2xl drop-shadow-lg" />
              <span className="text-4xl font-black bg-gradient-to-r from-[#1F4FA3] via-[#6BB6E8] to-[#8BCFFF] bg-clip-text text-transparent tracking-tighter drop-shadow-lg">
                {Math.round(progress)}%
              </span>
            </div>
            <span className="text-gray-400/90 text-sm font-light tracking-widest">READY</span>
          </div>

          {/* Status message with premium typography */}
          <div className="mt-8 text-center">
            <motion.div
              key={loadingMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-200 text-xl font-light tracking-wider drop-shadow-lg"
            >
              {loadingMessage}
            </motion.div>
          </div>

          {/* Subtitle with glow */}
          <div className="mt-6 text-center">
            <div className="text-gray-400 text-sm tracking-[0.3em] uppercase font-light inline-block px-6 py-2 border border-white/20 rounded-full backdrop-blur-sm">
              SUNRISE CONSULTING
            </div>
          </div>
        </div>

        {/* Premium skip button */}
        <button
          onClick={handleSkip}
          className="absolute top-8 right-8 text-gray-300 hover:text-white text-sm font-light tracking-widest hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:shadow-[0_0_30px_rgba(107,182,232,0.3)] group"
        >
          <span className="group-hover:translate-x-1 transition-transform">SKIP INTRO →</span>
        </button>

        {/* Company branding */}
        <div className="absolute top-8 left-8">
          <div className="text-gray-300 text-lg tracking-[0.4em] uppercase font-bold">SUNRISE</div>
          <div className="text-gray-500 text-xs tracking-[0.2em] uppercase mt-1">CONSULTING</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}