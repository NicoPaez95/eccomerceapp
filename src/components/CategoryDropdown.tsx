'use client';
//src/components/categoryDropdown.tsx

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Subcategory {
  name: string;
  href: string;
  imageSrc: string;
}

interface Props {
  label: string;
  subcategories: Subcategory[];
}

export default function CategoryDropdown({ label, subcategories }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="relative h-15">
        <div className="inline-block">
          <button className="px-4 py-2 button-primary transition duration-200">
            {label}
          </button>
        </div>
        {isOpen && (
          //products box container by category
          <div className=" border border-yellow-800 shadow-md shadow-yellow-700/50 absolute top-full left-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#d4af37]/20 text-gray-100 p-6 rounded-lg z-50 flex flex-col gap-2 w-64 transition duration-300 backdrop-blur-sm">

            {subcategories.map((subcategory, index) => (
              <Link
                key={index}
                href={subcategory.href}
                className="flex items-center font-extrabold gap-3 hover:text-yellow-300 p-2 rounded transition"
              >
                {/* Imagen proporcional, más ancha, sin achicar el contenedor */}
                <div className="relative w-20 h-20 ">
                  <Image
                    src={subcategory.imageSrc}
                    alt={subcategory.name}
                    fill
                    className="object-cover rounded border border-yellow-800/40 shadow-sm"
                  />
                </div>

                <span className="text-sm font-medium">{subcategory.name}</span>
              </Link>

            ))}
          </div>
        )}

      </div>
    </div>
  );
}
