import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaBrain,
} from "react-icons/fa";

import type { IconType } from "react-icons";

interface SkillCategory {
  title: string;
  description: string;
  icon: IconType;
  technologies: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Mobile App Development",
    description:
      "Building production-ready cross-platform applications with Flutter, Dart, Firebase, APIs, and modern mobile architecture.",
    icon: FaMobileAlt,
    technologies: ["Flutter", "Dart", "Android", "iOS", "Firebase"],
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive interfaces with modern frontend technologies and component-based architecture.",
    icon: FaCode,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML"],
  },
   {
    title: "AI Integration",
    description:
      "Integrating AI-powered solutions into applications to build intelligent features, automate workflows, and enhance user experiences.",
    icon: FaBrain,
    technologies: [
      "OpenAI API",
      "Gemini API",
      "AI Chatbots",
      "AI Automation",
      "AI-Powered Features",
    ],
  },
  {
    title: "Database Management",
    description:
      "Working with structured and cloud databases for reliable data storage, synchronization, and application performance.",
    icon: FaDatabase,
    technologies: ["Firebase", "Firestore", "SQL", "Cloud Database"],
  },
  {
    title: "APIs & Integration",
    description:
      "Connecting applications with REST APIs, third-party services, authentication systems, and cloud platforms.",
    icon: FaCloud,
    technologies: ["REST APIs", "JSON", "Firebase", "Authentication"],
  },
 
];

export default function SkillCategories() {
  return (
    <section
      id="technical-skills"
      className="relative w-full overflow-hidden bg-[#0B1323] px-6 py-20 sm:px-10 lg:px-14"
    >
      <div className="pointer-events-none absolute left-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-900/30 blur-[160px]" />

      <div className="relative z-10 w-full">
        <div className="mb-10 w-full text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-100">
            Technical Expertise
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What I Work With
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-50/80">
            My technical skill set covers mobile development, frontend
            engineering, backend services, databases, AI integration,
            and application integrations.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`group flex h-full min-h-[320px] w-full flex-col rounded-2xl border border-white/15 bg-[#071426]/90 p-5 shadow-[0_20px_60px_rgba(0,20,80,0.2)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-[#091a31] ${
                  index < 3
                    ? "xl:col-span-2"
                    : index === 3
                      ? "xl:col-start-2 xl:col-span-2"
                      : "xl:col-span-2"
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/10 text-blue-300 transition duration-300 group-hover:border-blue-300/60 group-hover:bg-blue-500/20">
                  <Icon size={18} />
                </div>

                <h3 className="mt-4 min-h-[48px] text-base font-bold leading-6 text-white">
                  {category.title}
                </h3>

                <p className="mt-2 min-h-[96px] text-[15px] leading-5 text-slate-300">
                  {category.description}
                </p>

                <div className="mt-auto flex min-h-[64px] content-start flex-wrap gap-2 pt-4">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="h-fit rounded-md border border-blue-400/20 bg-blue-500/10 px-2 py-1 text-[12px] font-medium text-blue-100 transition hover:border-blue-300/50 hover:bg-blue-500/20 hover:text-white"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}