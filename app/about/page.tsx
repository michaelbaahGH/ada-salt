"use client";

import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Globe, Sparkles } from "lucide-react";
import { Metadata } from "next";
import IAboutPage from "@/components/about/IAbout";

// export const metadata: Metadata = {
//   title: "About Us | Golden Harvest Cashews",
//   description:
//     "Learn about Golden Harvest Cashews, our mission, values, and commitment to quality organic cashews.",
// };

const certifications = [
  { name: "Certified Organic", image: "/api/placeholder/100/100" },
  { name: "Fair Trade Certified", image: "/api/placeholder/100/100" },
  { name: "ISO 9001:2015", image: "/api/placeholder/100/100" },
];

function Certifications() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-stone-900/50 to-stone-950/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
        >
          Our Certifications
        </motion.h2>
        <div ref={ref} className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="mx-auto mb-4 rounded-lg"
                  />
                  <h3 className="text-lg font-semibold text-amber-100">
                    {cert.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
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
          Our Story
        </h1>
        <p className="text-xl md:text-3xl text-amber-100 font-light tracking-wide">
          Cultivating Quality, Nurturing Nature, and Empowering Communities
        </p>
      </motion.div>
    </section>
  );
}

function Story() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-stone-950 to-stone-900"
    >
      <div className="container mx-auto px-4">
        <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20">
          <CardContent className="p-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
            >
              Our Journey
            </motion.h2>
            <div className="space-y-6 text-amber-100/80">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Founded in 2008, Golden Harvest Cashews Ltd. began as a small
                family-owned farm in the lush landscapes of Ghana's Bono Region.
                Our founders, driven by a passion for sustainable agriculture
                and a vision of empowering local communities, set out to
                cultivate the finest organic cashews.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Over the years, we've grown from a modest operation to a leading
                producer of premium organic cashew nuts, all while maintaining
                our commitment to quality, sustainability, and fair trade
                practices. Our journey has been one of continuous learning,
                innovation, and dedication to our core values.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Today, Golden Harvest Cashews is proud to be at the forefront of
                the organic cashew industry, supplying high-quality nuts to
                markets across Ghana, West Africa, Europe, and North America.
                Our success is a testament to the hard work of our farmers, the
                support of our local community, and the loyalty of our customers
                who share our passion for exceptional, ethically-produced
                cashews.
              </motion.p>
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
  },
  {
    name: "Ama Mensah",
    role: "Operations Manager",
    image: "/api/placeholder/200/200",
  },
  {
    name: "Kofi Boateng",
    role: "Head of Agriculture",
    image: "/api/placeholder/200/200",
  },
  {
    name: "Akua Darko",
    role: "Quality Control Specialist",
    image: "/api/placeholder/200/200",
  },
];

function Team() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-stone-900 to-stone-950"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1 text-amber-100">
                    {member.name}
                  </h3>
                  <p className="text-amber-100/60">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are committed to environmentally friendly farming practices.",
  },
  {
    icon: Heart,
    title: "Quality",
    description: "We take pride in producing the finest organic cashews.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We support and empower our local farming communities.",
  },
  {
    icon: Globe,
    title: "Integrity",
    description: "We conduct our business with honesty and transparency.",
  },
];

function Values() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-stone-950 to-stone-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-block mb-4"
                  >
                    <value.icon className="w-12 h-12 text-amber-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-100">
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

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-stone-950 to-stone-900 text-white">
//       <Hero />
//       <Story />
//       <Values />
//       <Team />
//       <Certifications />
//     </div>
//   );
// }

export default function AboutPage() {
  return <IAboutPage />;
}
