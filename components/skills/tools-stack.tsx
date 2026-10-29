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
  { name: "Flutter", icon: FaMobileAlt },
  { name: "Dart", icon: FaCode },
  { name: "Firebase", icon: FaFire },
  { name: "Android Studio", icon: FaAndroid },
  { name: "VS Code", icon: FaLaptopCode },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "REST APIs", icon: FaPlug },
  { name: "Postman", icon: FaPaperPlane },
  { name: "Figma", icon: FaFigma },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: FaLayerGroup },
  { name: "TypeScript", icon: FaCode },
  { name: "Tailwind CSS", icon: FaWind },
  { name: "Firestore", icon: FaDatabase },
  { name: "Cloud Services", icon: FaCloud },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function ToolsStack() {
  return (
    <section className="relative mx-auto max-w-full overflow-hidden bg-[#0B1323] px-6 pb-24 pt-8 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[120px]" />

      <motion.div
        className="relative text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
          Development Toolkit
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Tools & Technologies
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          Technologies and development tools I use to design, develop, test,
          integrate, and deploy applications.
        </p>
      </motion.div>

      <motion.div
        className="relative mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {tools.map((tool, index) => {
          const Icon = tool.icon;

          return (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: "rgba(96,165,250,0.5)" }}
              className="group relative flex min-h-[76px] items-center gap-3 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-4 transition-colors duration-300 hover:bg-blue-500/[0.06] sm:gap-4 sm:px-4"
            >
              <div className="absolute inset-y-0 left-0 w-[2px] scale-y-0 bg-blue-400 transition-transform duration-300 group-hover:scale-y-100" />

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-400/[0.08] text-blue-400 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/[0.15]">
                <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium leading-5 text-slate-200 transition-colors duration-300 group-hover:text-white">
                  {tool.name}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-600">
                  Tool {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}