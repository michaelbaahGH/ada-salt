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
  Leaf,
  Heart,
  Users,
  Globe,
  Sparkles,
  Star,
  ArrowRight,
  Coffee,
  Workflow,
} from "lucide-react";

// Enhanced particle effect component

const Particles = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set window dimensions once the component is mounted
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Optional: Add a resize listener to handle window resizing
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
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

// Enhanced certification interface
const certifications = [
  {
    name: "Certified Organic",
    image: "/api/placeholder/100/100",
    description: "Meeting the highest standards of organic cultivation",
    year: "Since 2010",
  },
  {
    name: "Fair Trade Certified",
    image: "/api/placeholder/100/100",
    description: "Ensuring ethical trading practices and fair compensation",
    year: "Since 2012",
  },
  {
    name: "ISO 9001:2015",
    image: "/api/placeholder/100/100",
    description: "Excellence in quality management systems",
    year: "Since 2015",
  },
];

function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-900/50 to-stone-950/50 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <Star className="w-12 h-12 text-amber-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Certifications
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Recognized globally for our commitment to quality and sustainability
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative w-full md:w-80"
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                  rotateY: hoveredIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
                style={{ perspective: 1000 }}
              >
                <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 h-full transform-gpu preserve-3d">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between backface-hidden">
                    <div>
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="mx-auto mb-6 rounded-lg"
                      />
                      <h3 className="text-xl font-semibold text-amber-100 mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-amber-100/60">{cert.description}</p>
                    </div>
                    <p className="text-amber-400 mt-4 font-medium">
                      {cert.year}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <Particles />
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Golden Harvest Cashew Orchard"
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
          Our Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-4xl text-amber-100 font-light tracking-wide mb-12"
        >
          Cultivating Quality, Nurturing Nature
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center gap-4 text-amber-100/60"
        >
          <Coffee className="w-8 h-8" />
          <ArrowRight className="w-8 h-8" />
          <Workflow className="w-8 h-8" />
        </motion.div>
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
              Our Journey
            </motion.h2>

            <div className="space-y-8 text-amber-100/80 relative">
              {[
                "Founded in 2008, Golden Harvest Cashews Ltd. began as a small family-owned farm in the lush landscapes of Ghana's Bono Region. Our founders, driven by a passion for sustainable agriculture and a vision of empowering local communities, set out to cultivate the finest organic cashews.",
                "Over the years, we've grown from a modest operation to a leading producer of premium organic cashew nuts, all while maintaining our commitment to quality, sustainability, and fair trade practices. Our journey has been one of continuous learning, innovation, and dedication to our core values.",
                "Today, Golden Harvest Cashews is proud to be at the forefront of the organic cashew industry, supplying high-quality nuts to markets across Ghana, West Africa, Europe, and North America. Our success is a testament to the hard work of our farmers, the support of our local community, and the loyalty of our customers who share our passion for exceptional, ethically-produced cashews.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  custom={index}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="text-lg md:text-xl leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

const team = [
  {
    name: "Kwame Asante",
    role: "Founder & CEO",
    image: "/api/placeholder/200/200",
    quote: "Our success grows from the seeds of sustainability.",
  },
  {
    name: "Ama Mensah",
    role: "Operations Manager",
    image: "/api/placeholder/200/200",
    quote: "Quality is our signature in every harvest.",
  },
  {
    name: "Kofi Boateng",
    role: "Head of Agriculture",
    image: "/api/placeholder/200/200",
    quote: "Nature's wisdom guides our farming practices.",
  },
  {
    name: "Akua Darko",
    role: "Quality Control Specialist",
    image: "/api/placeholder/200/200",
    quote: "Excellence is in the details of every nut.",
  },
];

function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-900 to-stone-950 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <Users className="w-12 h-12 text-amber-400" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            The passionate individuals behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <motion.div
                    animate={{
                      scale: hoveredMember === index ? 1.1 : 1,
                      rotateY: hoveredMember === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative mb-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/20 rounded-full" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full mx-auto w-32 h-32 object-cover"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 mb-4">{member.role}</p>
                  <motion.p
                    animate={{
                      opacity: hoveredMember === index ? 1 : 0.6,
                    }}
                    className="text-amber-100/60 italic"
                  >
                    "{member.quote}"
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Adding Values section
const values = [
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Sustainability",
    description: "Committed to environmentally conscious farming practices",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Community",
    description: "Empowering local communities through fair employment",
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Quality",
    description: "Ensuring premium grade cashews in every batch",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Global Impact",
    description: "Contributing to sustainable agriculture worldwide",
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
      className="py-32 bg-gradient-to-b from-stone-950 to-stone-900 relative"
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

// Main About component that combines all sections
export default function IAboutPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <Hero />
      <Story />
      <Values />
      <Certifications />
      <Team />
    </main>
  );
}
