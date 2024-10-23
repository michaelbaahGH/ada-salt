"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Droplets,
  Leaf,
  TrendingUp,
  Users,
  ChevronRight,
  Sparkles,
  BadgeCheck,
  Scale,
  Truck,
  PhoneCall,
  MessageSquare,
  BookOpen,
  Heart,
} from "lucide-react";

// Reuse the Particles component from your original code
const Particles = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  React.useEffect(() => {
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

const services = [
  {
    icon: Droplets,
    title: "Salt Production",
    description: "High-quality, locally sourced salt using sustainable methods",
    features: [
      "Sustainable and eco-friendly production",
      "Locally sourced materials",
      "Competitive pricing",
      "Premium grade quality",
    ],
  },
  {
    icon: Truck,
    title: "Distribution Services",
    description: "Comprehensive logistics and distribution support",
    features: [
      "Local and regional delivery",
      "Bulk shipping available",
      "Real-time tracking",
      "Flexible scheduling",
    ],
  },
  {
    icon: Scale,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
    features: [
      "Regular quality checks",
      "Industry certifications",
      "Pure product guarantee",
      "Batch tracking",
    ],
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "Dedicated support for all your needs",
    features: [
      "24/7 availability",
      "Expert consultation",
      "Order management",
      "Custom solutions",
    ],
  },
];

const testimonials = [
  {
    quote: "Top-quality salt and great community-driven service!",
    author: "Kwame Mensah",
    role: "Business Owner",
  },
  {
    quote: "Their commitment to sustainability sets them apart.",
    author: "Sarah Johnson",
    role: "Restaurant Manager",
  },
  {
    quote: "Reliable service and excellent product quality.",
    author: "David Chen",
    role: "Food Industry Executive",
  },
];

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Particles />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Salt Production"
          className="object-cover w-full h-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center max-w-5xl px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <Sparkles className="w-20 h-20 text-amber-400 mx-auto animate-pulse" />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
          Pure Salt, Pure Excellence
        </h1>

        <p className="text-2xl md:text-4xl text-amber-100 font-light tracking-wide mb-12">
          Sustainable Salt Production for Ada and Beyond
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xl px-12 py-8 rounded-full shadow-lg shadow-amber-500/25"
          >
            Discover Our Products
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServicesGrid() {
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Comprehensive salt production and distribution solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-6 text-amber-400"
                  >
                    <service.icon className="w-12 h-12" />
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
                        <BadgeCheck className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
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

function Testimonials() {
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <MessageSquare className="w-12 h-12 text-amber-400 mb-6" />
                  <p className="text-xl text-amber-100 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-amber-400">
                        {testimonial.author}
                      </p>
                      <p className="text-amber-100/60 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Do you offer bulk pricing?",
      answer:
        "Yes, we provide discounts for large orders. Contact our sales team for a custom quote.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Contact us via phone or email for a quote. Our team will guide you through the process.",
    },
    {
      question: "What makes your salt production sustainable?",
      answer:
        "We use eco-friendly practices, minimize waste, and employ local workers to reduce our carbon footprint.",
    },
  ];

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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4 flex items-center">
                    <BookOpen className="w-6 h-6 mr-3" />
                    {faq.question}
                  </h3>
                  <p className="text-amber-100/60">{faq.answer}</p>
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
  return (
    <section className="py-32 bg-gradient-to-b from-stone-950 to-stone-900 relative">
      <Particles />
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-amber-100/60 mb-12">
            Get in touch today for high-quality products and expert services!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xl px-12 py-8 rounded-full shadow-lg shadow-amber-500/25 w-full md:w-auto"
              >
                <PhoneCall className="w-6 h-6 mr-2" />
                Contact Us
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-400 hover:bg-amber-500/10 text-xl px-12 py-8 rounded-full w-full md:w-auto"
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Request Quote
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Environmentally-friendly practices in every step of production",
    },
    {
      icon: Users,
      title: "Local Employment",
      description: "Creating meaningful jobs for Ada residents",
    },
    {
      icon: BadgeCheck,
      title: "Quality Assurance",
      description: "Top-notch production standards and rigorous testing",
    },
  ];

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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-block mb-6 text-amber-400"
                  >
                    <feature.icon className="w-16 h-16" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-amber-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-amber-100/60">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SaltServicesPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <Hero />
      <Features />
      <ServicesGrid />
      <Testimonials />
      <FAQSection />
      <CallToAction />
    </main>
  );
}
