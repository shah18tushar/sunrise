"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import Image from "next/image";

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  // Three.js Ambient Background
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 900,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, 900);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 20;

    // Floating orbs
    const orbsGroup = new THREE.Group();
    const orbs: THREE.Mesh[] = [];

    for (let i = 0; i < 40; i++) {
      const geometry = new THREE.SphereGeometry(
        0.1 + Math.random() * 0.2,
        16,
        16
      );
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.5 + Math.random() * 0.2, 0.7, 0.6),
        transparent: true,
        opacity: 0.3,
      });
      const orb = new THREE.Mesh(geometry, material);
      orb.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      );
      orbs.push(orb);
      orbsGroup.add(orb);
    }
    scene.add(orbsGroup);

    // Particle field
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 60;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: new THREE.Color("#06b6d4"),
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Rotating rings
    const ringGeometry = new THREE.TorusGeometry(8, 0.08, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.2,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 4;
    scene.add(ring);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      orbsGroup.rotation.y += 0.001;
      orbs.forEach((orb, i) => {
        orb.position.y += Math.sin(Date.now() * 0.001 + i) * 0.003;
      });

      ring.rotation.z += 0.002;
      particlesMesh.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / 900;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  const features = [
    { icon: "⚡", label: "AI-Powered Infrastructure" },
    { icon: "🔒", label: "Military-Grade Security" },
    { icon: "🌱", label: "100% Green Energy" },
    { icon: "🚀", label: "99.99% Uptime SLA" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white overflow-hidden py-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT SECTION - Content */}
          <motion.div
            style={{ y: contentY }}
            className="space-y-6 lg:col-span-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">
                About Sunrise
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-3xl font-light leading-tight">
                <span className="text-slate-900">Building the</span>{" "}
                <span className="bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Intelligent Infrastructure
                </span>{" "}
                <span className="text-slate-900">of Tomorrow</span>
              </h1>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-0.5 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              At <span className="font-bold text-cyan-600">Sunrise</span>, we
              are revolutionizing the data center industry with cutting-edge AI
              technology. Our next-generation infrastructure delivers unmatched
              performance, security, and sustainability for enterprises
              worldwide. With over{" "}
              <span className="font-semibold text-blue-600">
                500+ data centers
              </span>{" "}
              across{" "}
              <span className="font-semibold text-purple-600">
                150+ countries
              </span>
              , we power the digital transformation of tomorrow's most
              innovative companies.Our next-generation infrastructure delivers
              unmatched performance, security, and sustainability for
              enterprises worldwide.Our next-generation infrastructure delivers
              unmatched performance, security, and sustainability for
              enterprises worldwide.Our next-generation infrastructure delivers
              unmatched performance, security, and sustainability for
              enterprises worldwide.
            </motion.p>

            {/* Features Grid */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-cyan-300 transition-all duration-300"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <span className="text-sm font-semibold text-gray-700">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </motion.div> */}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(6, 182, 212, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-2xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-bold shadow-2xl shadow-cyan-500/30 overflow-hidden transition-all"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Discover Our Solutions
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>

                {/* Animated gradient overlay */}
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION - Image */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group lg:col-span-5"
          >
            {/* Main image container */}
            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-linear-to-br from-slate-100 to-slate-200">
              {/* Image wrapper with aspect ratio */}
              <div className="relative aspect-[4/5] md:aspect-square">
                <Image
                  src="/img.jpg"
                  alt="Sunrise Data Center Infrastructure"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                {/* Shine effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </div>

              {/* Floating badge on image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">
                      Trusted Worldwide
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      500+ Data Centers
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🌐</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
