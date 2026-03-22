"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Instagram, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const headline = "jerry liu";

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
            🏆 arthur f. church entrance scholarship — top of cohort
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
          mechatronics @ uw · building at the intersection of software & hardware
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
            className="group px-8 py-3 rounded-none border border-divider text-textPrimary font-mono text-sm lowercase tracking-wider hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">[ view projects ]</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
          </Link>
          <a
            href="/Jerry_Liu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 flex items-center gap-2 rounded-none border border-divider text-textPrimary font-mono text-sm lowercase tracking-wider hover:bg-surface transition-all duration-300"
          >
            <ExternalLink size={16} className="text-accent group-hover:-translate-y-1 transition-transform" />
            <span>view resume</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-mono text-[12px] text-textSecondary lowercase tracking-[0.3em]">
            follow my journey
          </span>
          <div className="flex items-center gap-6">
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
            <Link
              href="https://www.instagram.com/t0p.catt/"
              target="_blank"
              className="text-textSecondary hover:text-accent transition-colors p-2"
            >
              <Instagram size={24} />
            </Link>
          </div>
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
