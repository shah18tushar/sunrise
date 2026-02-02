"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import * as THREE from "three";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // Advanced Three.js Scene
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 600,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, 600);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 30;

    // Create DNA Helix-like structure
    const helixGroup = new THREE.Group();
    const helixPoints = 200;
    const radius = 8;

    for (let i = 0; i < helixPoints; i++) {
      const angle = (i / helixPoints) * Math.PI * 8;
      const y = (i / helixPoints) * 40 - 20;

      // First helix strand
      const geometry1 = new THREE.SphereGeometry(0.15, 16, 16);
      const material1 = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.5 + i / helixPoints * 0.3, 0.8, 0.6),
        transparent: true,
        opacity: 0.8,
      });
      const sphere1 = new THREE.Mesh(geometry1, material1);
      sphere1.position.set(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
      helixGroup.add(sphere1);

      // Second helix strand (opposite)
      const sphere2 = new THREE.Mesh(geometry1.clone(), material1.clone());
      sphere2.position.set(
        Math.cos(angle + Math.PI) * radius,
        y,
        Math.sin(angle + Math.PI) * radius
      );
      helixGroup.add(sphere2);

      // Connecting lines
      if (i % 5 === 0) {
        const points = [];
        points.push(sphere1.position);
        points.push(sphere2.position);
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x06b6d4,
          transparent: true,
          opacity: 0.3,
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        helixGroup.add(line);
      }
    }

    scene.add(helixGroup);

    // Add floating orbs
    const orbsGroup = new THREE.Group();
    for (let i = 0; i < 50; i++) {
      const orbGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
        transparent: true,
        opacity: 0.6,
      });
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orb.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30
      );
      orbsGroup.add(orb);
    }
    scene.add(orbsGroup);

    // Create particle field
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: new THREE.Color("#06b6d4"),
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      helixGroup.rotation.y += 0.002;
      helixGroup.rotation.x = Math.sin(Date.now() * 0.0005) * 0.2;
      
      orbsGroup.rotation.y -= 0.001;
      orbsGroup.rotation.x += 0.0005;

      particlesMesh.rotation.y += 0.0003;

      // Animate particles
      const positions = particlesGeometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.02;
        if (positions[i + 1] < -50) {
          positions[i + 1] = 50;
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / 600;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  const navigationLinks = [
    {
      title: "Quick Links",
      links: ["Home", "About Us", "Our Services", "Contact Us"],
    },
    {
      title: "Services",
      links: ["Managed Services", "24/7 Support", "Consulting", "Training", "Integration"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Case Studies", "Blog", "Whitepapers"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Kit", "Partners", "Contact"],
    },
  ];

   const socialItems = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaLinkedinIn, link: "#" },
    { Icon: FaYoutube, link: "#" },
  ];

  const certifications = [
    { name: "ISO 27001", icon: "🔒" },
    { name: "SOC 2", icon: "✓" },
    { name: "GDPR", icon: "🛡️" },
    { name: "HIPAA", icon: "🏥" },
  ];

  const contactSection = {
    title: "Contact Info",
    links: [
      "Email: support@sunrise.com",
      "Phone: +91 98765 43210",
      "Address: Bangalore, India",
      "Support: 24/7 Live Chat",
      "Sales: sales@sunrise.com",
    ],
  };

  // Map for Quick Links to Next.js routes (only the 4 specified links)
  const quickLinkMap: Record<string, string> = {
    "Home": "/",
    "About Us": "/aboutuspage",
    "Our Services": "/servicespage",
    "Contact Us": "/contactuspage",
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black"
    >
      {/* Three.js Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Multiple Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      {/* Animated Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-10"
      >
        {/* Top Section - Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left - Brand & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo & Name */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-3xl font-light bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Sunrise
                  </h3>
                  <p className="text-sm text-cyan-300 font-light tracking-wider">
                    AI DATA CENTERS
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Pioneering the future of intelligent infrastructure with cutting-edge AI-powered data centers that redefine performance, efficiency, and sustainability.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <p className="text-sm text-gray-500 font-semibold tracking-wider uppercase">
                Certified & Compliant
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all shadow-lg hover:shadow-cyan-500/30"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{cert.icon}</span>
                      <span className="text-sm font-bold text-white">
                        {cert.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Premium Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-950/50 backdrop-blur-xl border border-cyan-500/30 shadow-2xl overflow-hidden">
              {/* Animated Background */}
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0"
              />

              <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-xs font-bold text-cyan-300 tracking-wider uppercase">
                      Stay Connected
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white">
                    Join the Future of AI Infrastructure
                  </h4>
                  <p className="text-gray-400">
                    Get exclusive insights, updates, and early access to our latest innovations.
                  </p>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-950/80 border-2 border-cyan-500/30 focus:border-cyan-400 text-white placeholder-gray-500 outline-none transition-all backdrop-blur-xl group-hover:border-cyan-500/50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 pb-10 border-b border-cyan-500/20">
          {navigationLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h5 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {section.title}
              </h5>
              <ul className="space-y-3">
                {section.title === "Quick Links"
                  ? section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link href={quickLinkMap[link] || "#"} legacyBehavior>
                          <motion.a
                            whileHover={{ x: 5 }}
                            className="text-gray-400 hover:text-cyan-400 transition-all text-sm flex items-center gap-2 group"
                          >
                            <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-3 transition-all" />
                            {link}
                          </motion.a>
                        </Link>
                      </li>
                    ))
                  : section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <motion.a
                          href="#"
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-cyan-400 transition-all text-sm flex items-center gap-2 group"
                        >
                          <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-3 transition-all" />
                          {link}
                        </motion.a>
                      </li>
                    ))}
              </ul>
            </motion.div>
          ))}
           {/* New Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4"
          >
            <h5 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {contactSection.title}
            </h5>
            <ul className="space-y-3">
              {contactSection.links.map((item, idx) => (
                <li key={idx} className="text-gray-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section - Social & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <p className="text-sm text-gray-500 font-semibold">Follow Us:</p>
            <div className="flex gap-3">
              {/* {socialMedia.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => setHoveredSocial(social.name)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center text-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                  <span className="relative z-10">{social.icon}</span>
                  
                </motion.a>
              ))} */}
               {socialItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="p-2 rounded-full bg-gradient-to-br from-[#001830]/70 to-[#000c18]/70 border border-[#39ACE2]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(57,172,226,0.4)] hover:shadow-[0_0_50px_rgba(57,172,226,1)] hover:scale-110 transition-all duration-500 flex items-center justify-center"
                      >
                        <item.Icon className="text-[#39ACE2] text-xl drop-shadow-[0_0_10px_rgba(57,172,226,1)] hover:text-white transition duration-300" />
                      </a>
                    ))}
            </div>
          </motion.div>

          {/* Copyright & Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-500"
          >
            <p>© 2025 Sunrise AI Data Centers. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ color: "#06b6d4" }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

      </motion.div>

      

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70" />
    </footer>
  );
};

export default Footer;