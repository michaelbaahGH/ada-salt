import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
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
                <Input type="text" placeholder="Subject" required />
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
