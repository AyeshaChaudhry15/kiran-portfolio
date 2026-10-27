"use client";

import {
  FaCode,
  FaCloud,
  FaDatabase,
  FaShieldHalved,
  FaGaugeHigh,
  FaPlug,
} from "react-icons/fa6";

const expertise = [
  {
    title: (
      <>
        Full Stack
        <br />
        Development
      </>
    ),
    description: (
      <>
        End-to-end web
        <br />
        applications
      </>
    ),
    icon: FaCode,
    accent: "blue",
  },
  {
    title: (
      <>
        API Design &
        <br />
        Integration
      </>
    ),
    description: (
      <>
        Robust APIs and
        <br />
        seamless integrations
      </>
    ),
    icon: FaPlug,
    accent: "cyan",
  },
  {
    title: <>Cloud & DevOps</>,
    description: (
      <>
        Reliable deployments
        <br />
        and infrastructure
      </>
    ),
    icon: FaCloud,
    accent: "blue",
  },
  {
    title: (
      <>
        Database Design
        <br />
        & Optimization
      </>
    ),
    description: (
      <>
        Structured, scalable
        <br />
        and optimized data
      </>
    ),
    icon: FaDatabase,
    accent: "cyan",
  },
  {
    title: (
      <>
        Security & Best
        <br />
        Practices
      </>
    ),
    description: (
      <>
        Secure, reliable
        <br />
        and compliant apps
      </>
    ),
    icon: FaShieldHalved,
    accent: "blue",
  },
  {
    title: (
      <>
        Performance
        <br />
        Optimization
      </>
    ),
    description: (
      <>
        Fast, efficient and
        <br />
        high-performing apps
      </>
    ),
    icon: FaGaugeHigh,
    accent: "cyan",
  },
];

export default function AreasOfExpertise() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#071225] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-100px] h-[400px] w-[400px] rounded-full bg-blue-500/[0.07] blur-[140px]" />

        <div className="absolute -right-32 bottom-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.055] blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1300px]">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-start sm:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-300">
              What I Do
            </p>
          </div>

          <h2 className="max-w-[700px] font-serif text-4xl font-normal leading-tight tracking-[-0.04em] text-slate-100 sm:text-5xl lg:text-[52px]">
            Areas of{" "}
            <span className="italic text-blue-400">
              Expertise.
            </span>
          </h2>

          <p className="mt-5 max-w-[620px] text-sm leading-7 text-slate-400">
            Technical expertise focused on building reliable, scalable and
            high-performance digital products.
          </p>
        </div>

        {/* Expertise Layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            const isCyan = item.accent === "cyan";
            const isFeatured = index === 0;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border ${
                  isCyan
                    ? "border-cyan-500/20 hover:border-cyan-400/50"
                    : "border-blue-500/20 hover:border-blue-400/50"
                } bg-gradient-to-br from-[#0D1B30] via-[#0A1729] to-[#071225] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${
                  isFeatured
                    ? "min-h-[330px] lg:col-span-5 lg:row-span-2"
                    : "min-h-[245px] lg:col-span-3"
                }`}
              >
                {/* Glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[70px] ${
                    isCyan ? "bg-cyan-500/10" : "bg-blue-500/10"
                  }`}
                />

                {/* Large featured background number */}
                {isFeatured && (
                  <span className="pointer-events-none absolute bottom-[-35px] right-[-10px] font-mono text-[150px] font-bold leading-none text-blue-400/[0.035]">
                    01
                  </span>
                )}

                <div
                  className={`relative flex h-full flex-col ${
                    isFeatured
                      ? "justify-between p-7 sm:p-9"
                      : "p-6"
                  }`}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex items-center justify-center rounded-xl border ${
                        isCyan
                          ? "border-cyan-400/20 bg-cyan-400/[0.06]"
                          : "border-blue-400/20 bg-blue-400/[0.06]"
                      } ${
                        isFeatured ? "h-16 w-16" : "h-12 w-12"
                      }`}
                    >
                      <Icon
                        className={`${
                          isFeatured ? "text-[30px]" : "text-[23px]"
                        } ${
                          isCyan
                            ? "text-cyan-400"
                            : "text-blue-400"
                        } transition-transform duration-500 group-hover:scale-110`}
                      />
                    </div>

                    <span className="font-mono text-[10px] text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={
                      isFeatured
                        ? "mt-14"
                        : "mt-8"
                    }
                  >
                    <h3
                      className={`font-serif font-normal leading-tight text-slate-100 ${
                        isFeatured
                          ? "text-3xl sm:text-4xl"
                          : "text-xl"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-slate-400 ${
                        isFeatured
                          ? "mt-5 text-sm leading-7"
                          : "mt-4 text-xs leading-6"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom line */}
                  <div
                    className={`mt-8 h-px w-full bg-gradient-to-r ${
                      isCyan
                        ? "from-cyan-400/50"
                        : "from-blue-400/50"
                    } via-slate-700/30 to-transparent`}
                  />

                  {/* Hover accent */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
                      isCyan
                        ? "bg-cyan-400"
                        : "bg-blue-400"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding-top: 80px;
            padding-bottom: 80px;
          }
        }

        @media (max-width: 640px) {
          section {
            padding-top: 70px;
            padding-bottom: 70px;
          }
        }
      `}</style>
    </section>
  );
}