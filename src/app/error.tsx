'use client';
// src/app/error.tsx
// this script is used to show the 500 server error page / este script se usa para mostrar la página de error del servidor
import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Registramos el error en la consola o en un servicio de monitoreo
    console.error('Error capturado por error.tsx:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="max-w-md w-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border border-yellow-900/30 shadow-2xl shadow-yellow-900/10 text-center">
        {/* Código o icono visual del error */}
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-600 mb-2">
          500
        </h1>

        <h2 className="text-xl font-bold text-white mb-3">
          ¡Ups! Algo salió mal
        </h2>

        <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
          Ocurrió un error imprevisto en el servidor. Puedes intentar recargar el componente o volver a la tienda.
        </p>

        {/* Acciones principales */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold rounded-xl shadow-md transition-all duration-200 text-sm cursor-pointer"
          >
            Reintentar
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-yellow-200 font-semibold rounded-xl shadow-md transition-all duration-200 text-sm"
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}