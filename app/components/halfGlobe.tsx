// HalfGlobe.tsx

"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const HalfGlobe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a half-globe
    const geometry = new THREE.SphereGeometry(
      5,
      32,
      32,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0xd3d3d3,
      side: THREE.DoubleSide,
    });
    const halfGlobe = new THREE.Mesh(geometry, material);
    scene.add(halfGlobe);

    // Position the camera
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default HalfGlobe;
