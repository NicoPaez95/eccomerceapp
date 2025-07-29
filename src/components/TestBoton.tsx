'use client';

import { useCart } from "@/hooks/useCart";
import { ProductResponse } from "@/types/product";

const DummyProduct: ProductResponse = {
  id: "test-123",
  name: "Producto Test",
  description: "Descripción",
  price: 99,
  stock: 10,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export default function TestBoton() {
  const { addToCart } = useCart();

  return (
    <div>
<button
  onClick={() => {
    console.log("Botón test clickeado");
    addToCart(DummyProduct);
  }}
  style={{
    background: 'green',
    color: 'white',
    padding: 10,
    zIndex: 999999,
    position: 'relative',
    pointerEvents: 'auto'
  }}
>
  Botón Test
</button>

    </div>
  );
}
