// src/components/ProductGrid.tsx
//this script is used to show the product grid/este script se usa para mostrar la grilla de productos
import ProductCard from './ProductCard';
import { ProductGridProps } from '@/types/components';


// En ProductGrid.tsx
export default function ProductGrid({ products, onProductClick, category, subcategory }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 px-4 py-6">
      {products.map((product) => (
        <div
          key={product.id}
          className=" border border-gray-700 rounded-xl shadow-lg shadow-yellow-900/20 hover:shadow-yellow-500/30 transition-shadow duration-300 h-full flex flex-col"
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