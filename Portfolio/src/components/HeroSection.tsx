"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const headline = "Building things that move, think, and last.";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Scholarship Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-400 text-xs font-mono font-medium tracking-wide animate-pulseFast">
            🏆 Church Entrance Scholarship — Top of Cohort
          </span>
        </motion.div>

        {/* Typewriter Headline */}
        <h1 className="text-5xl md:text-7xl font-serif text-textPrimary leading-[1.1] mb-6">
          {mounted &&
            headline.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: 1.5 + index * 0.03, // Start after intro screen
                }}
              >
                {char}
              </motion.span>
            ))}
        </h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="text-lg md:text-xl text-textSecondary font-sans max-w-2xl mb-12 leading-relaxed"
        >
          Mechatronics @ Waterloo · GPA 3.88 · Building at the edge of software and hardware
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-12"
        >
          <Link
            href="#projects"
            className="group px-8 py-3 rounded-none border border-divider text-textPrimary font-mono text-sm uppercase tracking-wider hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">[ View Projects ]</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
          </Link>
          <Link
            href="#resume" // Placeholder for an actual pdf
            className="group px-8 py-3 flex items-center gap-2 rounded-none border border-divider text-textPrimary font-mono text-sm uppercase tracking-wider hover:bg-surface transition-all duration-300"
          >
            <Download size={16} className="text-accent group-hover:-translate-y-1 transition-transform" />
            <span>Download Resume</span>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="flex items-center gap-6"
        >
          <Link
            href="https://github.com/j3rry1iu"
            target="_blank"
            className="text-textSecondary hover:text-accent transition-colors p-2"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jerry-liu-uw/"
            target="_blank"
            className="text-textSecondary hover:text-accent transition-colors p-2"
          >
            <Linkedin size={24} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator down arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
