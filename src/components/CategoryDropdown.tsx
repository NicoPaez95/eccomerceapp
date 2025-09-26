'use client';
// src/components/CategoryDropdown.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { CategoryDropdownProps } from '@/types/components';
export default function CategoryDropdown({
  label,
  subcategory,
  isOpen,
  onOpen,
  onClose,
  onToggle,
  isMobile,
}: CategoryDropdownProps) {
  // Guardamos el timeout en un ref para poder limpiarlo
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onOpen();
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 200); // 👈 200ms de tolerancia (puedes ajustar este valor)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
    >
      {/* Botón de categoría */}
      <button
        onClick={isMobile ? onToggle : undefined}
        className="px-4 py-2 button-primary transition duration-200"
      >
        {label}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={`
            absolute top-full left-0 mt-2
            border border-yellow-800 shadow-md shadow-yellow-700/50 
            bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#d4af37]/20
            text-gray-100 p-4 md:p-6 rounded-lg z-50
            flex flex-col gap-2
            w-[45vw] md:w-64
            max-h-[70vh] md:max-h-none
            overflow-y-auto md:overflow-visible
            transition duration-300 backdrop-blur-sm
            ${label === 'zapatillas' ? '-translate-x-20' : ''}
          `}
        >
          {subcategory.map((subcategory, index) => (
            <Link
              key={index}
              href={subcategory.href}
              className="flex items-center gap-3 hover:text-yellow-300 p-2 rounded transition"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <Image
                  src={`/shop${subcategory.imageSrc}`} // prepend '/shop' por el basePath
                  alt={subcategory.name}
                  fill
                  className="object-cover rounded border border-yellow-800/40 shadow-sm"
                />
              </div>
              <span className="text-sm md:text-base font-medium">
                {subcategory.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
