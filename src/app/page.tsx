// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Nuestra Tienda</h1>
      <p className="mb-6">Explora nuestros productos y encuentra lo que necesitas</p>
      <Link href="/productos" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
       
          Ver Productos
        
      </Link>
    </main>
  );
}
