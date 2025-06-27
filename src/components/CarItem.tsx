// src/components/CartItem.tsx
import React from "react";
import { ProductResponse } from "../types/product";
import { useCart } from "../hooks/useCart";
import {formatPrice} from "../lib/formatPrice";

interface CartItemProps {
  product: ProductResponse;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h4 className="font-bold">{product.name}</h4>
        <p>{formatPrice(product.price)}</p>
        <p className="text-sm text-gray-600">Cantidad: {quantity}</p>
      </div>
      <button
        onClick={() => removeFromCart(product.id)}
        className="text-red-500 hover:underline"
      >
        Quitar
      </button>
    </div>
  );
};

export default CartItem;
