// app/page.tsx
//Main page

import ParticlesBackground from "../components/ParticlesBackground";
import CategoryItems from "../components/CategoryItems";



export default function HomePage() {
  return (
    <main className="relative h-screen overflow-hidden text-white">
      {/* Fondo de partículas/Particle background */}
      <ParticlesBackground />

      {/* Contenido principal */}
      <div className="absolute inset-0 z-10 overflow-auto">
        <div className="p-8 text-center">
          <h1 className="bg-font-main mb-4 animate-fadeIn">
            Bienvenido a Nuestra Tienda
          </h1>
          <p className="mb-6 text-lg animate-fadeIn delay-200">
            ¿Qué estás buscando?
          </p>

          {/* Categorías renderizadas dinámicamente/ dynamically rendered categories */}
          <CategoryItems />
        </div>
      </div>
    </main>
  );
}

