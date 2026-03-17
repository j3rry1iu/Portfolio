"use client";



const languages = ["Python", "TypeScript", "C++", "GCBASIC", "SQL", "JavaScript", "HTML", "CSS"];
const frameworks = ["Next.js", "React", "PyTorch", "Node.js", "Tailwind CSS", "Framer Motion", "Supabase"];
const hardware = ["SolidWorks", "3D Printing", "PCB Design", "Soldering", "Microcontrollers", "Sensors"];
const tools = ["Git", "Linux", "Docker", "Figma", "VS Code", "Jenkins", "AWS"];

const row1 = [...languages, ...frameworks];
const row2 = [...hardware, ...tools];

// Duplicate for infinitely looping marquee
const renderRow = (items: string[]) => {
  return [...items, ...items, ...items, ...items].map((item, idx) => (
    <div
      key={`${item}-${idx}`}
      className="shrink-0 px-4 py-2 border border-divider text-textSecondary font-mono text-sm uppercase bg-surface hover:border-accent hover:text-accent hover:shadow-[0_0_10px_#00ff9d40] transition-all duration-300 cursor-cell"
    >
      {item}
    </div>
  ));
};

export default function SkillsTicker() {
  return (
    <section className="w-full py-20 border-y border-divider overflow-hidden bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-sm font-mono text-textSecondary uppercase tracking-widest flex items-center gap-4">
          <span className="w-12 h-[1px] bg-accent" />
          Toolkit
        </h2>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden max-w-full">
        {/* Row 1 */}
        <div className="flex w-[200%] gap-6 animate-marquee hover:[animation-play-state:paused]">
          {renderRow(row1)}
        </div>
        
        {/* Row 2 - Reverse */}
        <div 
          className="flex w-[200%] gap-6 animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDirection: "reverse", animationDuration: "25s" }}
        >
          {renderRow(row2)}
        </div>
      </div>
    </section>
  );
}
