'use client';
// src/app/checkout/exito.tsx
//this script is used to show the success page/este script se usa para mostrar la pagina de exito
'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

// Componente principal que usa useSearchParams
function PagoExitosoContent() {
  const params = useSearchParams();
  const orderId = params.get('orderId');
  const { clearCart } = useCart();

  // Movemos la lógica de clearCart a un useEffect
  useEffect(() => {
    // Verificamos si estamos en el cliente
    if (typeof window !== 'undefined') {
      const cartCleared = sessionStorage.getItem('cartCleared');
      if (!cartCleared) {
        clearCart();
        sessionStorage.setItem('cartCleared', 'true');
        
        // Opcional: limpiar el flag después de un tiempo
        setTimeout(() => {
          sessionStorage.removeItem('cartCleared');
        }, 5000);
      }
    }
  }, [clearCart]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <div className="text-4xl text-green-600 mb-4">✔️</div>
      <h2 className="text-2xl font-bold mb-2">¡Pago exitoso!</h2>
      <p className="text-gray-600 mb-4">Gracias por tu compra.</p>
      {orderId && (
        <p className="text-sm text-gray-500 mb-6">ID de pedido: {orderId}</p>
      )}
      <Link
        href="/"
        className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
      >
        Volver a la tienda
      </Link>
    </div>
  );
}

// Componente principal que envuelve en Suspense
export default function PagoExitoso() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mb-4"></div>
        <p className="text-gray-600">Cargando...</p>
      </div>
    }>
      <PagoExitosoContent />
    </Suspense>
  );
}