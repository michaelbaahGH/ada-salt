// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    text: "Golden Harvest's cashews are the best we've ever sourced. The quality and consistency are unmatched. We've been working with them for over 5 years.",
    author: "SunTrade Foods",
  },
  {
    text: "Our customers love the taste and freshness of the roasted cashews. We're proud to offer Golden Harvest products in our stores.",
    author: "FreshMart, Accra",
  },
  {
    text: "The commitment to organic farming and fair trade practices makes Golden Harvest Cashews our top choice for premium nuts.",
    author: "EcoNuts Distributors",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="max-w-3xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <p className="text-lg italic mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-right">
                    - {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
}
