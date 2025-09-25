
"use client"; // ✅ ensures client-side interactions (hover overlay) work

import Image from "next/image";
import { Show } from "../app/dashboard/data/types";

interface ShowCardProps {
  show: Show;
}

export default function ShowCard({ show }: ShowCardProps) {
  return (
    <div className="relative flex-shrink-0 w-36 md:w-40 lg:w-44 cursor-pointer transform transition-transform duration-300 hover:scale-125 hover:z-30 py-4 sm:py-6 md:py-8 lg:py-12">
      
      {/* Image */}
      <div className="relative w-full h-48 md:h-52 lg:h-56 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={show.thumbnail}
          alt={show.title}
          fill
          className="object-cover rounded-lg"
          priority={true} // ✅ optional, ensures faster loading on deployment
        />

        {/* Full card hover overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-semibold text-xs md:text-sm text-center px-2">
            {show.title} <br />
            {show.thumbnail} <br />
            {show.rating}
          </h3>
        </div>
      </div>
    </div>
  );
}





