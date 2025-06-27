// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-100 text-center text-sm text-gray-600 mt-10">
      © {new Date().getFullYear()} TuEmpresa. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
