'use client';
// src/components/ProductCard.tsx
//this script is used to show the product card/este script se usa para mostrar la tarjeta de producto
import Image from 'next/image';
interface Props {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  colors: string[];
  onClick: () => void;
}
export default function ProductCard({ id, name, imageUrl, price, colors, onClick }: Props) {
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

  return (
    <div
      onClick={onClick}
      className="cursor-pointer transform transition-transform hover:scale-[1.02] rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-2 shadow-md hover:shadow-yellow-500/20 border border-yellow-700/30"
    >
      <div className="relative w-full h-48 bg-black rounded-lg overflow-hidden border border-yellow-600/20">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover hover:opacity-85 transition-opacity duration-300"
        />
      </div>

      <div className="mt-3 px-3 py-2 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-md border border-yellow-700/30 shadow-inner shadow-black/30">
        <h3 className="font-semibold text-yellow-100 text-sm uppercase tracking-wide">
          {name}
        </h3>
        <p className="text-yellow-400 text-base font-semibold mt-1">
          ${price.toLocaleString()}
        </p>

        <div className="flex gap-2 mt-3">
          {colors.map((color) => (
            <span
              key={color}
              className="w-7 h-7 rounded-full border-2 border-white"
              style={{ backgroundColor: colorMap[color] || "#000" }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
