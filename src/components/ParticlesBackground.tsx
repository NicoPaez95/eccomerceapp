'use client';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Usamos loadSlim para reducir el tamaño del bundle (similar al particles.min.js original)

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Equivalente a cargar particles.min.js
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // Configuración idéntica al comportamiento del código original
  const options: ISourceOptions = useMemo(() => ({
    particles: {
      number: {
        value: 7,
        density: {
          enable: true,
          value_area: 600,
        },
      },
      color: {
        value:  ["#546e7a", "#f5f5f5", "#eeeeee"], // Partículas blancas
      },
      shape: {
        type: "circle", // Forma circular
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.56,
        random: true, // Opacidad aleatoria
        animation: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 100,
        random: true, // Tamaño aleatorio
        animation: {
          enable: false,
          speed: 12,
          size_min: 0.3,
          sync: false,
        },
      },
      links: {
        enable: false, // Desactiva las líneas entre partículas (equivalente a line_linked: false)
      },
      move: {
        enable: true,
        speed: 4,
        direction: MoveDirection.none, // Movimiento aleatorio
        random: true,
        straight: false,
        outMode: OutMode.out, // Partículas desaparecen al salir del canvas
        bounce: false,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: "bubble", // Modo "burbuja" al pasar el mouse
        },
        onClick: {
          enable: false,
          mode: "repulse", // Repulsión al hacer clic
        },
      },
      modes: {
        bubble: {
          distance: 200,
          size: 0, // Tamaño 0 para simular el efecto original
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
      },
    },
    retina_detect: true,
  }), []);

if (init) {
  return (
    <div style={{ 
      position: "fixed", // Cambiado de 'relative' a 'fixed'
      top: 0,
      left: 0,
      width: "100vw", // Usar vw en lugar de %
      height: "100vh", 
      background: "#0d47a1",
      zIndex: -1 // Asegurar z-index negativo
    }}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}
}

export default ParticleBackground;