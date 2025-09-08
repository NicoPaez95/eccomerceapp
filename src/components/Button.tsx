// src/components/ui/Button.tsx
import React from "react";
import { ButtonProps } from "@/types/components";
//this script is used to show the button/este script se usa para mostrar el botón


const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  const base = "px-4 py-2 rounded font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 text-black hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-600 shadow-md hover:shadow-lg",
    secondary: "bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-600",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};


export default Button;
