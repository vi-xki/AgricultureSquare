"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollHintProps {
  visible: boolean;
}

export default function ScrollHint({ visible }: ScrollHintProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-x-0 bottom-5 z-20 flex justify-center"
        >
          <span className="flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-700 shadow-sm backdrop-blur">
            Scroll to explore
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={14} />
            </motion.span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
