'use client';
// src/components/ParticlesBackground.tsx
//this script is used to show the particle background/este script se usa para mostrar el fondo de particulas
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

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
        value: ["#FFD700", "#B8860B", "#000000"], // Dorado clásico, oro oscuro y negro
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.8,
        random: true,
        animation: {
          enable: true,
          speed: 1.2,
          opacity_min: 0.3,
          sync: false,
        },
      },
      size: {
        value: 100,
        random: true,
        animation: {
          enable: false,
          speed: 12,
          size_min: 0.3,
          sync: false,
        },
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 4,
        direction: MoveDirection.none,
        random: true,
        straight: false,
        outMode: OutMode.out,
        bounce: false,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: "bubble",
        },
        onClick: {
          enable: false,
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 200,
          size: 0,
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
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)", // Fondo oscuro premium
        zIndex: -1
      }}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return null;
};

export default ParticleBackground;
