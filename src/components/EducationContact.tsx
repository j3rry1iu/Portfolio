"use client";

import { motion } from "framer-motion";
import { Copy, Check, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EducationContact() {
  const [copied, setCopied] = useState(false);
  const email = "j2442liu@uwaterloo.ca";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full relative bg-background border-t border-divider">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Education Section */}
        <div className="w-full md:w-1/2 p-10 md:p-20 border-b md:border-b-0 md:border-r border-divider">
          <h2 className="text-xl font-mono text-textSecondary uppercase tracking-widest flex items-center gap-4 mb-16">
            <span className="w-8 h-[1px] bg-accent" />
            Education
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-3xl font-serif text-textPrimary mb-2">University of Waterloo</h3>
              <p className="font-mono text-sm text-textSecondary uppercase tracking-widest mb-1">
                BASc Mechatronics Engineering
              </p>
              <div className="flex items-center gap-4 text-sm font-mono text-textSecondary tracking-wider">
                <span>2025–2030</span>
                <span>•</span>
                <span className="text-accent">GPA: 3.88/4.0</span>
              </div>
            </div>

            {/* Scholarship Card */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-yellow-500/20 rounded-none relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h4 className="text-yellow-500 font-serif text-xl mb-2 relative z-10">Arthur F. Church Scholarship</h4>
              <p className="text-yellow-500/70 font-mono text-xs uppercase tracking-wider relative z-10">Awarded $10,000</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="p-10 md:p-20 grow">
            <h2 className="text-5xl font-serif text-textPrimary mb-12">Get in touch!</h2>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={handleCopy}
              className="group w-full flex items-center justify-between p-6 bg-surface border border-divider hover:border-accent transition-colors relative"
            >
              <div className="flex flex-col items-start gap-2">
                <span className="font-mono text-xs text-textSecondary uppercase tracking-widest">Email</span>
                <span className="font-mono text-lg text-textPrimary group-hover:text-accent transition-colors">{email}</span>
              </div>
              <div className="text-textSecondary group-hover:text-accent transition-colors">
                {copied ? <Check size={24} /> : <Copy size={24} />}
              </div>
              {copied && (
                <span className="absolute -top-10 right-0 font-mono text-xs text-accent bg-accent/10 px-3 py-1 animate-pulseFast">
                  Copied!
                </span>
              )}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-16 flex items-center gap-8"
            >
              <Link href="https://github.com/j3rry1iu" target="_blank" className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors group">
                <Github size={20} />
                <span className="font-mono text-xs uppercase tracking-widest overflow-hidden">
                  <span className="inline-block -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">GitHub</span>
                </span>
              </Link>
              <Link href="https://www.linkedin.com/in/jerry-liu-uw/" target="_blank" className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors group">
                <Linkedin size={20} />
                <span className="font-mono text-xs uppercase tracking-widest overflow-hidden">
                  <span className="inline-block -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">LinkedIn</span>
                </span>
              </Link>
              <Link href="https://x.com/_jerryliu_" target="_blank" className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors group">
                <Twitter size={20} />
                <span className="font-mono text-xs uppercase tracking-widest overflow-hidden">
                  <span className="inline-block -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">X</span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="p-10 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-textSecondary tracking-wider">
              Designed & built by Jerry Liu · 2026
            </p>
            <p className="font-mono text-xs text-divider tracking-wider">
              SYSTEM: ONLINE
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
