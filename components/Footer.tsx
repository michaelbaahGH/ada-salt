"use client";
import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Shell,
  Droplets,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const NavLink = ({ href, children }: NavLinkProps) => {
    const isActive = pathname === href;

    if (isActive) {
      return (
        <span className="flex items-center gap-2 text-amber-400 cursor-default font-medium">
          <ExternalLink className="w-4 h-4" />
          {children}
          <span className="text-xs bg-amber-400/20 px-2 py-1 rounded-full">
            Active
          </span>
        </span>
      );
    }

    return (
      <Link
        href={href}
        className="flex items-center gap-2 text-amber-100/70 hover:text-amber-400 transition-colors duration-300"
      >
        <ExternalLink className="w-4 h-4" />
        {children}
      </Link>
    );
  };

  return (
    <footer className="relative bg-gradient-to-b from-stone-900 to-stone-950 text-amber-100">
      {/* Animated wave background */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-24 opacity-10"
              style={{
                background:
                  "linear-gradient(to right, transparent, #FCD34D, transparent)",
                transform: "rotate(-5deg)",
                top: `${30 * i}%`,
                animation: `wave-${i} ${15 + i * 5}s linear infinite`,
                left: `-${100 + i * 50}%`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <Card className="bg-stone-900/30 backdrop-blur-lg border-amber-500/20 col-span-1 lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent flex items-center gap-2">
                <Shell className="w-6 h-6 text-amber-400" />
                ADA YFFD MIDDLE BELT COMPANY LTD
              </h3>
              <p className="mb-6 text-amber-100/70">
                A leading salt production company, empowering the people of Ada
                through sustainable economic opportunities.
              </p>
              <div className="p-4 bg-stone-800/30 rounded-lg border border-amber-500/20">
                <h4 className="flex items-center gap-2 text-amber-300 font-semibold mb-2">
                  <Droplets className="w-5 h-5" />
                  Our Mission
                </h4>
                <p className="text-amber-100/70 italic">
                  "Empowering the people of Ada through sustainable economic
                  opportunities."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-stone-900/30 backdrop-blur-lg border-amber-500/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">
                Contact Us
              </h3>
              <div className="space-y-4 text-amber-100/70">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>
                    Ada, Greater Accra Region, Ghana P.O. Box 49 Ada, Greater
                    Accra Region, Ghana
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <a
                    href="tel:0596009007"
                    className="hover:text-amber-400 transition-colors"
                  >
                    0596009007
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <a
                    href="mailto:adayffd9007@gmail.com"
                    className="hover:text-amber-400 transition-colors"
                  >
                    adayffd9007@gmail.com
                  </a>
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
                    <NavLink href={link.href}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6 pt-8 border-t border-amber-500/20">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-stone-800/50 hover:bg-amber-500/20 transition-all duration-300"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div
                  className={`text-amber-400 group-hover:text-amber-300 transform transition-transform duration-300 ${
                    hoveredLink === index ? "scale-125" : ""
                  }`}
                >
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-amber-100/60 text-center">
            © 2024 ADA YFFD MIDDLE BELT COMPANY LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
