"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "drag">("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const hover = target?.closest('a, button, [data-cursor="hover"]');
      const drag = target?.closest('[data-cursor="drag"]');
      setVariant(drag ? "drag" : hover ? "hover" : "default");
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  const ring =
    variant === "hover"
      ? { width: 56, height: 56, borderWidth: 1 }
      : variant === "drag"
        ? { width: 84, height: 84, borderWidth: 1 }
        : { width: 28, height: 28, borderWidth: 1 };

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-paper" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference flex items-center justify-center"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={ring}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="h-full w-full rounded-full border border-paper" />
        {variant === "drag" && (
          <span className="absolute font-mono text-[10px] uppercase tracking-[0.2em] text-paper">
            drag
          </span>
        )}
      </motion.div>
    </>
  );
}
