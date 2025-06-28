'use client';

import Link from 'next/link';

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
