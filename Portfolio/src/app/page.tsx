import HeroSection from "@/components/HeroSection";
import SkillsTicker from "@/components/SkillsTicker";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsGrid from "@/components/ProjectsGrid";
import EducationContact from "@/components/EducationContact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsTicker />
      <ExperienceTimeline />
      <ProjectsGrid />
      <EducationContact />
    </>
  );
}
