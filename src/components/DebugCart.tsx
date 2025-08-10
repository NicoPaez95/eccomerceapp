'use client';
// src/components/DebugCart.tsx
import { useCart } from "@/hooks/useCart";
//this script is used to show the cart/este script se usa para mostrar el carrito
export default function DebugCart() {
  const { cart } = useCart();

  return (
    <div className="mt-4 p-4 border rounded bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Contenido del carrito</h2>
      <pre className="text-sm bg-black p-2 rounded overflow-x-auto">
        {JSON.stringify(cart, null, 2)}
      </pre>
    </div>
  );
}


