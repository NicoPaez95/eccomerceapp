'use client';
// src/components/linkButton.tsx
import Link from 'next/link';
//this script is used to show the link button/este script se usa para mostrar el botón de enlace
interface LinkButtonProps {
  href: string;
  label: string;
    className?: string; // <- agregamos esta línea
}

export default function LinkButton({ href, label }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md text-lg font-semibold"
    >
      {label}
    </Link>
  );
}
