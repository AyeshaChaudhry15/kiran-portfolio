"use client";

import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaCode,
  FaFire,
  FaAndroid,
  FaLaptopCode,
  FaGitAlt,
  FaGithub,
  FaPlug,
  FaPaperPlane,
  FaFigma,
  FaReact,
  FaLayerGroup,
  FaDatabase,
  FaWind,
  FaCloud,
} from "react-icons/fa";

const tools = [
  { name: "Flutter", icon: FaMobileAlt, category: "Mobile" },
  { name: "Dart", icon: FaCode, category: "Language" },
  { name: "Firebase", icon: FaFire, category: "Backend" },
  { name: "Android Studio", icon: FaAndroid, category: "IDE" },
  { name: "VS Code", icon: FaLaptopCode, category: "IDE" },
  { name: "Git", icon: FaGitAlt, category: "Version Control" },
  { name: "GitHub", icon: FaGithub, category: "Repository" },
  { name: "REST APIs", icon: FaPlug, category: "Integration" },
  { name: "Postman", icon: FaPaperPlane, category: "API Testing" },
  { name: "Figma", icon: FaFigma, category: "UI/UX Design" },
  { name: "React", icon: FaReact, category: "Frontend" },
  { name: "Next.js", icon: FaLayerGroup, category: "Framework" },
  { name: "TypeScript", icon: FaCode, category: "Language" },
  { name: "Tailwind CSS", icon: FaWind, category: "Styling" },
  { name: "Firestore", icon: FaDatabase, category: "Database" },
  { name: "Cloud Services", icon: FaCloud, category: "Cloud" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

export default function ToolsStack() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1323] px-6 py-20 sm:px-10 lg:px-14">

      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Development Toolkit
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tools & Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Technologies and development tools I use to design, develop,
            test, integrate, and deploy applications.
          </p>

          <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-[11px] font-medium text-blue-200">
              {tools.length} Technologies & Tools
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3.5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group flex items-center gap-3 rounded-full border border-white/[0.09] bg-[#101D32]/90 px-5 py-3 transition-all duration-300 hover:border-blue-400/40 hover:bg-[#162944] hover:shadow-[0_5px_25px_rgba(59,130,246,0.10)]"
              >
                <Icon className="shrink-0 text-base text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />

                <span className="text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}