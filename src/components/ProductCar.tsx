// src/components/ProductCard.tsx
import Link from "next/link";
import { ProductResponse } from "../types/product";
import {formatPrice} from "../lib/formatPrice";

interface ProductCardProps {
  product: ProductResponse;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/productos/${product.id}`}
      className="border p-4 rounded shadow hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">{formatPrice(product.price)}</p>
    </Link>
  );
};

export default ProductCard;
