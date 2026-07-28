"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  logo: string;
  link?: string;
  date: string;
  location: string;
  points: string[];
  badge?: string;
}

const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Parcyl.ai",
    logo: "/logos/parcyl.png",
    date: "May 2026 – Current",
    location: "Remote",
    points: [
      "Owned the natural-language-to-SQL pipeline turning plain-English commercial real estate questions into schema-aware, parameterized queries — read-only by default, with every placeholder verified before execution",
      "Built AI agent flows for deal screening, sourcing, and site analysis, plus a nearest-by-point GIS enrichment endpoint over Postgres/PostGIS",
      "Shipped the document engine: presigned S3 uploads feeding a BullMQ job queue and a multimodal VLM path that extracts structured data out of property documents",
      "NestJS/Prisma monorepo on Docker + Render, working directly with the founder on priorities"
    ]
  },
  {
    role: "Undergraduate Research Assistant",
    company: "University of Waterloo",
    logo: "/logos/waterloo.png",
    date: "Feb 2026 – June 2026",
    location: "Waterloo, ON",
    points: [
      "Building drone-based remote sensing platform for greenhouse gas detection",
      "Sensor fusion, embedded systems design, signal processing pipeline",
      "Working under Prof. Shunde Yin"
    ]
  },
  {
    role: "Research Assistant",
    company: "University of Waterloo",
    logo: "/logos/waterloo.png",
    date: "Aug 2024 – Jun 2025",
    location: "Waterloo, ON",
    points: [
      "Multi-modal sensor selection (accelerometers, microphones, vibration) for CNC milling test rig",
      "Python data processing pipelines → PyTorch files for time-series RUL prediction",
      "Transformer architectures (Autoformer) for remaining-useful-life prediction",
      "Worked under Dr. Eugene Li"
    ]
  },
  {
    role: "Co-Founder, Logistics Lead",
    company: "NeoDev League",
    logo: "/logos/neodev.png",
    link: "https://neoleague.dev/",
    date: "May 2024 – Jun 2025",
    location: "Waterloo, ON",
    points: [
      "Co-founded non-profit for high school engineering competitions",
      "Led 10-hour hackathon logistics (scheduling, facilities, technical resources)",
      "$10,000+ in sponsorships from 500+ companies contacted; 150 students across 10 schools",
      "Backed by convictional(yc w19)"
    ]
  },
  {
    role: "Team Member",
    company: "2702 Rebels(FIRST Robotics)",
    logo: "/logos/rebels.png",
    date: "Oct 2022 – Oct 2024",
    location: "Kitchener, ON",
    points: [
      "Modelled key robot subsystems in SolidWorks",
      "Prototyped and fabricated components using industry-standard manufacturing tools within a 3-month build cycle for the FIRST Robotics Challenge",

    ],
    badge: "🏆 Worlds Qualifier"
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-24 relative bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-textPrimary mb-20 flex items-center gap-6">
          <span className="w-16 h-[1px] bg-divider" />
          Experience
        </h2>

        <div className="relative border-l border-divider md:border-none md:flex md:flex-col md:gap-0">
          {/* Central spine on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-divider -translate-x-1/2 z-0" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative pl-8 md:pl-0 pt-8 pb-16 md:flex md:justify-between md:items-start group z-10"
            >
              {/* Timeline marker node */}
              <div className="absolute left-[-4px] top-10 w-2 h-2 rounded-full bg-accent md:left-1/2 md:-translate-x-1/2 transform scale-100 group-hover:scale-[2] group-hover:shadow-[0_0_10px_#00ff9d] transition-all duration-300" />

              {/* Left side: Date & Location */}
              <div className="md:w-5/12 md:pr-12 md:text-right mb-2 md:mb-0 mt-2">
                <p className="font-mono text-sm text-textSecondary uppercase tracking-widest">{exp.date}</p>
                <p className="font-mono text-xs text-textSecondary tracking-wider mt-1">{exp.location}</p>
              </div>

              {/* Right side: Content */}
              <div className="md:w-5/12 md:pl-12">
                <h3 className="text-2xl font-serif text-textPrimary mb-1">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded bg-surface border border-divider flex items-center justify-center overflow-hidden shrink-0 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_15px_#00ff9d20]">
                    <Image src={exp.logo} alt={`${exp.company} logo`} width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    {exp.link ? (
                      <Link
                        href={exp.link}
                        target="_blank"
                        className="text-accent hover:underline flex items-center gap-1 font-mono text-sm uppercase tracking-wider"
                      >
                        {exp.company}
                        <ExternalLink size={14} />
                      </Link>
                    ) : (
                      <p className="text-accent font-mono text-sm uppercase tracking-wider">{exp.company}</p>
                    )}
                    {exp.badge && (
                      <div className="mt-1">
                        <span className="px-2 py-0.5 border border-yellow-500/30 text-yellow-400 text-xs font-mono rounded-full bg-yellow-500/5 whitespace-nowrap">
                          {exp.badge}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-textSecondary text-sm md:text-base leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-divider" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
