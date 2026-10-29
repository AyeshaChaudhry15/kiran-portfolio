"use client";

import {
  FaMagnifyingGlass,
  FaLightbulb,
  FaCode,
  FaRocket,
  FaCloudArrowUp,
} from "react-icons/fa6";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: (
      <>
        Analyze requirements
        <br />
        and understand the
        <br />
        problem deeply.
      </>
    ),
    icon: FaMagnifyingGlass,
    accent: "blue",
  },
  {
    number: "02",
    title: "Plan & Architect",
    description: (
      <>
        Design efficient
        <br />
        architecture and plan
        <br />
        the right approach.
      </>
    ),
    icon: FaLightbulb,
    accent: "cyan",
  },
  {
    number: "03",
    title: "Develop",
    description: (
      <>
        Build clean, tested and
        <br />
        scalable solutions with
        <br />
        best practices.
      </>
    ),
    icon: FaCode,
    accent: "blue",
  },
  {
    number: "04",
    title: "Optimize",
    description: (
      <>
        Improve performance,
        <br />
        security and overall
        <br />
        user experience.
      </>
    ),
    icon: FaRocket,
    accent: "cyan",
  },
  {
    number: "05",
    title: "Deploy & Improve",
    description: (
      <>
        Deploy, monitor and
        <br />
        continuously enhance
        <br />
        the product.
      </>
    ),
    icon: FaCloudArrowUp,
    accent: "blue",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#071225] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/[0.07] blur-[140px]" />

        <div className="absolute -right-32 bottom-[-120px] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-14 max-w-2xl sm:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-300">
              My Development Approach
            </p>
          </div>

          <h2 className="whitespace-nowrap font-serif text-2xl font-normal leading-[1.05] tracking-[-0.05em] text-slate-100 sm:text-4xl lg:text-[54px]">
            How I Turn Ideas Into{" "}
            <span className="italic text-blue-400">Products.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
            A structured development process focused on clarity, scalability,
            performance and continuous improvement.
          </p>
        </div>

        {/* Process */}
        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-gradient-to-b from-blue-400/60 via-cyan-400/40 to-transparent md:block" />

          <div className="space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCyan = step.accent === "cyan";

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-[#0A1729]/85 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#0C1B30] hover:shadow-[0_20px_60px_rgba(0,0,0,.22)]"
                >
                  {/* Card Glow */}
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[80px] ${
                      isCyan ? "bg-cyan-400/[0.07]" : "bg-blue-400/[0.07]"
                    }`}
                  />

                  <div className="relative flex flex-col md:flex-row md:items-center">
                    {/* Number */}
                    <div className="flex shrink-0 items-center gap-5 border-b border-slate-700/40 px-6 py-5 md:w-[190px] md:border-b-0 md:border-r md:px-8 md:py-8">
                      <div
                        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                          isCyan
                            ? "border-cyan-400/30 bg-cyan-400/[0.06] text-cyan-400"
                            : "border-blue-400/30 bg-blue-400/[0.06] text-blue-400"
                        } font-mono text-sm font-semibold transition-all duration-300 group-hover:scale-105`}
                      >
                        {step.number}
                      </div>

                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                        STEP
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="px-6 py-5 md:w-[150px] md:px-7 md:py-8">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                          isCyan
                            ? "border-cyan-400/25 bg-cyan-400/[0.05]"
                            : "border-blue-400/25 bg-blue-400/[0.05]"
                        }`}
                      >
                        <Icon
                          className={`text-[22px] transition-transform duration-500 group-hover:scale-110 ${
                            isCyan ? "text-cyan-400" : "text-blue-400"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 px-6 pb-6 md:px-5 md:py-8 md:pb-8">
                      <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300 sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden px-8 md:block">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                          isCyan
                            ? "border-cyan-400/20 text-cyan-400"
                            : "border-blue-400/20 text-blue-400"
                        } opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100`}
                      >
                        →
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
                      isCyan ? "bg-cyan-400" : "bg-blue-400"
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          #approach {
            padding-top: 75px;
            padding-bottom: 75px;
          }
        }

        @media (max-width: 480px) {
          #approach {
            padding-left: 16px;
            padding-right: 16px;
          }

          article {
            border-radius: 14px;
          }
        }
      `}</style>
    </section>
  );
}
