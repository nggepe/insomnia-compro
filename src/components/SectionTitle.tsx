"use client";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({
  title,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`text-2xl md:text-4xl font-semibold tracking-wide text-white ${className}`}
    >
      {title}
    </div>
  );
}
