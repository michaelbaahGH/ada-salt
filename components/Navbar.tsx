"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "HOME", href: "/" }, // Added Home link
  { title: "ABOUT", href: "/about" },
  { title: "SERVICES", href: "/services" },
  { title: "PRODUCTS", href: "/products" },
  { title: "CONTACT", href: "/contact" },
];

interface NavItemProps {
  item: MenuItem;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, isActive }) => {
  return (
    <Link href={item.href} passHref legacyBehavior>
      <a
        className={`py-2 px-3 rounded-md transition-all duration-300 ease-in-out transform ${
          isActive
            ? "bg-purple-700 text-white shadow-md"
            : "text-gray-200 hover:text-white hover:bg-purple-500 hover:scale-105"
        } cursor-pointer`}
      >
        {item.title}
      </a>
    </Link>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({ item, isActive }) => {
  return (
    <div className="border-b border-purple-400 py-2">
      <Link href={item.href} passHref legacyBehavior>
        <a
          className={`block py-2 px-4 transition-colors duration-200 transform ${
            isActive
              ? "bg-purple-700 text-white shadow-md"
              : "text-white hover:text-purple-200 hover:bg-purple-500 hover:scale-105"
          }`}
        >
          {item.title}
        </a>
      </Link>
    </div>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Update scroll position
    setScrollPosition(scrollTop);

    // Make the navbar sticky after scrolling past 100px
    if (scrollTop > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    // Control navbar visibility based on scroll position
    if (scrollTop > 300) {
      setIsVisible(false); // Hide navbar
    } else {
      setIsVisible(true); // Show navbar
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveLink = (href: string): boolean => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrollPosition === 0
          ? "bg-gradient-to-r from-purple-600 to-indigo-600 opacity-100 py-4 md:py-6"
          : scrollPosition < 100
          ? "bg-gradient-to-r from-purple-600 to-indigo-600 opacity-100 py-4 md:py-6"
          : scrollPosition < 300
          ? "bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90 py-2 md:py-4"
          : "transform -translate-y-full"
      } ${isSticky ? "shadow-lg h-16 md:h-16" : ""} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" passHref legacyBehavior>
            <a className="text-2xl font-bold text-white transition-transform duration-300 transform hover:scale-105">
              Logo
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item, index) => (
              <NavItem
                key={index}
                item={item}
                isActive={isActiveLink(item.href)}
              />
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] p-0 bg-gradient-to-b from-purple-600 to-indigo-600"
            >
              <nav className="flex flex-col space-y-4 p-4">
                {menuItems.map((item, index) => (
                  <MobileNavItem
                    key={index}
                    item={item}
                    isActive={isActiveLink(item.href)}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
