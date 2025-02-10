"use client";

interface ServiceItemProps {
  title: string;
  description: string;
  imageSrc: string;
  keywords?: string[];
  className?: string;
}

export default function ServiceItem({
  title,
  description,
  imageSrc,
  keywords = [],
  className = "",
}: ServiceItemProps) {
  return (
    <div className={`flex flex-col mt-8 md:p-4 gap-1 md:gap-3 w-full ${className}`} >
      <div className="text-xl md:text-3xl text-white font-semibold ">
        {title}
      </div>
      <div className="text-base md:text-xl text-[#BBBBBB] md:h-16 line-clamp-2">
        {description}
      </div>
      <div
        className="h-[200] w-full rounded-lg bg-center bg-cover"
        style={{ backgroundImage: `url(${imageSrc})`}}
      />
      <div className="flex py-3 gap-1 md:gap-3 overflow-clip">
        {keywords.map((item) => (
          <div
            key={item}
            className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-base border-white border-2 rounded-full">
              {item}
          </div>
        ))}
      </div>
      <button className="w-fit bg-white text-black px-3 py-2 text-sm md:text-base rounded-lg">Know More &#8594;</button>
    </div>
  );
}
