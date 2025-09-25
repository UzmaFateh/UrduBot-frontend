"use client";

import { Show } from "../app/dashboard/data/types";
import ShowCard from "./ShowCard";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CarouselProps {
  shows: Show[];
}

export default function Carousel({ shows }: CarouselProps) {
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
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-2"
      >
        {shows.map((show) => (
          <div key={show.id} className="snap-start">
            <ShowCard show={show} />
          </div>
        ))}
      </div>

      {/* Left / Right Buttons - always visible but slightly transparent */}
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


