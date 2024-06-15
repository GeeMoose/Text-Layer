"use client";
import { motion } from "framer-motion";

export default function MotionWarpper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      >
      {children}
    </motion.div>
  );
}

