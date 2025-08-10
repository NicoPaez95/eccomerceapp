// src/app/page.tsx
//Main page//Pagina principal
import ParticlesBackground from "../components/ParticlesBackground";
import CategoryItems from "../components/CategoryItems";
export default function HomePage() {
  return (
    <main className="relative h-screen overflow-hidden text-white">
      {/* Particle background/Fondo de partículas */}
      <ParticlesBackground />

      {/* Main content/Contenido principal */}
      <div className="absolute inset-0 z-10 overflow-auto">
        <div className="p-8 text-center">
          <h1 className="bg-font-main mb-4 animate-fadeIn">
            Bienvenido a Nuestra Tienda
          </h1>
          <p className="mb-6 text-lg animate-fadeIn delay-200">
            ¿Qué estás buscando?
          </p>
          {/* dynamically rendered categories/Categorías renderizadas dinámicamente */}
          <CategoryItems />
        </div>
      </div>
    </main>
  );
}

