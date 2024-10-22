"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[80vh]">
      <div className="h-full swiper-wrapper">
        <div className="swiper-slide h-full bg-[url('/images/cashew-field.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">
                Premium Organic Cashews
              </h1>
              <p className="text-xl mb-8">From Our Fields to Your Table</p>
              <Button size="lg">Explore Products</Button>
            </div>
          </div>
        </div>

        <div className="swiper-slide h-full bg-[url('/images/cashew-processing.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Quality Guaranteed</h1>
              <p className="text-xl mb-8">ISO 9001:2015 Certified</p>
              <Button size="lg">Our Process</Button>
            </div>
          </div>
        </div>

        <div className="swiper-slide h-full bg-[url('/images/cashew-products.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Diverse Product Range</h1>
              <p className="text-xl mb-8">
                Raw, Roasted, and Value-Added Cashew Products
              </p>
              <Button size="lg">View Products</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
