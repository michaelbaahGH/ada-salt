"use client";
import Image from "next/image";
// import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [
  {
    src: "/images/cashew-trees.jpg",
    alt: "Cashew Trees",
    caption: "Our Organic Cashew Orchard",
  },
  {
    src: "/images/harvesting.jpg",
    alt: "Cashew Harvesting",
    caption: "Harvesting Premium Cashews",
  },
  {
    src: "/images/processing.jpg",
    alt: "Cashew Processing",
    caption: "State-of-the-art Processing Facility",
  },
  {
    src: "/images/packaging.jpg",
    alt: "Cashew Packaging",
    caption: "Quality Packaging for Freshness",
  },
  {
    src: "/images/final-product.jpg",
    alt: "Final Product",
    caption: "Ready for Distribution",
  },
  {
    src: "/images/team.jpg",
    alt: "Our Team",
    caption: "The Golden Harvest Family",
  },
];

export default function Gallery() {
  // const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <p className="mt-4 text-center">{image.caption}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
