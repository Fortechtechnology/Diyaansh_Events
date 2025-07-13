"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  activeSection?: string;
}

export function Navigation({ activeSection = "" }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.substring(2); // Remove "/#"
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (item: { name: string; href: string }) => {
    if (pathname === "/gallery" && item.name === "Gallery") return true;
    if (pathname === "/" && item.name === "Home" && !activeSection) return true;
    if (pathname === "/" && activeSection === item.name.toLowerCase())
      return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-red-900/30 shadow-2xl shadow-red-900/10"
          : "bg-black/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-14 h-14 flex items-center justify-center">
              <img
                src="/images/img/images/logo2.png" // adjust path if needed
                alt="Diyaansh Event Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent">
              Diyaansh Event
            </span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group text-sm ${
                  isActive(item)
                    ? "text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/30"
                    : "text-gray-300 hover:text-white hover:bg-red-900/20"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="relative z-10 flex items-center">
                  {item.name}
                  {isActive(item) && (
                    <div className="ml-2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="ml-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/30 rounded-lg text-sm flex items-center"
            >
              Book Now
              <ArrowRight className="ml-1 w-3 h-3" />
            </Link>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-8 text-white hover:text-red-500 transition-all duration-300 p-1 rounded-lg hover:bg-red-900/20 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative flex items-center justify-center">
              <div
                className={`transition-all duration-300 ${
                  isMenuOpen ? "rotate-180 scale-0" : "rotate-0 scale-100"
                }`}
              >
                <Menu className="w-6 h-6" />
              </div>
              <div
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 scale-100" : "rotate-180 scale-0"
                }`}
              >
                <X className="w-6 h-6" />
              </div>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4 pb-4 border-t border-red-900/30">
            <div className="flex flex-col space-y-1 mt-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative transition-all duration-300 py-2 px-4 rounded-lg font-medium text-sm ${
                    isActive(item)
                      ? "text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/20"
                      : "text-white hover:text-red-400 hover:bg-red-900/20"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </span>
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 mt-3 border-t border-red-900/30">
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/30 rounded-lg text-sm">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
