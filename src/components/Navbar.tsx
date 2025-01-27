"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState('Home');

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Testimonials', href: '/' },
  ];

  return (
    <nav className="bg-[#010000] text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="text-white">
          <Image src={"/logo-transparent.png"} alt="Insomnia Creative & Digital Agency" width={200} height={0} />
        </Link>
      </div>


      {/* Menu Items */}
      <div className="hidden md:flex items-center space-x-6 bg-[#EAEAEA] bg-opacity-10 px-4 py-2 rounded-full">
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

      {/* Contact Us Button */} 
      <Link
        href="/contact"
        className="px-6 py-3 rounded-[8] bg-gradient-to-r from-[#FE8A04] via-[#FFE520] to-[#6DD347] text-[#010000] font-semibold shadow-[0_0_8px_4px_#9DBF2485] tracking-wide"
      >
        Contact Us
      </Link>
    </nav>
  );
}