"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Package2,
  ShieldCheck,
  Globe,
  BarChart,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const CashewExportServicesPage = () => {
  const { scrollYProgress } = useScroll();
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  const services = [
    {
      icon: Truck,
      title: "Export Logistics",
      description:
        "We handle all logistics, customs clearance, and documentation for seamless export processes.",
    },
    {
      icon: Package2,
      title: "Custom Packaging & Labeling",
      description:
        "Tailored packaging solutions to fit market needs, ensuring compliance with international standards.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description:
        "Strict quality control ensures that our cashews meet international standards of freshness and quality.",
    },
  ];

  const valueAddedServices = [
    {
      icon: Globe,
      title: "Market Analysis",
      description:
        "Global market insights for informed decisions on export destinations and pricing strategies.",
    },
    {
      icon: BarChart,
      title: "Supply Chain Optimization",
      description:
        "Expert support to streamline your supply chain, reducing costs and improving efficiency.",
    },
    {
      icon: Users,
      title: "Customer Support",
      description:
        "Dedicated customer support to ensure clear communication and problem resolution.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-stone-950 to-stone-900 text-white min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ opacity: 1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
          <img
            src="/api/placeholder/2000/1000"
            alt="Cashew Export Services"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 text-center max-w-5xl px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
          >
            <Sparkles className="w-16 h-16 text-amber-400 mx-auto" />{" "}
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
            CASHEW EXPORT SERVICES
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 font-light">
            Delivering quality Ghanaian cashews worldwide with reliable,
            efficient services.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xl px-12 py-8 rounded-full shadow-lg shadow-amber-500/25"
            >
              Explore Our Services
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Export Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white text-black rounded-lg p-6 shadow-lg"
              >
                <service.icon className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Services */}
      <section className="py-20 bg-gradient-to-b from-stone-800 to-stone-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Value-Added Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueAddedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-amber-100 text-black rounded-lg p-6 shadow-lg"
              >
                <service.icon className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-amber-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Export with Us?</h2>
        <p className="text-xl mb-8">
          Get in touch today to discuss your cashew export needs.
        </p>
        <Button
          size="lg"
          className="bg-white text-amber-600 hover:bg-amber-100 px-8 py-6 rounded-full"
        >
          Contact Our Team
        </Button>
      </section>
    </div>
  );
};

export default CashewExportServicesPage;
