"use client";

import React, { ReactNode } from "react";

interface SideTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SideTitle({
  children,
  className = "",
}: SideTitleProps) {
  return (
    <div
      className={`px-4 py-3 font-semibold bg-gradient-to-r from-[#FE8A04] via-[#FFE520] to-[#6DD347] text-[#010000] -rotate-90 text-sm md:text-lg ${className}`}
    >
      {children}
    </div>
  );
}
