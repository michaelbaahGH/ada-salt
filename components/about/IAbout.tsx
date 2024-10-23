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
  CheckCircle2,
  Briefcase,
  Gift,
} from "lucide-react";

// Keeping the existing Particles component
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
          className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
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

const values = [
  {
    icon: <Scale className="w-12 h-12" />,
    title: "Sustainability",
    description:
      "Committed to environmentally responsible salt production practices",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Community Focus",
    description: "Dedicated to empowering and developing the Ada community",
  },
  {
    icon: <CheckCircle2 className="w-12 h-12" />,
    title: "Integrity",
    description:
      "Maintaining the highest standards of business ethics and transparency",
  },
  {
    icon: <Gift className="w-12 h-12" />,
    title: "Customer Satisfaction",
    description:
      "Delivering exceptional quality and service to all our customers",
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
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Ada Salt Production Facility"
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
          <Sparkles className="w-20 h-20 text-amber-400 mx-auto animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
        >
          About ADA YFFD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-4xl text-amber-100 font-light tracking-wide mb-12"
        >
          Empowering Ada Through Sustainable Salt Production
        </motion.p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
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
      className="py-32 bg-gradient-to-b from-stone-950 to-stone-900 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 overflow-hidden">
          <CardContent className="p-12">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
            >
              Our Story
            </motion.h2>

            <div className="space-y-8 text-amber-100/80">
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0}
                className="text-lg md:text-xl leading-relaxed"
              >
                Founded in Ada, Greater Accra Region, our journey began as a
                local initiative to harness the region's abundant natural salt
                resources. What started as a vision to create sustainable
                economic opportunities has grown into a leading salt production
                company in Ghana.
              </motion.p>
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={1}
                className="text-lg md:text-xl leading-relaxed"
              >
                Our mission is clear: to empower the people of Ada by creating
                sustainable economic opportunities through high-quality salt
                production and essential goods and services. We're dedicated to
                driving local growth while maintaining our commitment to
                environmental responsibility.
              </motion.p>
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={2}
                className="text-lg md:text-xl leading-relaxed"
              >
                Today, we foster a collaborative work environment that feels
                like family, focusing on innovation, employee well-being, and
                community empowerment. Our success is measured not just in
                production numbers, but in the positive impact we make on our
                community.
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Team() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-900 to-stone-800 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-16"
        >
          Our Leadership Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              role: "Founder/CEO",
              description:
                "Visionary leader focused on business and community development",
              icon: <Briefcase className="w-16 h-16" />,
            },
            {
              role: "Operations Manager",
              description:
                "Expert in managing efficient, sustainable production",
              icon: <Factory className="w-16 h-16" />,
            },
            {
              role: "Customer Relations Head",
              description:
                "Dedicated to delivering exceptional customer service",
              icon: <Users className="w-16 h-16" />,
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-amber-400 mb-6 inline-block"
                  >
                    {member.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {member.role}
                  </h3>
                  <p className="text-amber-100/60">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-800 to-stone-950 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
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
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-amber-400 mb-6 inline-block"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-amber-100/60">{value.description}</p>
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
    <main className="bg-stone-950 min-h-screen">
      <Hero />
      <Story />
      <Team />
      <Values />
    </main>
  );
}
