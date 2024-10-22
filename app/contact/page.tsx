// app/contact/page.tsx
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Map from "@/components/Map";

export const metadata: Metadata = {
  title: "Contact Us | Golden Harvest Cashews",
  description:
    "Get in touch with Golden Harvest Cashews for premium organic cashew products.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 mt-12">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <ContactForm />
            <ContactInfo />
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
}
