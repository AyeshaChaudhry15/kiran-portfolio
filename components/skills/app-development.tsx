"use client";

import { motion } from "framer-motion";
import {
  FaAndroid,
  FaCloud,
  FaCode,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

const technologies = [
  {
    title: "Flutter",
    description: "Cross-platform application development",
    icon: FaMobileAlt,
  },
  {
    title: "Dart",
    description: "Modern application programming",
    icon: FaCode,
  },
  {
    title: "Firebase",
    description: "Authentication, database and cloud services",
    icon: FaCloud,
  },
  {
    title: "REST APIs",
    description: "Backend communication and integrations",
    icon: FaCode,
  },
  {
    title: "Firestore",
    description: "Cloud database and real-time data",
    icon: FaDatabase,
  },
  {
    title: "Android & iOS",
    description: "Cross-platform mobile deployment",
    icon: FaAndroid,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function AppDevelopment() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1323] px-6 pb-24 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-500/[0.07] blur-[150px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-blue-400" />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
              App Development
            </p>
          </div>

          <h2 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Ideas Into
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Mobile Experiences.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
            I develop reliable mobile applications with clean architecture,
            scalable code, smooth interfaces, and practical integrations
            designed around real user needs.
          </p>

          <div className="mt-9 flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-cyan-400/[0.04]"
            >
              <div className="absolute inset-2 rounded-xl border border-blue-400/10" />
              <FaMobileAlt className="relative text-3xl text-blue-400" />
            </motion.div>

            <div>
              <p className="text-base font-semibold text-white">
                Flutter Specialist
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Android · iOS · Cross-platform
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-blue-400" />
            <div className="h-1 w-5 rounded-full bg-blue-400/30" />
            <div className="h-1 w-2 rounded-full bg-blue-400/15" />
          </div>
        </motion.div>

        <div className="relative">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-sm font-semibold text-white">
                Technology Stack
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Core tools and integrations
              </p>
            </div>

            <span className="rounded-md border border-blue-400/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              06 Technologies
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="divide-y divide-white/[0.07]"
          >
            {technologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <motion.div
                  key={technology.title}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-4 py-5"
                >
                  <span className="w-6 shrink-0 text-xs font-medium tabular-nums text-slate-600 transition-colors group-hover:text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-blue-400 transition-colors duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10">
                    <Icon className="text-lg" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
                      {technology.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {technology.description}
                    </p>
                  </div>

                  <span className="text-sm text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                    →
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}