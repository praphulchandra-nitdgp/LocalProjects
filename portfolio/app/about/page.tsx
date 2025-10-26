import ProfileSection from '@/components/ProfileSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function About() {
  return (
    <div className="px-4 sm:px-8 lg:px-40 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  );
}