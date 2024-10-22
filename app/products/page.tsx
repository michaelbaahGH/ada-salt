"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, Sparkles, Star, Gauge, Box } from "lucide-react";

// Types for grade and stat data
type Grade = {
  name: string;
  description: string;
  stats: { protein: string; fat: string; calories: string };
  features: string[];
  price: string;
};

type Stat = {
  value: string;
  label: string;
  icon: React.ElementType;
};

const ProcessedCashewsPage = () => {
  const [activeGrade, setActiveGrade] = useState<string>("whole");
  const { scrollYProgress } = useScroll();
  const [statsRef, statsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  // Smooth scroll progress for hero parallax
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  const grades: { [key: string]: Grade } = {
    whole: {
      name: "Premium Whole Cashews",
      description:
        "Hand-selected, perfectly intact cashews for the most discerning customers.",
      stats: { protein: "5.2g", fat: "12.4g", calories: "157" },
      features: ["Perfect Shape", "Premium Grade", "Gourmet Quality"],
      price: "$24.99/lb",
    },
    splits: {
      name: "Golden Splits",
      description:
        "Expertly split cashews, ideal for luxury baking and confectionery.",
      stats: { protein: "5.0g", fat: "12.1g", calories: "153" },
      features: ["Consistent Size", "Baker's Choice", "Cost-Effective"],
      price: "$21.99/lb",
    },
    pieces: {
      name: "Artisanal Pieces",
      description:
        "Premium cashew pieces, perfect for gourmet cooking and toppings.",
      stats: { protein: "4.8g", fat: "11.9g", calories: "150" },
      features: ["Uniform Size", "Recipe-Ready", "Bulk Value"],
      price: "$19.99/lb",
    },
  };

  const stats: Stat[] = [
    { value: "25+", label: "Years of Excellence", icon: Star },
    { value: "50+", label: "Countries Served", icon: Globe },
    { value: "100K+", label: "Metric Tons Processed", icon: Box },
    { value: "99.9%", label: "Quality Rating", icon: Gauge },
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
            alt="Premium Cashews"
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
            <Sparkles className="w-16 h-16 text-amber-400 mx-auto" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
            LUXURY CASHEWS
          </h1>

          <p className="text-xl md:text-3xl mb-12 text-amber-100 font-light tracking-wide">
            Elevating Culinary Excellence Since 1999
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
              Explore Collection
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="relative py-32 bg-gradient-to-b from-stone-900/50 to-stone-950/50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block mb-4"
                >
                  <stat.icon className="w-12 h-12 text-amber-400" />
                </motion.div>
                <motion.h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {stat.value}
                </motion.h3>
                <p className="text-amber-100/80 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Premium Selection
            </h2>
            <p className="text-xl text-amber-100/80 max-w-3xl mx-auto">
              Discover our curated collection of premium cashews, each grade
              carefully selected and processed to perfection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGrade}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-square"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl shadow-lg" />
                  <img
                    src={`/api/placeholder/600/600?grade=${activeGrade}`}
                    alt={grades[activeGrade].name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {grades[activeGrade].name}
                </h3>
                <p className="text-lg text-amber-100/80">
                  {grades[activeGrade].description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ul className="space-y-2 text-amber-100/90">
                  {grades[activeGrade].features.map((feature, index) => (
                    <li key={index} className="text-lg flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-amber-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4"
              >
                <p className="text-xl text-amber-100/90">
                  <span className="font-semibold">Price: </span>
                  {grades[activeGrade].price}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Grade Selector */}
          <div className="flex space-x-4 justify-center mt-16">
            {Object.keys(grades).map((gradeKey) => (
              <Button
                key={gradeKey}
                variant={activeGrade === gradeKey ? "default" : "ghost"}
                size="lg"
                onClick={() => setActiveGrade(gradeKey)}
                className={`bg-gradient-to-r ${
                  activeGrade === gradeKey
                    ? "from-amber-500 to-amber-600 text-white"
                    : "text-amber-400 hover:bg-amber-500/10"
                } text-xl px-8 py-4 rounded-full`}
              >
                {grades[gradeKey].name}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessedCashewsPage;
