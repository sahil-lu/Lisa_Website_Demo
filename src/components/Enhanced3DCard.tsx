import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

interface Enhanced3DCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  height?: string;
  delay?: number;
}

const Enhanced3DCard: React.FC<Enhanced3DCardProps> = ({ 
  children, 
  className = "", 
  index = 0, 
  height = "h-[240px]",
  delay = 0 
}) => {
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
        delay: delay + (index * 0.1),
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="group transform-gpu"
    >
      <Card className={`${height} ${className} transform-gpu transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20`}>
        <CardContent className="h-full flex flex-col justify-center relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%)'
            }}
          />
          <div className="relative z-10">
            {children}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Enhanced3DCard;
