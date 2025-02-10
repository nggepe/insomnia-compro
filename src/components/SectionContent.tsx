"use client";

import React, { ReactNode } from "react";
import SectionTitle from "./SectionTitle";
import CTAButton from "./CTAButton";

interface SectionContentProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export default function SectionContent({
  children,
  title,
  className = ""
}: SectionContentProps) {
  return (
   <div className={`flex flex-col gap-8 px-8 py-3 ${className}`}>
      <SectionTitle title={title}/>
      <hr className="w-full"></hr>
      <div className="relative flex flex-row gap-12 pb-14 md:pb-0">
        <div className="w-full md:w-[70%] text-base/relaxed md:text-xl/relaxed tracking-wide text-[#BBBBBB]">
          {children}
        </div>
        <CTAButton className="absolute bottom-0 md:top-0 right-0 text-black text-sm md:text-base h-fit">
          Know more &#8594;
        </CTAButton>
      </div>
    </div>
  );
}
