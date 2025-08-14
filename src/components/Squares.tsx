import React, { useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

interface SquaresProps {
  speed?: number;
  squareSize?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  borderColor?: string;
  hoverFillColor?: string;
}

const Squares: React.FC<SquaresProps> = ({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor,
  hoverFillColor
}) => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-adjust colors based on theme
  const getColors = () => {
    if (theme === 'light') {
      return {
        border: borderColor || '#1f2937', // Dark gray for light mode
        hover: hoverFillColor || '#8b5cf6', // Purple hover
        opacity: 0.07 // 90% reduction from 0.7 (0.7 * 0.1 = 0.07)
      };
    } else {
      return {
        border: borderColor || '#ffffff', // White for dark mode
        hover: hoverFillColor || '#8b5cf6', // Purple hover
        opacity: 0.05 // 90% reduction from 0.5 (0.5 * 0.1 = 0.05)
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    
    // Resize observer for dynamic container size changes
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    // Square properties
    const squares: Array<{
      x: number;
      y: number;
      size: number;
      dx: number;
      dy: number;
      opacity: number;
      hovered: boolean;
    }> = [];

    // Initialize squares
    const initSquares = () => {
      squares.length = 0;
      const cols = Math.ceil(canvas.width / squareSize);
      const rows = Math.ceil(canvas.height / squareSize);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * squareSize;
          const y = j * squareSize;
          
          let dx = 0;
          let dy = 0;
          
          switch (direction) {
            case 'up':
              dy = -speed;
              break;
            case 'down':
              dy = speed;
              break;
            case 'left':
              dx = -speed;
              break;
            case 'right':
              dx = speed;
              break;
            case 'diagonal':
              dx = speed;
              dy = speed;
              break;
          }

          const colors = getColors();
          squares.push({
            x,
            y,
            size: squareSize,
            dx,
            dy,
            opacity: Math.random() * 0.3 + colors.opacity, // Use theme-based opacity
            hovered: false
          });
        }
      }
    };

    initSquares();

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const colors = getColors();
      
      squares.forEach(square => {
        // Update position
        square.x += square.dx;
        square.y += square.dy;

        // Wrap around edges
        if (square.x > canvas.width) square.x = -squareSize;
        if (square.x < -squareSize) square.x = canvas.width;
        if (square.y > canvas.height) square.y = -squareSize;
        if (square.y < -squareSize) square.y = canvas.height;

        // Check if mouse is hovering over square
        const isHovered = mouseX >= square.x && mouseX <= square.x + square.size &&
                         mouseY >= square.y && mouseY <= square.y + square.size;
        
        if (isHovered && !square.hovered) {
          square.hovered = true;
        } else if (!isHovered && square.hovered) {
          square.hovered = false;
        }

        // Draw square
        ctx.save();
        ctx.globalAlpha = square.opacity;
        
        if (square.hovered) {
          ctx.fillStyle = colors.hover;
          ctx.fillRect(square.x, square.y, square.size, square.size);
        }
        
        ctx.strokeStyle = colors.border;
        ctx.lineWidth = 2;
        ctx.strokeRect(square.x, square.y, square.size, square.size);
        
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [speed, squareSize, direction, borderColor, hoverFillColor, theme]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0">
      <canvas
        ref={canvasRef}
        className="squares-canvas"
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
};

export default Squares;
