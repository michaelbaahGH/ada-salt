import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const menuItems = [
  {
    title: "Home",
    href: "/",
    submenu: [
      { title: "Welcome", href: "/welcome" },
      { title: "Featured", href: "/featured" },
    ],
  },
  {
    title: "About",
    href: "/about",
    submenu: [
      { title: "Our Story", href: "/about/our-story" },
      { title: "Team", href: "/about/team" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    submenu: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "Design", href: "/services/design" },
      { title: "Marketing", href: "/services/marketing" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    submenu: [
      { title: "Latest Posts", href: "/blog/latest" },
      { title: "Categories", href: "/blog/categories" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    submenu: [
      { title: "Get in Touch", href: "/contact/get-in-touch" },
      { title: "Support", href: "/contact/support" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subItem.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors duration-200"
                    >
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-purple-400 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-purple-200 mb-4 sm:mb-0">
            © 2024 Your Company Name. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-purple-200 hover:text-white transition-colors duration-200"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-purple-200 hover:text-white transition-colors duration-200"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-purple-200 hover:text-white transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-purple-200 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
