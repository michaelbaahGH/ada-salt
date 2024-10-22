"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

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

function Products() {
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

function Hero() {
  return (
    <section className="relative h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full bg-[url('/images/cashew-field.jpg')] bg-cover bg-center">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full bg-[url('/images/cashew-processing.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Quality Guaranteed</h1>
                <p className="text-xl mb-8">ISO 9001:2015 Certified</p>
                <Button size="lg">Our Process</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full bg-[url('/images/cashew-products.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Diverse Product Range
                </h1>
                <p className="text-xl mb-8">
                  Raw, Roasted, and Value-Added Cashew Products
                </p>
                <Button size="lg">View Products</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

function About() {
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

function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <Swiper
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
        </Swiper>
      </div>
    </section>
  );
}

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

function Gallery() {
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

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-green-50 to-yellow-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              {/* onSubmit={handleSubmit} */}
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Input type="text" placeholder="Your Phone Number" required />
                <Textarea placeholder="Your Message" required />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Address:</strong> Sunyani, Bono Region, Ghana
              </p>
              <p>
                <strong>Phone:</strong> +233 24 567 8901
              </p>
              <p>
                <strong>Email:</strong> info@goldenharvestcashews.com
              </p>
              <p>
                <strong>WhatsApp:</strong> +233 50 123 4567
              </p>
              <div className="mt-8">
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* Add social media icons here */}
                  <a
                    href="https://facebook.com/goldenharvestcashews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com/goldenharvestcashews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
