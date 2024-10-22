"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Social links and quick links arrays
const socialLinks = [
  {
    icon: <Facebook size={24} />,
    url: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: <Twitter size={24} />,
    url: "https://twitter.com/",
    label: "Twitter",
  },
  {
    icon: <Instagram size={24} />,
    url: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    icon: <Linkedin size={24} />,
    url: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/products", label: "Cashew Products" },
  { href: "/contact", label: "Contact Us" },
];

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false); // Check if we're rendering on the client

  // Use useEffect to enable animations only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-stone-900 to-stone-950 text-amber-100">
      {/* Render framer-motion effects only if it's client-side */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `move-${i} ${
                  Math.random() * 10 + 20
                }s linear infinite`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <Card className="bg-stone-900/30 backdrop-blur-lg border-amber-500/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-400" />
                Golden Harvest
              </h3>
              <div className="space-y-3 text-amber-100/70">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  Sunyani, Bono Region, Ghana
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-amber-400" />
                  +233 24 567 8901
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-amber-400" />
                  info@goldenharvestcashews.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="bg-stone-900/30 backdrop-blur-lg border-amber-500/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-amber-100/70 hover:text-amber-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-stone-900/30 backdrop-blur-lg border-amber-500/20 col-span-1 lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-amber-400">
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-stone-800/50 hover:bg-amber-500/10 transition-colors duration-300"
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <div
                      className={`text-amber-400 group-hover:text-amber-300 ${
                        hoveredLink === index ? "animate-spin" : ""
                      }`}
                    >
                      {social.icon}
                    </div>
                    <span className="text-sm text-amber-100/70 group-hover:text-amber-400">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-amber-500/20 text-center">
          <p className="text-amber-100/60 flex items-center justify-center gap-2">
            © 2024 Golden Harvest Cashews Ltd. Made with
            <span className="animate-pulse">
              <Heart className="w-4 h-4 text-amber-400" />
            </span>
            by Wabi Baah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
