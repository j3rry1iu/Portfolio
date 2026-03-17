"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: "canopi",
    title: "Canopi: Rental Matchmaker",
    date: "March 2026",
    link: "https://canopi-ai.vercel.app/",
    stack: ["Next.js", "TypeScript", "Supabase", "Node.js", "Gemini API"],
    description:
      "Full-stack rental platform with a custom scraper aggregating real-time housing data across Canada. Built a compatibility algorithm for user-to-property match scores and an AI chat interface powered by Gemini for natural preference inference.",
    type: "iframe",
  },
  {
    id: "artistblend",
    title: "ArtistBlend: Automated Playlist Curator",
    date: "Feb 2026",
    stack: ["Next.js", "TypeScript", "Spotify Web API", "OAuth 2.0"],
    description:
      "Web app that dynamically filters and curates custom Spotify playlists from a user&apos;s liked songs by artist metadata. Implements OAuth 2.0 and handles paginated API requests for thousands of tracks.",
    type: "placeholder",
  },
  {
    id: "neuralchess",
    title: "Neural Chess Engine",
    date: "Nov 2025",
    link: "https://lichess.org",
    stack: ["PyTorch", "Python", "Lichess API"],
    description:
      "6-layer neural network trained on millions of high-ELO games using a custom 12-channel (12×8×8) board encoding. Deployed live to Lichess with minimax + alpha-beta pruning.",
    type: "svg",
  },
  {
    id: "firefighter",
    title: "Firefighter Robot",
    date: "Feb – Jun 2025",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder", // placeholder
    stack: ["GCBASIC", "Custom PCB", "3D Printing", "Soldering"],
    description:
      "Autonomous fire-detection robot programmed in GCBASIC with wall sensors, phototransistors, and IR flame sensors. Designed and manufactured a custom PCB and 3D-printed chassis from scratch.",
    type: "video",
  },
];

export default function ProjectsGrid() {
  const [playingVideo, setPlayingVideo] = useState(false);

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
              {/* Visual Presentation Area */}
              <div className="relative w-full h-[300px] bg-[#0d0d0d] border-b border-divider overflow-hidden flex items-center justify-center">
                
                {project.type === "iframe" && (
                  <div className="w-[150%] h-[150%] absolute top-0 origin-top-left scale-[0.67] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <iframe
                      src={project.link}
                      className="w-full h-full border-none"
                      tabIndex={-1}
                      title={project.title}
                    />
                  </div>
                )}

                {project.type === "svg" && (
                  <div className="w-full h-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,#1e1e1e_0%,#0d0d0d_100%)]">
                    <svg width="160" height="160" viewBox="0 0 8 8" className="animate-pulseFast">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <rect
                          key={i}
                          x={i % 8}
                          y={Math.floor(i / 8)}
                          width="1"
                          height="1"
                          fill={(i + Math.floor(i / 8)) % 2 === 0 ? "#1a1a1a" : "#0A0A0A"}
                        />
                      ))}
                      {/* Fake active squares simulating neural logic */}
                      <rect x="3" y="4" width="1" height="1" fill="#00ff9d" opacity="0.8" />
                      <rect x="4" y="3" width="1" height="1" fill="#00ff9d" opacity="0.4" />
                    </svg>
                  </div>
                )}

                {project.type === "video" && !playingVideo && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-[#141414] group-hover:bg-[#1a1a1a] transition-colors"
                    onClick={() => setPlayingVideo(true)}
                  >
                    <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all">
                      <Play fill="currentColor" size={24} className="ml-1" />
                    </div>
                  </div>
                )}
                
                {project.type === "video" && playingVideo && (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={project.videoPlaceholder}
                    title="Firefighter Robot Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}

                {project.type === "placeholder" && (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#141414] to-[#0a0a0a] opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="w-24 h-[1px] bg-divider rotate-45" />
                    <div className="w-24 h-[1px] bg-divider -rotate-45 absolute" />
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-textPrimary">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.link && (
                      <Link href={project.link} target="_blank" className="text-textSecondary hover:text-accent transition-colors">
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
