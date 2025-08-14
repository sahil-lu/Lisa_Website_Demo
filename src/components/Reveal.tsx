import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  once?: boolean;
}

const Reveal: React.FC<RevealProps> = ({ once = true, className, children, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 translate-y-3 will-change-transform",
        visible && "opacity-100 animate-fade-in",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Reveal;
