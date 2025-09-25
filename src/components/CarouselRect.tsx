"use client";

import { Show } from "../app/dashboard/data/types";
import ShowCardRect from "../components/ShowCardRect";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CarouselRectProps {
  shows: Show[];
}

export default function CarouselRect({ shows }: CarouselRectProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.offsetWidth * 0.8;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto overflow-visible no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-2 relative"
      >
        {shows.map((show) => (
          <div key={show.id} className="snap-start">
            <ShowCardRect show={show} />
          </div>
        ))}
      </div>

      {/* Left / Right Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-50"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-50"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
}
