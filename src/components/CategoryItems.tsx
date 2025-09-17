'use client';
// src/components/CategoryItems.tsx
//this script is used to show the category items/este script se usa para mostrar las categorias
import CategoryDropdown from './CategoryDropdown';
import { category } from './data/categoriesData';
import { useState, useEffect } from 'react';

export default function CategoryItems() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  //Detect if is mobile and /Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  //open (hover in desktop) /abrir (hover en desktop)
  const openCategory = (index: number) => {
    setOpenIndex(index);
  };
  // cerrar (leave en desktop o cerrar global)
  const closeCategory = () => {
    setOpenIndex(null);
  };
  // toggle (tap en mobile)
  const toggleCategory = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="flex justify-center flex-wrap gap-4 mt-8">
      {category.map((category, index) => (
        <CategoryDropdown
          key={index}
          label={category.label}
          subcategory={category.subcategory}
          isOpen={openIndex === index}
          onOpen={() => openCategory(index)}
          onClose={() => closeCategory()}
          onToggle={() => toggleCategory(index)}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}
