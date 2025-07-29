'use client';
// src/app/checkout/page.tsx


import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { notFound } from 'next/navigation';

const formatCurrency = (val: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(val);

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [isPaying, setIsPaying] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePay = () => {
    setIsPaying(true);
    const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`;
    

if (!orderId) {
  notFound(); // esto redirige automáticamente a la página 404 personalizada
}
    setTimeout(() => {
      clearCart();
      router.push(`/checkout/exito?orderId=${orderId}`);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Resumen de tu compra</h1>

      {!cart.length ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-6 space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 py-4"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.quantity} x {formatCurrency(item.price)}
                  </p>
                </div>
                <div className="text-right font-semibold text-black">
                  {formatCurrency(item.quantity * item.price)}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mb-6 font-semibold text-lg">
            <span>Total:</span>
            <span>{formatCurrency(total)}</span>
          </div>

          <button
            onClick={handlePay}
            disabled={isPaying}
            className={`w-full py-3 rounded text-white ${
              isPaying
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-black hover:opacity-90'
            }`}
          >
            {isPaying ? 'Procesando...' : 'Pagar'}
          </button>
        </>
      )}
    </div>
  );
}
