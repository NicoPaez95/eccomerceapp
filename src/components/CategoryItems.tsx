'use client';
import CategoryDropdown from './CategoryDropdown';
import { categories } from './data/categoriesData';
import { useState, useEffect } from 'react';

export default function CategoryItems() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // abrir (hover en desktop)
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
      {categories.map((category, index) => (
        <CategoryDropdown
          key={index}
          label={category.label}
          subcategories={category.subcategories}
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
