"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "motion/react";
import type { MouseEvent, ReactNode } from "react";

type AnimatedTooltipItem = {
  id: number;
  name: string;
  description?: string;
  href?: string;
  icon?: ReactNode;
  image?: string;
};

export const AnimatedTooltip = ({
  items,
}: {
  items: AnimatedTooltipItem[];
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const x = useMotionValue(0);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), {
    stiffness: 100,
    damping: 15,
  });

  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), {
    stiffness: 100,
    damping: 15,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
  };

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative -mr-4"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <AnimatePresence>
            {hoveredId === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>

                {item.description && (
                  <div className="text-xs text-white">{item.description}</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={item.href || "#"}
            target={item.href?.startsWith("http") ? "_blank" : undefined}
            rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
            onMouseMove={handleMouseMove}
            className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-black text-white transition duration-500 group-hover:z-30 group-hover:scale-105"
            animate={{
              scale: hoveredId === item.id ? 1.05 : 1,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {item.icon ? (
              item.icon
            ) : item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full rounded-full object-cover object-top"
              />
            ) : null}
          </motion.a>
        </div>
      ))}
    </>
  );
};