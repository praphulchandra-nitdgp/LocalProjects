'use client';

import { Code, Database, Cloud, Bot, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const programmingSkills = {
  "Programming Languages": ["Python", "C", "C++", "JavaScript", "MySQL"],
  "Developer Tools": ["Git", "GitHub", "VS Code", "Linux", "Pillow", "Google Gemini API", "Groq API"],
  "Technologies/Frameworks": ["Linux", "Django", "ReactJS", "Streamlit", "Tailwind", "Bootstrap", "LangChain", "ChromaDB", "PyTorch", "TensorFlow", "Numpy", "Pandas", "Keras", "SKLearn"],
  "Core Concepts & Coursework": ["Data Structures & Algorithms (DSA)", "Computer Organisation & Architecture (COA)", "Operating Systems", "Database Management Systems (DBMS)", "Object-Oriented Programming (OOP)", "Prompt Engineering", "Vector Similarity Search"],
  "Languages": ["English", "Telugu", "Hindi"]
};

const otherSkills = [
  {
    icon: Database,
    title: 'Databases',
    description: 'Experience with SQL database systems'
  },
  {
    icon: Cloud,
    title: 'AWS Cloud Computing',
    description: 'Cloud architecture and deployment expertise'
  },
  {
    icon: Bot,
    title: 'Machine Learning',
    description: 'AI and ML model development and implementation'
  },
];

export default function SkillsSection() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold leading-tight tracking-tight px-4">
        Skills
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
        {/* Programming Skills - Expandable */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-divider bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-white flex-shrink-0" />
              <h3 className="text-lg font-bold leading-tight text-white">
                Programming & Development
              </h3>
            </div>
            
            <div className="space-y-4">
              {Object.entries(programmingSkills).map(([category, skills]) => (
                <div key={category} className="border-l-2 border-accent/30 pl-4">
                  <button
                    onClick={() => toggleSection(category)}
                    className="flex items-center gap-2 w-full text-left hover:text-accent transition-colors"
                  >
                    {expandedSections.includes(category) ? (
                      <ChevronDown className="w-4 h-4 text-accent" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted" />
                    )}
                    <h4 className="text-base font-semibold text-white">
                      {category}
                    </h4>
                  </button>
                  
                  {expandedSections.includes(category) && (
                    <div className="mt-3 ml-6">
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 text-sm bg-secondary text-white rounded-full border border-divider hover:border-accent/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-sm text-muted">
              Click on categories to expand and view detailed skills
            </div>
          </div>
        </div>

        {/* Other Skills */}
        {otherSkills.map((skill, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 rounded-lg border border-divider bg-card p-6 hover:bg-card/80 transition-colors"
          >
            <skill.icon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-bold leading-tight text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}