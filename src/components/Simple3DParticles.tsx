import React, { useRef, useMemo } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Simple particle system
const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random particles
  const particles = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        size={0.1}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </Points>
  );
};

// Main component
const Simple3DParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Simple3DParticles;
