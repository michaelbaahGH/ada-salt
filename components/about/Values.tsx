import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Globe } from "lucide-react";

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

export default function Values() {
  return (
    <section className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
