"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoading() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a0a] text-textPrimary"
        >
          {/* Subtle Background Element */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 flex justify-center items-center">
            {/* Minimal SVG Grid imitating circuit board */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="gridPattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#1e1e1e"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
              <circle cx="20" cy="20" r="1.5" fill="#00ff9d" />
              <circle cx="100" cy="180" r="1.5" fill="#00ff9d" />
              <circle cx="340" cy="80" r="1.5" fill="#00ff9d" />
              <circle cx="200" cy="300" r="1.5" fill="#00ff9d" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center z-10 flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-4 tracking-tight">
              Jerry Liu
            </h1>
            <p className="font-mono text-sm md:text-base text-textSecondary uppercase tracking-widest mb-12">
              Mechatronics Engineering @ Waterloo
            </p>

            <motion.p
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="font-mono text-accent text-sm uppercase tracking-widest cursor-pointer"
            >
              [ enter ]
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
