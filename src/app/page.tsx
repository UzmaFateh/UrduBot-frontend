
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-800 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white relative z-20">
        <h1 className="text-2xl font-bold ">MyWebsite</h1>
        <Button
          onClick={() => (window.location.href = "/signin")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          LogIn
        </Button>
      </nav>

      {/* Hero Section with Background Video */}
      <main className="relative flex flex-col items-center justify-center flex-1 text-center overflow-hidden">
        {/* 🎥 Background Video from public folder */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🌫️ Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* ✨ Animated Hero Content */}
        <div className="relative z-20 px-6 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
          >
            Welcome to MyWebsite (UrduBot)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-8"
          >
            Build modern web apps with Next.js, Tailwind CSS, and TypeScript — fast, responsive, and easy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Button onClick={() => (window.location.href = "/signin")}
            className="bg-blue-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-700">
              Get Started
            </Button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="text-center py-6 text-gray-400 text-sm border-t bg-black">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </footer> */}
    </div>
  );
}
