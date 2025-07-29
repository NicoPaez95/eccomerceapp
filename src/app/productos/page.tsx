'use client';
// src/app/productos/page.tsx
import ParticlesBackground from "../../components/ParticlesBackground";
import CategoryItems from "../../components/CategoryItems";

export default function HomePage() {
  return (
    <main className="relative h-screen overflow-hidden text-white">
      <ParticlesBackground />
      <div className="absolute inset-0 z-10 overflow-auto">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fadeIn">
            Bienvenido a Nuestra Tienda
          </h1>
          <p className="mb-6 text-lg animate-fadeIn delay-200">
            ¿Qué estás buscando?
          </p>
          <CategoryItems />
        </div>
      </div>
    </main>
  );
}
