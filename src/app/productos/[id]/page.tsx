'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductResponse } from '../../../types/product';
import { productApi as fetchProductById } from '../../../services/api/productApi';
import { useCart } from '../../../hooks/useCart';

// Función para convertir Product a ProductResponse
function mapProductToResponse(product: any | null): ProductResponse | null {
  if (!product) return null;
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    createdAt: product.createdAt instanceof Date ? product.createdAt.toISOString() : product.createdAt,
    updatedAt: product.updatedAt instanceof Date ? product.updatedAt.toISOString() : product.updatedAt,
  };
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductResponse | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
  if (typeof id === 'string') {
    console.log("Buscando producto con id:", id);
    fetchProductById.getById(id).then((p) => {
      console.log("Producto encontrado:", p);
      setProduct(mapProductToResponse(p));
    });
  }
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p>{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        onClick={() => addToCart(product)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
