"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    alert("✅ Continue with Email: " + email);
   
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4  ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full 
          max-w-[420px] 
          bg-white 
          rounded-xl 
          shadow-lg 
          p-8 
          md:p-10 
          border border-gray-200
        "
      >
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-emerald-600">UrduBot</h1>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign in to your account
        </h2>

        {/* Continue with social */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <FaApple className="text-xl" />
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-sm text-gray-500">or</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-semibold rounded-lg py-2 hover:bg-emerald-700 transition"
          >
            Continue with Email
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <a href="#" className="text-emerald-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="text-center mt-4 text-sm text-gray-600">
          Don’t have an Upwork account?{" "}
          <Link href="/signup" className="text-emerald-600 hover:underline">
  Sign Up
</Link>
        </div>
      </motion.div>
    </div>
  );
}

