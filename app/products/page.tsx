"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Package2, Award, ShieldCheck, Leaf, ChevronRight } from "lucide-react";

const ProcessedCashewsPage = () => {
  const [activeGrade, setActiveGrade] = useState<keyof Grades>("whole");

  // Define the grades type
  type Grade = {
    name: string;
    description: string;
  };

  type Grades = {
    [key: string]: Grade;
  };

  const grades: Grades = {
    whole: {
      name: "Whole Cashews",
      description: "Perfect for snacking and gourmet applications.",
    },
    splits: {
      name: "Splits",
      description: "Ideal for baking and confectionery use.",
    },
    pieces: {
      name: "Pieces",
      description: "Great for cooking and as an ingredient in various foods.",
    },
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/api/placeholder/2000/1000"
            alt="Cashews"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Premium Processed Cashews
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Taste the Quality, Experience the Excellence
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6"
            >
              Explore Our Products
            </Button>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronRight size={40} className="text-white rotate-90" />
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        {/* Product Overview */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Premium Cashews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Package2,
                title: "Product Grades",
                desc: "Multiple grades to suit various market needs.",
              },
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Meticulously processed for optimal taste and texture.",
              },
              {
                icon: ShieldCheck,
                title: "Certifications",
                desc: "Compliant with global food safety standards.",
              },
              {
                icon: Leaf,
                title: "Sustainable",
                desc: "Committed to ethical and environmental practices.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 mb-4 text-amber-500" />
                    <CardTitle className="text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">
                      {feature.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Product Showcase */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Explore Our Grades
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2">
              <motion.img
                key={activeGrade}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                src={`/api/placeholder/600/400?text=${grades[activeGrade].name}`}
                alt={grades[activeGrade].name}
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              {Object.entries(grades).map(([key, { name, description }]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    activeGrade === key ? "bg-amber-500 text-white" : "bg-white"
                  }`}
                  onClick={() => setActiveGrade(key as keyof Grades)} // Ensure key is correctly typed
                >
                  <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                  <p>{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <section className="relative h-[60vh] mb-32 overflow-hidden">
          <motion.div
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <img
              src="/api/placeholder/2000/1000?text=Our Process"
              alt="Cashew Processing"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 h-full flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Meticulous Process
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                From careful selection to precise processing, every step is
                designed to bring you the finest cashews.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["ISO 22000", "HACCP", "FDA", "FSSC 22000"].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-full px-8 py-4 font-semibold text-amber-800 shadow-lg"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProcessedCashewsPage;
