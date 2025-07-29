'use client';
// src/app/checkout/exito.tsx

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCart } from '@/hooks/useCart'; // Asegúrate que esta ruta es correcta
import Link from 'next/link';


export default function PagoExitoso() {
  const params = useSearchParams();
  const orderId = params.get('orderId');
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <div className="text-4xl text-green-600 mb-4">✔️</div>
      <h2 className="text-2xl font-bold mb-2">¡Pago exitoso!</h2>
      <p className="text-gray-600 mb-4">Gracias por tu compra.</p>
      {orderId && (
        <p className="text-sm text-gray-500 mb-6">ID de pedido: {orderId}</p>
      )}
      <Link
        href="/productos"
        className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
      >
        Volver a la tienda
      </Link>
    </div>
  );
}
