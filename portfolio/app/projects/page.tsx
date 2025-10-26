import ProfileSection from '@/components/ProfileSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Projects() {
  return (
    <div className="px-4 sm:px-8 lg:px-40 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <ProfileSection />
        <ProjectsSection detailed />
      </div>
    </div>
  );
}