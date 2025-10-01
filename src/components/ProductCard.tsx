'use client';
// src/components/ProductCard.tsx
import Image from 'next/image';
import { ProductProps } from '@/types/components';
import { productImageStyles } from '@/config/productStyles';

export default function ProductCard({
  name,
  imageUrl,
  price,
  colors,
  onClick,
  category,
  subcategory
}: ProductProps & { category: string; subcategory?: string }) {
  const colorMap: Record<string, string> = {
    blanco: "#ffffff",
    negro: "#000000",
    rojo: "#ff0000",
    azul: "#0000ff",
    beige: "#f5f5dc",
    rosa: "#ffc0cb",
    gris: "#808080",
    verde: "#008000",
    grisclaro: "#d3d3d3",
    verdeoscuro: "#006400",
    azulmarino: "#000080",
    verdeoliva: "#808000",
    grisoscuro: "#505050",
    rojoclaro: "#ff6666",
    verdemilitar: "#4b5320",
    azulclaro: "#add8e6",
    azuloscuro: "#00008b",
    azullima: "#c4e538",
    arena: "#f0e68c",
    marron: "#8b4513",
    azulpetroleo: "#004b49",
    celeste: "#87ceeb",
    grisperla: "#c0c0c0"
  };

  // Validar y normalizar categoría y subcategoría
  const normalizedCategory = category ? category.toLowerCase() : 'default';
  
  let normalizedSubcategory = 'default';
  if (subcategory) {
    // Convertir la primera letra a mayúscula y el resto a minúscula
    normalizedSubcategory = subcategory.charAt(0).toUpperCase() + 
                           subcategory.slice(1).toLowerCase();
  }

  // Obtener el estilo de imagen con validaciones
  let imageClass = productImageStyles.default.default;
  
  if (productImageStyles[normalizedCategory]) {
    if (productImageStyles[normalizedCategory][normalizedSubcategory]) {
      imageClass = productImageStyles[normalizedCategory][normalizedSubcategory];
    } else if (productImageStyles[normalizedCategory].default) {
      imageClass = productImageStyles[normalizedCategory].default;
    }
  }

  return (
    <div
      onClick={onClick}
      className="cursor-pointer transform transition-transform hover:scale-[1.02] rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-2 shadow-md hover:shadow-yellow-500/20 border border-yellow-700/30 h-full flex flex-col" // ← h-full flex flex-col aquí también
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-yellow-600/20 flex-shrink-0">
        <Image
          src={`/shop${imageUrl}`}
          alt={name}
          fill
          className={`${imageClass}`}
        />
      </div>

      <div className="mt-3 px-3 py-2 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-md border border-yellow-700/30 shadow-inner shadow-black/30 flex-1 flex flex-col">
        <h3 className="font-semibold text-yellow-100 text-sm uppercase tracking-wide line-clamp-2 min-h-[3rem] flex items-center">
          {name}
        </h3>
        <p className="text-yellow-400 text-base font-semibold mt-1">
          ${price.toLocaleString()}
        </p>

        <div className="flex gap-2 mt-auto pt-3">
          {colors.map((color) => (
            <span
              key={color}
              className="w-7 h-7 rounded-full border-2 border-white flex-shrink-0"
              style={{ backgroundColor: colorMap[color] || "#000" }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}