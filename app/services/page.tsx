import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Package2,
  ShieldCheck,
  Truck,
  Globe,
  BarChart,
  Users,
} from "lucide-react";

const CashewExportServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[url('/api/placeholder/1200/800')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Cashew Export Services
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Delivering Quality Cashews from Ghana to the World
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Services Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Export Services
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            We offer a comprehensive range of services tailored to ensure
            smooth, reliable, and timely delivery of high-quality cashews to
            clients worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Export Logistics",
                desc: "We handle all aspects of exporting processed cashews from Ghana to various global destinations. Our team manages logistics, customs clearance, and documentation to ensure a seamless export process.",
              },
              {
                icon: Package2,
                title: "Custom Packaging & Labeling",
                desc: "We offer flexible packaging solutions tailored to your specific market needs. Whether you require retail-ready packaging or bulk shipments, we customize to suit your preferences and ensure compliance with international regulations.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Our strict quality control process ensures that every batch of cashews meets the highest international standards. We test for freshness, uniformity, and quality before export, guaranteeing premium products for your customers.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <service.icon className="w-12 h-12 mb-4 text-amber-500" />
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    {service.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Value-Added Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Market Analysis",
                desc: "We provide insights into global cashew markets, helping you make informed decisions about export destinations and pricing strategies.",
              },
              {
                icon: BarChart,
                title: "Supply Chain Optimization",
                desc: "Our experts work with you to streamline your supply chain, reducing costs and improving efficiency in the export process.",
              },
              {
                icon: Users,
                title: "Customer Support",
                desc: "We offer dedicated customer support throughout the export process, ensuring clear communication and prompt resolution of any issues.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-amber-100 to-amber-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <item.icon className="w-12 h-12 mb-4 text-amber-600" />
                  <CardTitle className="text-xl font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Choose Our Services?
          </h2>
          <ul className="list-disc pl-6 space-y-4 max-w-3xl mx-auto">
            <li>Years of experience in the cashew export industry</li>
            <li>
              Strong relationships with global buyers and logistics partners
            </li>
            <li>Commitment to quality and customer satisfaction</li>
            <li>Expertise in international trade regulations and compliance</li>
            <li>Sustainable and ethical sourcing practices</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-amber-600 text-white py-16 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Export with Us?</h2>
          <p className="text-xl mb-8">
            Get in touch today to discuss your cashew export needs
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-amber-600 hover:bg-amber-100"
          >
            Contact Our Team
          </Button>
        </section>
      </div>
    </div>
  );
};

export default CashewExportServicesPage;
