import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas, useGLTF, Float, Text3D, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shapes component
const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create random positions for shapes
  const shapes = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 15; i++) {
      positions.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: Math.random() * 0.5 + 0.3,
        type: Math.floor(Math.random() * 3) // 0: sphere, 1: box, 2: torus
      });
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => (
        <Float
          key={index}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={shape.position as [number, number, number]}
          rotation={shape.rotation as [number, number, number]}
        >
          {shape.type === 0 && (
            <Sphere args={[shape.scale, 8, 6]}>
              <meshStandardMaterial
                color="#8B5CF6"
                transparent
                opacity={0.3}
                wireframe
              />
            </Sphere>
          )}
          {shape.type === 1 && (
            <Box args={[shape.scale, shape.scale, shape.scale]}>
              <meshStandardMaterial
                color="#7C3AED"
                transparent
                opacity={0.2}
                wireframe
              />
            </Box>
          )}
          {shape.type === 2 && (
            <Torus args={[shape.scale, shape.scale * 0.3, 8, 6]}>
              <meshStandardMaterial
                color="#A855F7"
                transparent
                opacity={0.25}
                wireframe
              />
            </Torus>
          )}
        </Float>
      ))}
    </group>
  );
};

// Main 3D background component
const Floating3DBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default Floating3DBackground;
