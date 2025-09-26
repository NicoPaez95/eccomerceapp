'use client';
// src/app/productos/[categoria]/[subcategoria]/page.tsx
//this script is used to show the subcategory page/este script se usa para mostrar la pagina de subcategoria
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockVisualProducts } from '@/adapters/mocks/mockVisualProducts';
import Filters from '@/components/Filters';
import ProductGrid from '@/components/ProductGrid';
import { VisualProduct } from '@/types/VisualProduct';
import BackButton from '@/components/BackButton';
import Image from 'next/image';

export default function SubcategoryPage() {
  const params = useParams();
  const categoria = Array.isArray(params.categoria) ? params.categoria[0] : params.categoria;
  const subcategoria = Array.isArray(params.subcategoria) ? params.subcategoria[0] : params.subcategoria;
  const router = useRouter();
  const [products, setProducts] = useState<VisualProduct[]>([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

  // Depuración: verificar los parámetros de la URL
  console.log('Params from URL:', { categoria, subcategoria });

  useEffect(() => {
    let filtered = mockVisualProducts.filter((p) => p.subcategory === subcategoria);

    if (priceRange.min) {
      filtered = filtered.filter((p) => p.price >= parseFloat(priceRange.min));
    }
    if (priceRange.max) {
      filtered = filtered.filter((p) => p.price <= parseFloat(priceRange.max));
    }
    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setProducts(filtered);
  }, [subcategoria, priceRange, sortOrder]);

  const handleProductClick = (id: string) => {
    router.push(`/productos/${categoria}/${subcategoria}/${id}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Botón volver: esquina superior izquierda */}
      <div className="fixed top-4 right-4 z-50"></div>
      <div className="fixed top-4 left-4 z-50">
        <BackButton fallbackUrl={`/productos/${categoria}`} />
      </div>

      {/* Botón Carrito: esquina superior derecha */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => router.push('/carrito')}
          className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] transition-colors duration-200 shadow-md"
          aria-label="Ir al carrito"
        >
          <Image
            src='/shop/resources/icons/cart.svg'
            alt="Carrito"
            width={48}
            height={48}
            style={{ width: '48px', height: '48px' }}
          />
        </button>
      </div>

      {/* Contenedor principal con margen superior para evitar solapamiento */}
      <div className="p-6 max-w-6xl mx-auto mt-24">
        <div className="flex justify-between items-center mb-6 px-2">
          <h2 className="text-xl font-bold capitalize text-white">
            {subcategoria} más relevantes
          </h2>
        </div>

        <Filters
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          setSortOrder={setSortOrder}
        />

        {/* Pasar category y subcategory al ProductGrid */}
        <ProductGrid 
          products={products} 
          onProductClick={handleProductClick}
          category={categoria ?? ''}  // ← Agregar esta prop
          subcategory={subcategoria ?? ''}  // ← Agregar esta prop
        />
      </div>
    </div>
  );
}