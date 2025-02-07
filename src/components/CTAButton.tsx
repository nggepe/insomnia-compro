"use client";

import React from "react";

export default function CTAButton({ children, className = "", ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-3 rounded-lg font-semibold tracking-wide bg-gradient-to-r from-[#FE8A04] via-[#FFE520] to-[#6DD347] text-[#010000] shadow-[0_0_8px_4px_#9DBF2485] whitespace-nowrap ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

