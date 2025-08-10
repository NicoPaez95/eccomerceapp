'use client';
//src/app/error.tsx
import { useEffect } from 'react';
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Error capturado por error.tsx:', error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">¡Ups! Algo salió mal</h1>
      <p className="text-gray-600 mb-4">Ha ocurrido un error inesperado en el sistema.</p>
      <button
        onClick={() => reset()}
        className="bg-black text-white px-4 py-2 rounded hover:opacity-90 transition"
      >
        Reintentar
      </button>
    </div>
  );
}
