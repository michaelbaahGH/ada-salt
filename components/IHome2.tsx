"use client";
import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  Briefcase,
  Heart,
  Users,
  Factory,
  Sparkles,
  Star,
  ArrowRight,
  Leaf,
  DollarSign,
  Award,
  Shield,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

// Reusing the Particles component from the About page
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Salt Production in Ada"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-center max-w-5xl px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
        >
          Empowering Ada Through Salt Production
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-amber-100 font-light tracking-wide mb-12 max-w-3xl mx-auto"
        >
          ADA YFFD MIDDLE BELT COMPANY LTD is a leader in salt production,
          committed to delivering high-quality products and driving sustainable
          development in the Ada region.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <Link href="/services" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-500 text-stone-900 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-amber-400 transition-colors"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-amber-500 text-amber-500 rounded-lg font-semibold text-lg hover:bg-amber-500/10 transition-colors"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
    </section>
  );
}

const focusPoints = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Local Employment",
    description: "Creating meaningful job opportunities for the Ada community",
  },
  {
    icon: <Factory className="w-12 h-12" />,
    title: "Economic Growth",
    description: "Driving sustainable development in the Ada region",
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Customer Service",
    description: "Delivering exceptional service and support",
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Sustainability",
    description: "Implementing eco-friendly production practices",
  },
];

function Focus() {
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
            Our Focus
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Driving positive change through sustainable salt production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusPoints.map((point, index) => (
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
                    {point.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {point.title}
                  </h3>
                  <p className="text-amber-100/60">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    title: "Premium Salt",
    description: "High-quality, locally sourced salt for various applications",
    image: "/images/salt5.webp",
  },
  {
    title: "Industrial Salt",
    description: "Bulk quantities for industrial and manufacturing needs",
    image: "/images/industrial.webp",
  },
  {
    title: "Custom Solutions",
    description: "Tailored salt products for specific requirements",
    image: "/images/custom2.jpg",
  },
];

function Products() {
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
            <Factory className="w-12 h-12 text-amber-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Offerings
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Explore our locally sourced, high-quality products and range of
            services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-amber-100 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-amber-100/60 mb-4">
                    {product.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-amber-400 font-medium flex items-center gap-2 hover:text-amber-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sellingPoints = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "Premium Quality",
    description: "Locally sourced, high-quality salt products",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Community First",
    description: "Driving positive change in the Ada region",
  },
  {
    icon: <DollarSign className="w-12 h-12" />,
    title: "Competitive Pricing",
    description: "Excellent value without compromising quality",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Trusted Partner",
    description: "Reliable service and consistent delivery",
  },
];

function SellingPoints() {
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
            Why Choose Us?
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Excellence in every grain, commitment in every action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sellingPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 h-full group hover:border-amber-500/40 transition-colors">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-amber-400 mb-6 inline-block group-hover:text-amber-300 transition-colors"
                  >
                    {point.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4 group-hover:text-amber-50 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-amber-100/60 group-hover:text-amber-100/70 transition-colors">
                    {point.description}
                  </p>
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

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "1000+", label: "Happy Customers" },
    { value: "500+", label: "Local Jobs Created" },
    { value: "50K+", label: "Tons Produced" },
  ];

  return (
    <section ref={ref} className="py-24 bg-amber-500 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1,
                }}
                className="text-4xl md:text-5xl font-bold text-stone-900 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-stone-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-32 bg-stone-900 relative">
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Have questions? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {[
            {
              icon: <Phone className="w-8 h-8" />,
              title: "Phone",
              content: "+233 (0) 123 456 789",
            },
            {
              icon: <Mail className="w-8 h-8" />,
              title: "Email",
              content: "info@adayffd.com",
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Location",
              content: "Ada, Greater Accra Region, Ghana",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-amber-400 mb-4 inline-block"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-amber-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-amber-100/60">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-amber-100"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-amber-500/20 text-amber-100 placeholder-amber-100/30 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-amber-100"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-amber-500/20 text-amber-100 placeholder-amber-100/30 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-amber-100"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-amber-500/20 text-amber-100 placeholder-amber-100/30 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-amber-100"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-amber-500/20 text-amber-100 placeholder-amber-100/30 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Your Message"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 rounded-lg font-semibold text-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-stone-900"
                >
                  Send Message
                </motion.button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-stone-950 text-amber-100 min-h-screen">
      <Hero />
      <Focus />
      <Products />
      <SellingPoints />
      <Stats />
      <Contact />
    </main>
  );
}
