// src/components/ProductGrid.tsx
// this script is used to show the product grid/este script se usa para mostrar la grilla de productos
import ProductCard from './ProductCard';
import { ProductGridProps } from '@/types/components';

export default function ProductGrid({ products, onProductClick, category, subcategory }: ProductGridProps) {
  //If no products match the filters, display an empty state message/Si no hay productos que coincidan con los filtros, mostramos un mensaje de "Estado Vacío"
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 bg-neutral-900/60 border border-yellow-900/30 rounded-2xl text-center my-6 shadow-md shadow-yellow-900/10">
        <svg
          className="w-12 h-12 text-yellow-600/70 mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-yellow-200 mb-1">
          No encontramos productos en este rango
        </h3>
        <p className="text-neutral-400 text-sm max-w-sm">
          Prueba ajustando los precios o explorando otras opciones.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 px-4 py-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-700 rounded-xl shadow-lg shadow-yellow-900/20 hover:shadow-yellow-500/30 transition-shadow duration-300 h-full flex flex-col"
        >
          <ProductCard
            id={product.id}
            name={product.name}
            imageUrl={product.imagecolor1}
            price={product.price}
            colors={product.colors}
            onClick={() => onProductClick(product.id)}
            category={category}
            subcategory={subcategory}
          />
        </div>
      ))}
    </div>
  );
}