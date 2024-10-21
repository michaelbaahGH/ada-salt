// components/About.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/images/cashew-farm.jpg"
              alt="Golden Harvest Cashew Farm"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              About Golden Harvest Cashews
            </h2>
            <p className="text-lg mb-6">
              Golden Harvest Cashews Ltd. is a leading producer of premium
              organic cashew nuts in the Bono Region of Ghana. With over 15
              years of experience, we pride ourselves on delivering
              high-quality, sustainably sourced cashews to local and
              international markets.
            </p>
            <p className="text-lg mb-6">
              Our commitment to quality and customer satisfaction makes us a
              trusted partner in the cashew industry. We are dedicated to
              sustainable farming practices and supporting local communities.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-green-100 rounded-full px-4 py-2 text-green-800 font-semibold">
                Certified Organic
              </div>
              <div className="bg-blue-100 rounded-full px-4 py-2 text-blue-800 font-semibold">
                Fair Trade
              </div>
              <div className="bg-yellow-100 rounded-full px-4 py-2 text-yellow-800 font-semibold">
                ISO 9001:2015
              </div>
            </div>
            <Button size="lg">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
