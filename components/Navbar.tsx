"use client";

import React, { useEffect, useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "HOME", href: "/" },
  { title: "ABOUT", href: "/about" },
  { title: "SERVICES", href: "/services" },
  { title: "PRODUCTS", href: "/products" },
  { title: "CONTACT", href: "/contact" },
];

// Enhanced NavItem with animations
const NavItem: React.FC<{ item: MenuItem; isActive: boolean }> = ({
  item,
  isActive,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={item.href} passHref legacyBehavior>
        <a
          className={`relative py-2 px-4 rounded-md transition-all duration-300 ease-in-out ${
            isActive
              ? "text-amber-400 font-medium"
              : "text-amber-100/80 hover:text-amber-400"
          } hover:bg-amber-400/10`}
        >
          {item.title}
          {isActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </a>
      </Link>
    </motion.div>
  );
};

// Enhanced MobileNavItem with animations and close functionality
const MobileNavItem: React.FC<{
  item: MenuItem;
  isActive: boolean;
  onClose: () => void;
}> = ({ item, isActive, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="border-b border-amber-500/20"
    >
      <Link href={item.href} passHref legacyBehavior>
        <a
          className={`block py-4 px-6 transition-all duration-300 ${
            isActive
              ? "text-amber-400 bg-amber-400/10"
              : "text-amber-100/80 hover:text-amber-400 hover:bg-amber-400/5"
          }`}
          onClick={onClose}
        >
          <motion.div whileHover={{ x: 5 }} className="flex items-center">
            <Sparkles
              className={`w-4 h-4 mr-3 ${
                isActive ? "text-amber-400" : "text-amber-100/40"
              }`}
            />
            {item.title}
          </motion.div>
        </a>
      </Link>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrollPosition(scrollTop);

    if (scrollTop > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    if (scrollTop > 300) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string): boolean => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Handle menu close
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        opacity: isVisible ? 1 : 0,
        translateY: isVisible ? 0 : -100,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
        scrollPosition > 50
          ? "bg-stone-950/80 shadow-lg shadow-amber-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" passHref legacyBehavior>
            <a className="flex items-center space-x-2 text-2xl font-bold">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"
              >
                Logo
              </motion.div>
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <NavItem
                key={index}
                item={item}
                isActive={isActiveLink(item.href)}
              />
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-amber-400/10"
              >
                <Menu className="h-6 w-6 text-amber-400" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 bg-stone-950/95 backdrop-blur-xl border-amber-500/20"
            >
              <nav className="flex flex-col mt-8">
                <AnimatePresence>
                  {menuItems.map((item, index) => (
                    <MobileNavItem
                      key={index}
                      item={item}
                      isActive={isActiveLink(item.href)}
                      onClose={handleClose}
                    />
                  ))}
                </AnimatePresence>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
