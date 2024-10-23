"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Leaf,
  Heart,
  Star,
  Coffee,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Users,
  Phone,
  Globe,
  Award,
  TrendingUp,
  Shield,
} from "lucide-react";

const Particles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: "100%",
          }}
          animate={{
            y: "-100%",
            x: `${Math.random() * 100}%`,
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="min-h-screen relative overflow-hidden">
      <Particles />
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Premium Organic Cashews
            </h1>
            <p className="text-xl md:text-2xl text-amber-100/60 mb-12 max-w-3xl mx-auto">
              Experience the finest organic cashews, sustainably harvested and
              carefully selected for unmatched quality and taste.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-x-4"
            >
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                Shop Now
                <ShoppingBag className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
              >
                Learn More
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Products = () => {
  const products = [
    {
      title: "Raw Cashews",
      description: "Pure, unroasted cashews in their natural state",
      price: "$12.99",
      image: "/images/raw-cashews.jpg",
    },
    {
      title: "Roasted Cashews",
      description: "Perfectly roasted for enhanced flavor",
      price: "$14.99",
      image: "/images/roasted-cashews.jpg",
    },
    {
      title: "Honey Glazed",
      description: "Sweet and crunchy with natural honey",
      price: "$16.99",
      image: "/images/honey-cashews.jpg",
    },
    {
      title: "Spicy Blend",
      description: "Roasted with our special spice blend",
      price: "$15.99",
      image: "/images/spicy-cashews.jpg",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-32 bg-stone-900 relative">
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <ShoppingBag className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-xl text-amber-100/60 mt-4">
            Discover our range of premium cashews
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-stone-800/50 backdrop-blur-lg border-amber-500/20 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-amber-100/60 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-400">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Rest of the components (About, Testimonials, Contact) remain the same...

// Keeping your existing Particles component...

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[Leaf, Star, Coffee, Heart].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ y: "100vh" }}
          animate={{
            y: "-100vh",
            x: Math.sin((index * Math.PI) / 2) * 200,
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2,
          }}
        >
          <Icon className="w-8 h-8 text-amber-400/20" />
        </motion.div>
      ))}
    </div>
  );
};

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { icon: Globe, value: "20+", label: "Countries Served" },
    { icon: Award, value: "15+", label: "Quality Awards" },
    { icon: TrendingUp, value: "50K+", label: "Happy Customers" },
    { icon: Shield, value: "100%", label: "Organic Certified" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-16">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="inline-block mb-4"
            >
              <Icon className="w-12 h-12 text-amber-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-4xl font-bold text-amber-400 mb-2">
                {stat.value}
              </div>
              <div className="text-amber-100/60">{stat.label}</div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-32 relative bg-gradient-to-b from-stone-900 to-stone-950">
      <FloatingIcons />
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-8">
              Our Heritage & Commitment
            </h2>
            <div className="space-y-6 text-lg text-amber-100/80">
              <p>
                For three generations, our family has cultivated the finest
                cashews in the heart of nature's most fertile grounds.
              </p>
              <p>
                We combine traditional farming wisdom with modern sustainable
                practices to bring you premium organic cashews that are not just
                delicious, but also environmentally conscious.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                Learn Our Story
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden">
              <img
                src="/images/cashew-harvest.jpg"
                alt="Cashew Harvest"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent"
                animate={{
                  background: [
                    "linear-gradient(to top right, rgba(245, 158, 11, 0.2), transparent)",
                    "linear-gradient(to top right, rgba(245, 158, 11, 0.4), transparent)",
                    "linear-gradient(to top right, rgba(245, 158, 11, 0.2), transparent)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <motion.div
              className="absolute -bottom-8 -right-8 bg-amber-500 text-white p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-sm">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <Stats />
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      image: "/images/testimonial1.jpg",
      content:
        "The most flavorful and consistently high-quality cashews I've ever tasted. Their commitment to organic farming shines through in every bite.",
    },
    {
      name: "Michael Chen",
      role: "Executive Chef",
      image: "/images/testimonial2.jpg",
      content:
        "These cashews have become a staple ingredient in my kitchen. The quality and taste are unmatched, and knowing they're sustainably sourced makes them even better.",
    },
    {
      name: "Emma Rodriguez",
      role: "Health Coach",
      image: "/images/testimonial3.jpg",
      content:
        "I recommend these cashews to all my clients. The perfect balance of nutrition and incredible taste, plus their organic certification gives me complete peace of mind.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-32 bg-stone-950 relative overflow-hidden">
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-8">
                <motion.img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <blockquote className="text-2xl text-amber-100/80 italic mb-8">
                "{testimonials[activeIndex].content}"
              </blockquote>
              <div className="text-amber-400 font-bold">
                {testimonials[activeIndex].name}
              </div>
              <div className="text-amber-100/60">
                {testimonials[activeIndex].role}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-amber-400" : "bg-amber-400/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-950 to-stone-900 relative"
    >
      <FloatingIcons />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <Phone className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-amber-100/60 mt-4">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20">
            <CardContent className="p-8">
              <motion.form
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <label className="block text-amber-100 mb-2">Name</label>
                  <Input className="bg-stone-800 border-amber-500/20 text-amber-100" />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <label className="block text-amber-100 mb-2">Email</label>
                  <Input className="bg-stone-800 border-amber-500/20 text-amber-100" />
                </motion.div>

                <motion.div
                  className="md:col-span-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <label className="block text-amber-100 mb-2">Message</label>
                  <Textarea
                    className="bg-stone-800 border-amber-500/20 text-amber-100"
                    rows={6}
                  />
                </motion.div>

                <motion.div
                  className="md:col-span-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
