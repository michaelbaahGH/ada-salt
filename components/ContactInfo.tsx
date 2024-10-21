// components/ContactInfo.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="text-green-600" />
          <span>+233 24 567 8901</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="text-green-600" />
          <span>info@goldenharvestcashews.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="text-green-600" />
          <span>Sunyani, Bono Region, Ghana</span>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="text-green-600" />
          <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
        </div>
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
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
  );
}
