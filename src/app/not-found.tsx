// src/app/not-found.tsx
// this script is used to show the 404 page / este script se usa para mostrar la página 404
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="max-w-md w-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border border-yellow-900/30 shadow-2xl shadow-yellow-900/10 text-center">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
          404
        </h1>
        <h2 className="text-xl font-bold text-white mb-3">
          Página no encontrada
        </h2>
        <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
          Lo sentimos, la página que estás buscando no existe o fue movida a otra ubicación.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold rounded-xl shadow-md transition-all duration-200 text-sm"
        >
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}