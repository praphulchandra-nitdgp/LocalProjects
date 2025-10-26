import Image from 'next/image';

const experiences = [
  {
    role: 'Developer',
    company: 'Wells Fargo',
    period: 'May 2026 - July 2026',
    logo: 'https://www.wellsfargo.com/assets/images/logos/wellsfargo/logo_974x1050.png',
  },
  {
    role: 'Senior Member',
    company: 'WDCT @ Centre for Cognitive Activities',
    period: 'June 2025 - Present',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLah_qQXD6QwKuxwP5Aqj-Zh4yXiBHBClG4g&s',
  },
  {
    role: 'Junior Member',
    company: 'WDCT @ Centre for Cognitive Activities',
    period: 'January 2024 - May 2025',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLah_qQXD6QwKuxwP5Aqj-Zh4yXiBHBClG4g&s',
  },
  {
    role: 'Senior Coordinator & Developer',
    company: 'Aarohan | Techno-Management Fest',
    period: 'October 2025',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYiMzRi8_a-c0ah1lPrwA0pXzpYJv39DoBA&s',
  },
  {
    role: 'Junior Coordinator',
    company: 'Aarohan | Techno-Management Fest',
    period: 'March 2025',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYiMzRi8_a-c0ah1lPrwA0pXzpYJv39DoBA&s',
  },
];

// Group experiences by company
const groupByCompany = (exps: typeof experiences) => {
  const grouped: Record<
    string,
    { logo: string; roles: { role: string; period: string }[] }
  > = {};

  exps.forEach(({ company, logo, role, period }) => {
    if (!grouped[company]) {
      grouped[company] = { logo, roles: [] };
    }
    grouped[company].roles.push({ role, period });
  });

  return grouped;
};

export default function ExperienceSection() {
  const groupedExperiences = groupByCompany(experiences);

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold leading-tight tracking-tight px-4">Experience</h1>

      <div className="space-y-12 px-4">
        {Object.entries(groupedExperiences).map(([company, { logo, roles }]) => (
          <div key={company} className="grid grid-cols-[40px_1fr] gap-x-4">
            {/* Logo and vertical timeline */}
            <div className="flex flex-col items-center relative">
              <div className="relative w-10 h-10 overflow-hidden mb-4">
                <Image src={logo} alt={company} fill className="object-cover" />
              </div>
            </div>

            {/* Roles as timeline items */}
            <div>
              {roles.map((roleObj, index) => (
                <div key={index} className="mb-8 last:mb-0 relative pl-4">
                  {/* Vertical line connecting roles (except for the last role) */}
                  {index < roles.length - 1 && (
                    <div className="absolute top-6 bottom-[-8px] left-1.5 w-0.5 bg-divider"></div>
                  )}
                  
                  {/* Small dot for each role */}
                  <div className="absolute top-3 left-0 w-3 h-3 rounded-full bg-blue-900 z-10"></div>
                  
                  <h3 className="text-base font-medium leading-normal text-white ml-2">{roleObj.role}</h3>
                  <p className="text-base font-normal leading-normal text-muted ml-2">
                    {company} | {roleObj.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
