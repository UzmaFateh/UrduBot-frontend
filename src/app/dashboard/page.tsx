

"use client"; // ✅ ensures client-side hooks work

import { useSearchParams } from "next/navigation";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import { shows } from "./data/shows";
import Carousel from "@/components/Carousel";
import CarouselRect from "@/components/CarouselRect";

export default function DashboardPage() {
  const searchParams = useSearchParams(); // ✅ client-side hook
  const name = searchParams.get("name") || "Alex";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navbar */}
      <header className="w-full bg-gray-950 text-cyan-600 shadow-md px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        {/* Logo */}
        <div className="text-2xl font-bold  cursor-pointer text-cyan-600">MyLogo</div>

        {/* Hamburger menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`flex flex-col md:flex-row gap-4 md:gap-8 md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link href="/dashboard" className="hover:text-emerald-600 transition">Dashboard</Link>
          <Link href="/profile" className="hover:text-emerald-600 transition">My Profile</Link>
          <Link href="/resume" className="hover:text-emerald-600 transition">Generated Resume</Link>
          <Link href="/jobs" className="hover:text-emerald-600 transition">Job Feeds</Link>
          <button className="hover:text-red-600 text-red-500 transition">Logout</button>
        </nav>

        {/* Search Button */}
        <button className="hidden md:block p-2 bg-emerald-100 hover:bg-emerald-200 rounded-full transition">
          <FiSearch className="text-emerald-600 text-xl" />
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full h-auto flex flex-col justify-center items-center text-center bg-cover bg-center py-8 sm:py-12 md:py-14 lg:py-16 rounded-xl overflow-hidden"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 rounded-xl"></div>

        {/* Text */}
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Welcome Back, <span className="text-emerald-400">{name}</span>!
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-200 mb-6 max-w-xl mx-auto">
            Ready to land your dream job? AI-powered career advancement awaits.
          </p>
        </div>
      </section>

      {/* Small Cards Carousel */}
      <section className="px-4 md:px-6 mt-8 ">
        <h2 className="text-lg md:text-2xl font-bold text-cyan-600">Your Co-Pilot Status</h2>
        <Carousel shows={shows} />
      </section>

      {/* Rectangular Cards Carousel */}
      <section className="px-4 md:px-6 mt-8">
        <h2 className="text-lg md:text-2xl font-bold text-cyan-600">Recently Viewed Jobs</h2>
        <CarouselRect shows={shows} />
      </section>
    </div>
  );
}

