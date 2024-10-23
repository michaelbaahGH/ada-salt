"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Waves,
  Heart,
  Users,
  Building,
  Sparkles,
  Mountain,
  ArrowRight,
  Factory,
  Scale,
} from "lucide-react";

// Particle effect component
const Particles = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particles = Array.from({ length: 50 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const certifications = [
  {
    name: "ISO 9001:2015",
    image: "/api/placeholder/100/100",
    description: "Quality Management System Certified",
    year: "Since 2020",
  },
  {
    name: "Environmental Management",
    image: "/api/placeholder/100/100",
    description: "Committed to sustainable salt production",
    year: "Since 2019",
  },
  {
    name: "Local Business Excellence",
    image: "/api/placeholder/100/100",
    description: "Ada Region Business Leadership Award",
    year: "Since 2021",
  },
];

function Hero() {
  const { scrollYProgress } = useScroll();
  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroOpacity = useTransform(springScrollProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(springScrollProgress, [0, 0.3], [1, 1.1]);
  const textY = useTransform(springScrollProgress, [0, 0.3], [0, -50]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Particles />
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Ada Salt Production"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-center max-w-5xl px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.5,
          }}
          className="mb-6"
        >
          <Waves className="w-20 h-20 text-blue-400 mx-auto animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
        >
          About ADA YFFD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-4xl text-blue-100 font-light tracking-wide mb-12"
        >
          Empowering Ada Through Sustainable Salt Production
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center gap-4 text-blue-100/60"
        >
          <Mountain className="w-8 h-8" />
          <ArrowRight className="w-8 h-8" />
          <Factory className="w-8 h-8" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}

function Story() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <Card className="bg-slate-900/50 backdrop-blur-lg border-blue-500/20 overflow-hidden">
          <CardContent className="p-12">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            >
              Our Story
            </motion.h2>

            <div className="space-y-8 text-blue-100/80 relative">
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0}
                className="text-lg md:text-xl leading-relaxed"
              >
                ADA YFFD MIDDLE BELT COMPANY LTD is a leading salt production
                company based in Ada, Greater Accra Region, Ghana. Our story
                begins with a vision to transform the rich salt resources of Ada
                into sustainable economic opportunities for our community.
              </motion.p>
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={1}
                className="text-lg md:text-xl leading-relaxed"
              >
                Our mission is to empower the people of Ada by creating
                sustainable economic opportunities through high-quality salt
                production and other essential goods and services. We believe in
                making a positive impact on the local economy while ensuring
                environmental sustainability.
              </motion.p>
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={2}
                className="text-lg md:text-xl leading-relaxed"
              >
                Today, we're proud to be at the forefront of salt production in
                Ghana, combining traditional knowledge with modern technology to
                produce high-quality salt while maintaining our commitment to
                community development and environmental stewardship.
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

const values = [
  {
    icon: <Scale className="w-12 h-12" />,
    title: "Quality",
    description: "Committed to producing the highest quality salt products",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Community",
    description:
      "Empowering the Ada community through sustainable opportunities",
  },
  {
    icon: <Building className="w-12 h-12" />,
    title: "Sustainability",
    description: "Ensuring environmentally responsible salt production",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "People First",
    description: "Prioritizing our workforce and community well-being",
  },
];

function Values() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-xl text-blue-100/60 mt-4 max-w-2xl mx-auto">
            The principles that guide our every decision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-lg border-blue-500/20 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-400 mb-6 inline-block"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-100 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-blue-100/60">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Hero />
      <Story />
      <Values />
    </main>
  );
}
