"use client";
import React from "react";
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
        className={`py-2 px-3 rounded-md transition-all duration-300 ease-in-out ${
          isActive
            ? "bg-purple-700 text-white"
            : "text-gray-200 hover:text-white"
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
          className={`block py-2 px-4 transition-colors duration-200 ${
            isActive
              ? "bg-purple-700 text-white"
              : "text-white hover:text-purple-200"
          }`}
        >
          {item.title}
        </a>
      </Link>
    </div>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Use usePathname instead of useRouter

  const isActiveLink = (href: string): boolean => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" passHref legacyBehavior>
            <a className="text-2xl font-bold text-white">Logo</a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
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
