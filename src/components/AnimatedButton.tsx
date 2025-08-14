import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'cta' | 'outline';
  size?: 'sm' | 'default' | 'lg' | 'xl';
  className?: string;
  delay?: number;
  asChild?: boolean;
  href?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  variant = 'cta', 
  size = 'default',
  className = '',
  delay = 0,
  asChild = false,
  href
}) => {
  const buttonContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );

  if (asChild && href) {
    return (
      <a href={href} className={className}>
        <Button variant={variant} size={size}>
          {buttonContent}
        </Button>
      </a>
    );
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
    >
      {buttonContent}
    </Button>
  );
};

export default AnimatedButton; 