'use client';

import Link from 'next/link';
import Image from 'next/image';

interface SubCategory {
  name: string;
  href: string;
  imageSrc: string;
}

interface CategoryDropdownProps {
  label: string;
  subcategories: SubCategory[];
}

export default function CategoryDropdown({ label, subcategories }: CategoryDropdownProps) {
  return (
    <div className="relative group">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold shadow-md transition duration-300">
        {label}
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 mt-4 hidden group-hover:flex gap-6 p-6 bg-white rounded-xl shadow-xl z-20">
        {subcategories.map((sub) => (
          <Link key={sub.name} href={sub.href} className="text-center group/item transition">
            <div className="w-28 h-28 relative mb-2 rounded-full overflow-hidden shadow-md group-hover/item:shadow-2xl transform group-hover/item:scale-105 transition-transform duration-300">
              <Image
                src={sub.imageSrc}
                alt={sub.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors">
              {sub.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
