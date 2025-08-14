import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = [
    { id: 1, x: '10%', y: '20%', size: 'w-4 h-4', delay: 0 },
    { id: 2, x: '80%', y: '30%', size: 'w-6 h-6', delay: 1 },
    { id: 3, x: '20%', y: '70%', size: 'w-3 h-3', delay: 2 },
    { id: 4, x: '70%', y: '80%', size: 'w-5 h-5', delay: 3 },
    { id: 5, x: '50%', y: '10%', size: 'w-4 h-4', delay: 4 },
    { id: 6, x: '90%', y: '60%', size: 'w-3 h-3', delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} bg-purple-600/20 rounded-full blur-sm`}
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating lines */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-purple-600/30 to-transparent"
        animate={{
          rotate: [0, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-purple-600/30 to-transparent"
        animate={{
          rotate: [360, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default FloatingElements; 