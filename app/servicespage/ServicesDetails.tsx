"use client";

import React from "react";

const services = [
  {
    title: "AI Infrastructure Architecture",
    description:
      "We design next-generation AI-ready data center architectures optimized for high-performance computing, GPU clusters, and real-time analytics. Our solutions ensure maximum uptime, intelligent load balancing, and future-proof scalability.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Cloud & Hybrid Data Center Solutions",
    description:
      "Seamlessly integrate on-premise infrastructure with private and public cloud environments. We enable secure hybrid ecosystems that deliver agility, elasticity, and enterprise-grade compliance.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "AI-Driven Monitoring & Automation",
    description:
      "Leverage intelligent automation to predict failures, optimize energy consumption, and proactively manage workloads. Our AI-powered monitoring systems deliver real-time insights and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Cybersecurity & Data Protection",
    description:
      "Protect mission-critical infrastructure with enterprise-grade security frameworks, zero-trust architecture, and AI-based threat detection. We ensure compliance, resilience, and continuous protection.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=80",
  },
];

const ServicesDetails = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-blue-600 font-semibold tracking-wide uppercase">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold mt-4 leading-tight">
            Enterprise-Grade{" "}
            <span className="text-blue-600">AI Data Center Services</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We deliver intelligent, secure, and scalable infrastructure
            solutions designed to power AI-driven enterprises, cloud-native
            platforms, and mission-critical digital operations worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-8 items-center"
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-[300px] overflow-hidden rounded-xl shadow-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-6 px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesDetails;
