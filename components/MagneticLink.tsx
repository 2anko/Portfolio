"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
  strength?: number;
  external?: boolean;
};

export function MagneticLink({
  children,
  href,
  className,
  strength = 0.35,
  external,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.3 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
      data-cursor="hover"
    >
      {children}
    </motion.a>
  );
}
