"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle/page";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/my-logo.png"
            alt="Antenhe Logo"
            width={100}
            height={100}
            className="rounded-md"
          />
          <span className="text-lg font-bold text-[#0B1DE6]">Antenhe</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium hover:text-[#0B1DE6] transition duration-300 ${
                  isActive ? "text-[#0B1DE6] underline underline-offset-4" : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {label}
              </Link>
            );
          })}
          
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-[#0B1DE6] text-white text-sm rounded-md hover:bg-blue-700 transition"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#0B1DE6]">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium ${
                  isActive ? "text-[#0B1DE6] underline underline-offset-4" : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            download
            className="inline-block px-4 py-2 bg-[#0B1DE6] text-white text-sm rounded-md hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
