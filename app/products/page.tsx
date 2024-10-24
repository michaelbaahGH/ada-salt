"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  ChevronRight,
  BadgeCheck,
  Scale,
  Leaf,
  Package,
  Heart as Hearts,
  Factory,
  ShieldCheck,
  Boxes,
  Users,
  HeartHandshake,
  MessageSquare,
  Recycle,
  TreePine,
  Factory as FactoryIcon,
  Workflow,
  TestTube,
  Truck,
  Building2,
  DollarSign,
  Package as PackageIcon,
  ClipboardList,
} from "lucide-react";

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

const products = [
  {
    icon: Package,
    title: "Table Salt",
    description: "Pure, fine salt perfect for everyday cooking and seasoning.",
    features: [
      "Fine granulation",
      "Pure white crystals",
      "Perfect for daily cooking",
      "Consistent quality",
    ],
    image: "/images/salt5.webp",
  },
  {
    icon: Scale,
    title: "Sea Salt",
    description: "Natural sea salt harvested from pristine waters.",
    features: [
      "Natural minerals",
      "Gourmet quality",
      "Unique flavor profile",
      "Sustainable harvesting",
    ],
    image: "/images/salt2.jpg",
  },
  {
    icon: Hearts,
    title: "Iodized Salt",
    description: "Essential iodized salt for optimal health benefits.",
    features: [
      "Iodine fortified",
      "Health-promoting",
      "Consistent iodine levels",
      "Premium quality",
    ],
    image: "/images/salt3.jpg",
  },
  {
    icon: Factory,
    title: "Industrial Salt",
    description: "High-quality salt for various industrial applications.",
    features: [
      "Bulk availability",
      "Technical grade",
      "Custom specifications",
      "Reliable supply",
    ],
    image: "/images/salt-industrial.webp",
  },
];

function ProductHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Particles />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Premium Salt Products"
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
          Premium Salt Products
        </h1>

        <p className="text-2xl md:text-4xl text-amber-100 font-light tracking-wide mb-12">
          Elevating Quality, Empowering Communities
        </p>
      </motion.div>
    </section>
  );
}

function ProductGrid() {
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
            Our Premium Products
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Discover our range of high-quality salt products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-4 left-4 text-amber-400"
                    >
                      <product.icon className="w-12 h-12" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-amber-100/60 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
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

function QualityStandards() {
  const standards = [
    {
      icon: ShieldCheck,
      title: "Certifications",
      description: "Meeting strict quality standards and safety regulations",
    },
    {
      icon: Boxes,
      title: "Premium Packaging",
      description: "Secure packaging maintaining freshness and quality",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to environmental preservation",
    },
  ];

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
            Our Commitment to Quality
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standards.map((standard, index) => (
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
                    <standard.icon className="w-16 h-16" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-amber-100 mb-4">
                    {standard.title}
                  </h3>
                  <p className="text-amber-100/60">{standard.description}</p>
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
    <section className="py-32 bg-gradient-to-b from-stone-900 to-stone-950 relative">
      <Particles />
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Ready to Order?
          </h2>
          <p className="text-xl text-amber-100/60 mb-12">
            Contact us today for premium salt products and bulk ordering options
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xl px-12 py-8 rounded-full shadow-lg shadow-amber-500/25 w-full md:w-auto"
              >
                <HeartHandshake className="w-6 h-6 mr-2" />
                Place Order
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-400 hover:bg-amber-500/10 text-xl px-12 py-8 rounded-full w-full md:w-auto"
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Bulk Inquiries
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Sustainability() {
  const sustainabilityFeatures = [
    {
      icon: Recycle,
      title: "Environmental Impact",
      description:
        "Sustainable harvesting practices that protect our ecosystem",
      points: [
        "Minimal environmental footprint",
        "Energy-efficient processes",
        "Waste reduction initiatives",
        "Natural resource conservation",
      ],
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Supporting local growth and development in Ada",
      points: [
        "Local employment opportunities",
        "Community development programs",
        "Skills training initiatives",
        "Economic growth contribution",
      ],
    },
    {
      icon: TreePine,
      title: "Green Initiatives",
      description: "Ongoing commitment to environmental preservation",
      points: [
        "Renewable energy usage",
        "Water conservation",
        "Biodiversity protection",
        "Eco-friendly packaging",
      ],
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
            Our Commitment to Sustainability
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Building a sustainable future for our community and environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainabilityFeatures.map((feature, index) => (
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
                    <feature.icon className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-amber-100/60 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-amber-100/80"
                      >
                        <BadgeCheck className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
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

function ProductionProcess() {
  const processSteps = [
    {
      icon: FactoryIcon,
      title: "Harvesting",
      description: "Careful extraction from our salt beds",
    },
    {
      icon: Workflow,
      title: "Processing",
      description: "Multi-stage refinement process",
    },
    {
      icon: TestTube,
      title: "Quality Testing",
      description: "Rigorous quality control measures",
    },
    {
      icon: PackageIcon,
      title: "Packaging",
      description: "Secure and sustainable packaging",
    },
  ];

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
            Our Production Process
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Transparency in every step of our salt production
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-500/20 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                  <CardContent className="p-8 text-center relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-block mb-6 text-amber-400 bg-stone-900 rounded-full p-4"
                    >
                      <step.icon className="w-12 h-12" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-amber-100 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-amber-100/60">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BulkOrders() {
  const bulkFeatures = [
    {
      icon: Building2,
      title: "Business Solutions",
      description: "Tailored solutions for businesses of all sizes",
      features: [
        "Volume-based pricing",
        "Flexible delivery options",
        "Long-term contracts",
        "Dedicated account manager",
      ],
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Cost-effective bulk ordering options",
      features: [
        "Wholesale rates",
        "Quantity discounts",
        "Transparent pricing",
        "Payment plans",
      ],
    },
    {
      icon: PackageIcon,
      title: "Custom Packaging",
      description: "Packaging solutions for your specific needs",
      features: [
        "Custom branding",
        "Multiple size options",
        "Eco-friendly materials",
        "Special handling",
      ],
    },
    {
      icon: ClipboardList,
      title: "Order Management",
      description: "Streamlined bulk order processing",
      features: [
        "Online ordering system",
        "Order tracking",
        "Inventory management",
        "Regular reports",
      ],
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
            Bulk Orders & Business Solutions
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Scalable solutions for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bulkFeatures.map((feature, index) => (
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
                    <feature.icon className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-amber-100/60 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-amber-100/80"
                      >
                        <BadgeCheck className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
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

export default function ProductsPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <ProductHero />
      <ProductGrid />
      <QualityStandards />
      <Sustainability />
      <ProductionProcess />
      <BulkOrders />
      <CallToAction />
    </main>
  );
}
