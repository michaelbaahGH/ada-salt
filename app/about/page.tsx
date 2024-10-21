import { Metadata } from "next";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import Certifications from "@/components/about/Certifications";

export const metadata: Metadata = {
  title: "About Us | Golden Harvest Cashews",
  description:
    "Learn about Golden Harvest Cashews, our mission, values, and commitment to quality organic cashews.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <Hero />
      <Story />
      <Values />
      <Team />
      <Certifications />
    </div>
  );
}
