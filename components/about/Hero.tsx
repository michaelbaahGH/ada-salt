import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <Image
        src="/images/cashew-orchard.jpg"
        alt="Golden Harvest Cashew Orchard"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-black">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Cultivating Quality, Nurturing Nature, and Empowering Communities
          </p>
        </div>
      </div>
    </div>
  );
}
