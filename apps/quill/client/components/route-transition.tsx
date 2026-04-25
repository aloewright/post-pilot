import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

const transition = {
  duration: 0.45,
  ease: [0.16, 1, 0.3, 1] as const,
};

/**
 * Wraps the routed content in an AnimatePresence so swaps fade and lift
 * gently rather than snapping in. Keyed on the path so React knows when
 * to start a new transition.
 */
export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        initial={{ opacity: 0, y: 12 }}
        key={pathname}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
