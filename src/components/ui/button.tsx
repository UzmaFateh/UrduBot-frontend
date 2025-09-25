
"use client"; // ✅ ensures client-side interactions work (onClick etc.)

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`transition-all font-medium rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

