// components/Products.tsx
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Raw Cashew Nuts",
    description: "Premium quality raw cashew nuts",
    image: "/images/raw-cashews.jpg",
  },
  {
    name: "Roasted Cashews",
    description: "Perfectly roasted and salted cashews",
    image: "/images/roasted-cashews.jpg",
  },
  {
    name: "Cashew Butter",
    description: "Creamy and nutritious cashew butter",
    image: "/images/cashew-butter.jpg",
  },
  {
    name: "Cashew Oil",
    description: "Pure, cold-pressed cashew oil",
    image: "/images/cashew-oil.jpg",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-r from-green-100 via-yellow-100 to-green-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <p className="text-lg mb-6 mx-auto max-w-2xl">
          At Quality Food Distributors Ghana Ltd, we specialize in producing
          premium processed cashews that meet the highest international
          standards. Sourced from the finest local farms in Ghana, our cashews
          are meticulously processed to ensure optimal taste, texture, and
          quality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-transform hover:scale-105"
            >
              <CardHeader className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
