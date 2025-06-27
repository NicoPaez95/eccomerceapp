// app/carrito/page.tsx
'use client';
import { useCart } from '../../hooks/useCart';
import Link from 'next/link';

export default function CarritoPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-2">
                {item.name} x{item.quantity} - ${item.price * item.quantity}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 text-red-500"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: ${total}</p>
          <button onClick={clearCart} className="mr-4 mt-4 bg-gray-200 px-3 py-1 rounded">
            Vaciar carrito
          </button>
          <Link href="/checkout">
            <span className="bg-green-500 text-white px-4 py-2 rounded">Finalizar compra</span>
          </Link>
        </div>
      )}
    </div>
  );
}