"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password
    ) {
      alert("❌ Please fill in all fields.");
      return;
    }

    if (!form.email.includes("@")) {
      alert("❌ Please enter a valid email.");
      return;
    }

    alert("✅ Account created successfully!");
    router.push("/signin");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full 
          max-w-[450px] 
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
          Create your account
        </h2>

        {/* Social Login */}
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

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-semibold rounded-lg py-2 hover:bg-emerald-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-emerald-600 font-medium hover:underline">
            Sign in
          </a>
        </div>
      </motion.div>
    </div>
  );
}
