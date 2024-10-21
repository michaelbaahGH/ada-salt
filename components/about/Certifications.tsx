import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { name: "Certified Organic", image: "/images/organic-cert.png" },
  { name: "Fair Trade Certified", image: "/images/fair-trade-cert.png" },
  { name: "ISO 9001:2015", image: "/images/iso-cert.png" },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Certifications
        </h2>
        <div className="flex justify-center space-x-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{cert.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
