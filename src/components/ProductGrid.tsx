// src/components/ProductGrid.tsx
//this script is used to show the product grid/este script se usa para mostrar la grilla de productos
import ProductCard from './ProductCard';
import { ProductGridProps } from '@/types/components';


export default function ProductGrid({ products, onProductClick, category, subcategory }: ProductGridProps) {
  // Depuración: verificar las props recibidas
  console.log('ProductGrid props:', { category, subcategory, productsCount: products.length });
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 px-4 py-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] border border-gray-700 rounded-xl shadow-lg shadow-yellow-900/20 hover:shadow-yellow-500/30 transition-shadow duration-300"
        >
          <ProductCard
            id={product.id}
            name={product.name}
            imageUrl={product.imagecolor1}
            price={product.price}
            colors={product.colors}
            onClick={() => onProductClick(product.id)}
            category={category}  // ← Pasar la categoría
            subcategory={subcategory}  // ← Pasar la subcategoría
          />
        </div>
      ))}
    </div>
  );
}