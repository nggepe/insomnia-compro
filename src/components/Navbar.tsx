"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [active, setActive] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Testimonials', href: '/' },
  ];

  return (
    <nav className="bg-[#010000] text-white px-6 py-4 flex justify-between items-center h-[100]">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-white">
          <Image src={"/logo-transparent.png"} alt="Insomnia Creative & Digital Agency" width={200} height={0} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-center gap-2 bg-[#EAEAEA] bg-opacity-10 px-[10] py-[10] rounded-full h-[60]">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-6 py-3 rounded-full ${
              active === item.name
                ? 'bg-gradient-to-r from-[#FE8A04] via-[#FFE520] to-[#6DD347] text-[#010000] font-semibold tracking-wide shadow-[0_0_8px_4px_#9DBF2485]'
                : 'hover:text-gray-400 text-[#BBBBBB] tracking-wider'
            }`}
            onClick={() => setActive(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-5">
        {/* Contact Us Button */} 
        <Link
          href="/contact"
          className="px-4 py-[10] rounded-[8] bg-gradient-to-r from-[#FE8A04] via-[#FFE520] to-[#6DD347] text-[#010000] font-semibold shadow-[0_0_8px_4px_#9DBF2485] tracking-wide whitespace-nowrap"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-[100] right-0 w-[60%] h-full bg-[#010000] text-white shadow-lg z-20 flex flex-col items-center py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-6 py-3 rounded-full mb-2 w-[90%] text-center ${
                  active === item.name
                    ? "bg-gradient-to-r from-[#FE8A04] via-[#FFE520] to-[#6DD347] text-[#010000] font-semibold tracking-wide shadow-[0_0_8px_4px_#9DBF2485]"
                    : "hover:text-gray-400 text-[#BBBBBB] tracking-wider"
                }`}
                onClick={() => {
                  setActive(item.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}