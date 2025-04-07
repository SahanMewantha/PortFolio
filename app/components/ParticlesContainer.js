import React, { useCallback } from 'react';
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(() => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false }, // Disable full-screen mode for performance
        background: {
          color: { value: "" },
        },
        fpsLimit: 60, // Reduce FPS limit to 60
        interactivity: {
          events: {
            onClick: { enable: false, mode: 'push' },
            onHover: { enable: false }, // Disable hover effect
            resize: true,
          },
        },
        particles: {
          color: { value: '#be655b' },
          links: {
            color: '#9d0c2e',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: false }, // Disable collisions
          move: {
            direction: 'none',
            enable: true,
            outMode: { default: 'bounce' },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800, // Adjust area for lower particle density
            },
            value: 50, // Reduce the number of particles
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 }, // Reduce max size
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
