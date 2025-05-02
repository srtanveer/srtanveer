'use client';

import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
      
      try {
        await tsParticles.load({
          id: "tsparticles",
          options: {
            background: {
              color: {
                value: "transparent",
              },
            },
            particles: {
              color: {
                value: "#4ade80",
              },
              links: {
                color: "#86efac",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 3,
              },
              number: {
                value: 100,
              },
              opacity: {
                value: 0.6,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 3, max: 8 },
              },
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 6,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
          },
        });
      } catch (error) {
        console.error("Error loading particles:", error);
      }
    };

    initParticles();
  }, []);

  return (
    <div
      id="tsparticles"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
} 