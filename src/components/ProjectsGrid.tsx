"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "canopi",
    title: "Canopi: Rental Matchmaker",
    date: "March 2026",
    demoLink: "https://www.linkedin.com/feed/update/urn:li:activity:7439038053525991424/",
    githubLink: "https://github.com/ZhuBryan/Canopi-Hack-Canada",
    stack: ["Next.js", "TypeScript", "Supabase", "Node.js", "Gemini API", "Mapbox GL 3"],
    description:
      "Full-stack rental platform with a custom scraper aggregating real-time housing data across Canada. Built a compatibility algorithm for user-to-property match scores and an AI chat interface powered by Gemini for natural preference inference.",
    type: "iframe",
  },
  {
    id: "neuralchess",
    title: "Neural Chess Engine",
    date: "Nov 2025",
    demoLink: "https://lichess.org/@/BrickAndMortar",
    githubLink: "https://github.com/j3rry1iu/ChessHacks-Training",
    stack: ["PyTorch", "Python", "Lichess API", "CUDA", "Deep Learning"],
    description:
      "6-layer neural network trained on millions of Grandmaster games using a custom 12-channel (12×8×8) board encoding. Deployed live to Lichess with minimax + alpha-beta pruning.",
    type: "svg",
  },
  {
    id: "vex",
    title: "VEX Garbage Collection Robot",
    date: "Nov 2025",
    demoLink: "https://photos.app.goo.gl/daBNBfzETB6B68AdA",
    githubLink: "https://github.com/j3rry1iu/Vex_Robot",
    stack: ["C++", "VEX IQ"],
    description:
      "This VEX IQ C++ project implements a professional control system for a robot designed to perform automated object manipulation and lifting tasks. The robot is designed to autonomously pick up trash within a certain area and deposit it in a bin. Built for MTE 100 at the University of Waterloo.",
    type: "video",
  },
  {
    id: "firefighter",
    title: "Firefighter Robot",
    date: "Feb – Jun 2025",
    demoLink: "https://photos.google.com/share/AF1QipNeHzkVOll1-j-OWuPZ83U9xz4P8rsJ9O8uHym1Msml2RRHFv6O-HsxMYI-5p8TTA?key=akpOaW1qNlk0T1BXVnU3bWJtVGJQWi1mSnhLZEF3",
    githubLink: "https://github.com/j3rry1iu/Firefighter-Robot",
    stack: ["GCBASIC", "Custom PCB", "3D Printing", "Soldering", "Sensors Integration"],
    description:
      "Autonomous fire-detection robot programmed in GCBASIC with wall sensors, phototransistors, and IR flame sensors. Designed and manufactured a custom PCB and 3D-printed/wood chassis from scratch.",
    type: "video",
  },
  {
    id: "hush",
    title: "hush.",
    date: "May 2024",
    demoLink: "https://photos.app.goo.gl/jwNAAWy1Jnb5Yr7m7",
    githubLink: "https://github.com/TheAndelope/hush",
    stack: ["Unity", "C#"],
    description:
      "A PlayStation 1-inspired horror game where players navigate a dark environment to escape a tracking AI enemy. Make sure to hush.",
    type: "video",
  },
  {
    id: "daysync",
    title: "DaySync",
    date: "Nov 2023",
    demoLink: "https://devpost.com/software/daysync",
    githubLink: "#",
    stack: ["Arduino", "Javascript", "Python", "C++"],
    description:
      "Research-driven smart lighting productivity platform that dynamically adapts to users' cognitive states. Synchronizes with their smart devices and adjusts light intensity and temperature according to time-series dashboard. Won at ClockHacks",
    type: "placeholder",
  },
];

export default function ProjectsGrid() {

  return (
    <section id="projects" className="w-full py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-textPrimary mb-20 flex items-center gap-6">
          <span className="w-16 h-[1px] bg-divider" />
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * (idx % 2) }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 0 1px #00ff9d" }}
              className="group flex flex-col bg-surface border border-divider overflow-hidden transition-all duration-300"
            >

              {/* Text Content */}
              <div className="p-8 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-textPrimary">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.githubLink && project.githubLink !== "#" && (
                      <Link href={project.githubLink} target="_blank" className="text-textSecondary hover:text-accent transition-colors" title="View Source">
                        <Github size={20} />
                      </Link>
                    )}
                    {project.demoLink && project.demoLink !== "#" && (
                      <Link href={project.demoLink} target="_blank" className="text-textSecondary hover:text-accent transition-colors" title="Live Demo">
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="font-mono text-xs text-textSecondary uppercase tracking-widest mb-6">
                  {project.date}
                </p>

                <p className="text-textSecondary text-sm leading-relaxed mb-8 grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-textPrimary border border-divider rounded-full bg-[#0a0a0a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
