import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

interface Logo3DCardProps {
  name: string;
  src: string;
  description: string;
  index: number;
}

const Logo3DCard: React.FC<Logo3DCardProps> = ({ name, src, description, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <Card className="h-[320px] transform-gpu transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
          <motion.div 
            className="w-32 h-32 mb-4 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={src} 
              loading="lazy" 
              alt={`${name} logo`} 
              className="h-28 w-auto object-contain max-w-full max-h-full filter group-hover:brightness-110 transition-all duration-300" 
            />
          </motion.div>
          <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-purple-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Logo3DCard;
