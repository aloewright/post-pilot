import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

const transition = {
  duration: 0.18,
  ease: [0.16, 1, 0.3, 1] as const,
};

/**
 * Quick cross-fade on route change. Old content swaps out instantly;
 * new content fades in over ~180ms. Avoids the visible "exit then enter"
 * sequence mode="wait" produces, which reads as a double reload.
 */
export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence initial={false}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        key={pathname}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
