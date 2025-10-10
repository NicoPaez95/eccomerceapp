'use client';
// src/app/carrito/page.tsx
//this script is used to show the cart/este script se usa para mostrar el carrito
import { useCart } from '../../hooks/useCart';
import Link from 'next/link';
import Image from 'next/image';
import BackButton from '@/components/BackButton';

export default function CarritoPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="relative p-4 sm:p-6 max-w-3xl mx-auto">
      <BackButton fallbackUrl="/productos" />
      <h1 className="text-2xl font-bold mb-6 text-center">Tu Carrito</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-6">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 border-b pb-4"
              >
                {item.image&& (
                  <Image
                    src={item.image} // Asegúrate que item.image sea '/productos/...'
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantity} x ${item.price} = ${item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right font-bold text-lg">
            Total: ${total.toFixed(2)}
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button
              onClick={clearCart}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm text-gray-800 w-full sm:w-auto"
            >
              Vaciar carrito
            </button>

            <Link href="/checkout" passHref>
              <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto">
                Finalizar compra
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
