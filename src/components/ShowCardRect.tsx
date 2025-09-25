
"use client"; // ✅ ensures client-side hover and interactions work

import Image from "next/image";
import { Show } from "../app/dashboard/data/types";

interface ShowCardRectProps {
  show: Show;
}

export default function ShowCardRect({ show }: ShowCardRectProps) {
  return (
    <div className="relative flex-shrink-0 w-48 md:w-52 lg:w-60 cursor-pointer transform transition-transform duration-300 hover:scale-125 hover:z-30 origin-bottom py-4 sm:py-6 md:py-8 lg:py-12">
      
      {/* Image */}
      <div className="relative w-full h-36 md:h-40 lg:h-44 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={show.thumbnail}
          alt={show.title}
          fill
          className="object-cover rounded-lg"
          priority={true} // ✅ optional, faster first load
        />

        {/* Hover overlay title (Full card) */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-semibold text-sm md:text-base text-center px-2">
            {show.title} <br />
            {show.thumbnail} <br />
            {show.rating}
          </h3>
        </div>
      </div>
    </div>
  );
}
