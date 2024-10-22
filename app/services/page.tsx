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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Package2,
  ShieldCheck,
  Globe,
  BarChart,
  Users,
  ChevronRight,
  Sparkles,
  Leaf,
  BadgeCheck,
  Scale,
  Workflow,
  DollarSign,
  BarChart3,
  GanttChartSquare,
  Ship,
  PlaneTakeoff,
} from "lucide-react";

// Particles component from the about page
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

interface Service {
  icon: React.ComponentType; // Type for the icon component
  title: string;
  description: string;
  features: string[];
}

// Enhanced services data
const services: Service[] = [
  {
    icon: Truck,
    title: "Export Logistics",
    description:
      "Comprehensive logistics management including customs clearance, documentation, and international shipping coordination.",
    features: [
      "Real-time shipment tracking",
      "Customs documentation",
      "Multi-modal transport solutions",
    ],
  },
  {
    icon: Package2,
    title: "Custom Packaging & Labeling",
    description:
      "Tailored packaging solutions meeting international standards and market-specific requirements.",
    features: [
      "Eco-friendly materials",
      "Market-specific labeling",
      "Custom branding options",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensuring premium grade cashews for international markets.",
    features: ["ISO certification", "Quality testing", "Freshness guarantee"],
  },
  {
    icon: Ship,
    title: "Maritime Solutions",
    description:
      "Specialized maritime shipping services for bulk cashew exports worldwide.",
    features: [
      "Container optimization",
      "Port coordination",
      "Temperature control",
    ],
  },
];

const valueAddedServices: Service[] = [
  {
    icon: Globe,
    title: "Market Analysis",
    description:
      "Comprehensive global market insights for strategic export decisions.",
    features: [
      "Price trend analysis",
      "Market demand forecasting",
      "Competitor analysis",
    ],
  },
  {
    icon: BarChart,
    title: "Supply Chain Optimization",
    description:
      "Expert solutions for streamlined, efficient supply chain operations.",
    features: [
      "Cost optimization",
      "Inventory management",
      "Process automation",
    ],
  },
  {
    icon: Users,
    title: "Customer Support",
    description:
      "24/7 dedicated support ensuring seamless communication and issue resolution.",
    features: [
      "Multi-lingual support",
      "Real-time updates",
      "Dedicated account manager",
    ],
  },
  {
    icon: PlaneTakeoff,
    title: "Air Freight Solutions",
    description: "Premium air freight services for time-sensitive deliveries.",
    features: [
      "Express delivery",
      "Temperature control",
      "Door-to-door service",
    ],
  },
];

// type SetHoveredService = React.Dispatch<React.SetStateAction<number | null>>;

interface Stat {
  value: string;
  label: string;
}

// Stats section data
const stats: Stat[] = [
  { value: "50+", label: "Countries Served" },
  { value: "99.9%", label: "On-Time Delivery" },
  { value: "24/7", label: "Support Available" },
  { value: "100K+", label: "Tons Exported" },
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
  const textY = useTransform(springScrollProgress, [0, 0.3], [0, 100]);
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
          alt="Cashew Export Services"
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
          Export Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-4xl text-amber-100 font-light tracking-wide mb-12"
        >
          Your Gateway to Global Cashew Markets
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
    </section>
  );
}

function ServicesGrid({
  services,
  title,
  subtitle,
}: {
  services: Service[];
  title: string;
  subtitle: string;
}) {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.div
                    animate={{
                      scale: hoveredService === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="mb-6 text-amber-400"
                  >
                    <service.icon />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-amber-100/60 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-amber-100/80"
                      >
                        <BadgeCheck className="w-4 h-4 text-amber-400 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-stone-950 to-stone-900 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20">
                <CardContent className="p-8 text-center">
                  <motion.p
                    className="text-4xl font-bold text-amber-400 mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.1,
                    }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-amber-100/60">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
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
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Ready to Export with Us?
          </h2>
          <p className="text-xl text-amber-100/60 mb-12 max-w-2xl mx-auto">
            Join our network of successful exporters and access premium global
            markets
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xl px-12 py-8 rounded-full shadow-lg shadow-amber-500/25"
            >
              Contact Our Team
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ExportServicesPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <Hero />
      <Stats />
      <ServicesGrid
        services={services}
        title="Our Export Services"
        subtitle="Comprehensive solutions for your cashew export needs"
      />
      <ServicesGrid
        services={valueAddedServices}
        title="Value-Added Services"
        subtitle="Enhanced offerings to maximize your export potential"
      />
      <CallToAction />
    </main>
  );
}
