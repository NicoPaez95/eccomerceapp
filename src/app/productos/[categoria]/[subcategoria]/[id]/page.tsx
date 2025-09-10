'use client';
// src/app/productos/[categoria]/[subcategoria]/[id]/page.tsx
//this script is used to show the product detail page/este script se usa para mostrar la pagina de detalle del producto

import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

import { mockVisualProducts } from '@/adapters/mocks/mockVisualProducts';

import { useState, useEffect } from "react";
import { useRouter, useParams } from 'next/navigation';
import Image from "next/image";
import BackButton from "@/components/BackButton";



export default function ProductDetailPage() {
  const router = useRouter();
  const { categoria, subcategoria, id } = useParams() as {
    categoria: string;
    subcategoria: string;
    id: string;
  };

  const [product, setProduct] = useState<typeof mockVisualProducts[0] | null>(
    null
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // 👇 Moverlo aquí arriba, antes de cualquier return condicional
  const { addToCart } = useCart();

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
    grisperla: "#c0c0c0",
  };

  useEffect(() => {
    const found = mockVisualProducts.find(
      (p) =>
        p.id === String(id) &&
        p.category.toLowerCase() === categoria.toLowerCase() &&
        p.subcategory.toLowerCase() === subcategoria.toLowerCase()
    );
    setProduct(found ?? null);
    if (found?.colors?.[0]) setSelectedColor(found.colors[0]);
  }, [id, categoria, subcategoria]);

  if (!product)
    return <p className="p-6 text-white">Producto no encontrado.</p>;

  const selectedColorIndex = product.colors.indexOf(selectedColor || "");
  const imageKeys = ["imagecolor1", "imagecolor2"];
  const selectedImage =
    (product[imageKeys[selectedColorIndex] as keyof typeof product] as
      | string
      | undefined) ||
    product.imagecolor1 ||
    "/productos/img/remeras/chombas/catchombas.png";

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Botón de volver */}
      <BackButton fallbackUrl={`/productos/${categoria}/${subcategoria}`} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/* Imagen */}
        <div className="relative w-full h-[600px] bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Info */}
        <div className="text-white">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-300 mb-4">{product.description}</p>

          <div className="mb-4">
            <span className="text-yellow-400 text-xl font-semibold">
              ${product.price}
            </span>
            <span className="text-sm text-gray-400 ml-4">
              Stock: {product.stock}
            </span>
          </div>

          {/* Colores */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Colores disponibles:</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-7 h-7 rounded-full border-2 transition ${
                    selectedColor === color
                      ? "border-yellow-400 scale-110"
                      : "border-white"
                  }`}
                  style={{ backgroundColor: colorMap[color] || "#000" }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Botón agregar */}
          <button
            onClick={() => {
              addToCart({
                ...product,
                image: selectedImage,
                quantity: 1,
              });
              toast.success("Producto agregado al carrito");
            }}
            className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition"
          >
            Agregar al carrito
          </button>

          {/* Botón ir al carrito */}
          <button
            onClick={() => router.push("/carrito")}
            className="ml-4 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Ir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
