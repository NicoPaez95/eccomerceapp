// src/app/not-found.tsx
//this is script is used to show the 404 page/este script se usa para mostrar la pagina 404
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-gray-600 mb-4">La página que buscas no fue encontrada.</p>
      <a
        href="/"
        className="bg-black text-white px-4 py-2 rounded hover:opacity-90 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}
