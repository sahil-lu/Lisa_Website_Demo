import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
      className="relative"
    >
      <motion.div
        className="absolute inset-0 bg-purple-600/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.img 
        src="/lisa-logo.svg" 
        alt="LISA Logo" 
        className="h-8 w-auto relative z-10"
        animate={{
          y: [0, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default AnimatedLogo; 