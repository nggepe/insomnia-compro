"use client";

import Link from "next/link";
import React from "react";

export interface MenuProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isMobileMenu?: boolean;
  items: { name: string; href: string }[];
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export default function Menu({
  isMobileMenu = false,
  items,
  activeItem,
  setActiveItem,
  className = "",
}: MenuProps) {
  if (isMobileMenu) {
    return (
      <div className="fixed top-[100] right-0 w-[60%] h-full bg-[#010000] text-white shadow-lg z-20 flex flex-col items-center py-4">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-6 py-3 rounded-full mb-2 w-[90%] text-center ${
              activeItem === item.name
                ? "bg-gradient-to-r from-[#FE8A04] via-[#FFE520] to-[#6DD347] text-[#010000] font-semibold tracking-wide shadow-[0_0_8px_4px_#9DBF2485]"
                : "hover:text-gray-400 text-[#BBBBBB] tracking-wider"
            }`}
            onClick={() => {
              setActiveItem(item.name);
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className={`flex flex-col md:flex-row gap-2 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`px-6 py-3 rounded-full ${
            activeItem === item.name
              ? "bg-gradient-to-r from-[#FE8A04] via-[#FFE520] to-[#6DD347] text-[#010000] font-semibold tracking-wide shadow-[0_0_8px_4px_#9DBF2485]"
              : "hover:text-gray-400 text-[#BBBBBB] tracking-wider"
          }`}
          onClick={() => setActiveItem(item.name)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
