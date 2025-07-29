'use client';
// src/components/CategoryItems.tsx
import CategoryDropdown from './CategoryDropdown';
import { categories } from './data/categoriesData';

export default function CategoryItems() {
  return (
    //buttons for categories
    <div className="flex justify-center flex-wrap gap-4 mt-8 animate-fadeIn delay-300">
      {categories.map((category, index) => (
        <CategoryDropdown
          key={index}
          label={category.label}
          subcategories={category.subcategories}
        />
      ))}
    </div>
  );
}
