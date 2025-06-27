'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { productApi } from '../../services/api/productApi';
import { ProductResponse } from '../../types/product';

// Función para convertir Product a ProductResponse
function mapProductToResponse(product: any): ProductResponse {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    createdAt:
      product.createdAt instanceof Date
        ? product.createdAt.toISOString()
        : product.createdAt,
    updatedAt:
      product.updatedAt instanceof Date
        ? product.updatedAt.toISOString()
        : product.updatedAt,
  };
}

export default function ProductsListPage() {
  const [products, setProducts] = useState<ProductResponse[]>([]);

  useEffect(() => {
    productApi.getAll().then((data) => {
      const mappedProducts = data.map(mapProductToResponse);
      setProducts(mappedProducts);
    });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold mt-2">${product.price}</p>
            <Link
              href={`/productos/${product.id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Ver detalles
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
