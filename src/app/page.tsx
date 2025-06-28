// app/page.tsx
import ParticlesBackground from "../components/ParticlesBackground";
import LinkButton from "../components/linkButton";

export default function HomePage() {
  return (
    <main className="relative h-screen overflow-hidden text-white">
      {/* Fondo de partículas */}
      <ParticlesBackground />
      
      {/* Contenido principal con contexto de apilamiento */}
      <div className="absolute inset-0 z-10 overflow-auto">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Bienvenido a Nuestra Tienda</h1>
          <p className="mb-6 text-lg animate-fadeIn delay-200">¿Qué estás buscando?</p>

          <div className="flex justify-center gap-4 mt-8 animate-fadeIn delay-300">
            <LinkButton href="/productos/remeras" label="Remeras" className="animate-bounce" />
            <LinkButton href="/productos/pantalones" label="Pantalones" className="animate-bounce delay-150" />
            <LinkButton href="/productos/zapatillas" label="Zapatillas" className="animate-bounce delay-300" />
          </div>
        </div>
      </div>
    </main>
  );
}

// src/app/page.tsx (o donde quieras mostrar las partículas)


