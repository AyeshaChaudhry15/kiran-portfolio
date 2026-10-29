
"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  FaArrowRight,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaGlobe,
  FaMobileAlt,
  FaChartBar,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiAndroid,
} from "react-icons/si";

const stats = [
  {
    icon: FaRocket,
    value: "10+",
    label: "Projects Built",
    color: "text-blue-400",
  },
  {
    icon: FaMobileAlt,
    value: "Cross-Platform",
    label: "Mobile Apps",
    color: "text-sky-300",
  },
  {
    icon: FaCode,
    value: "Clean",
    label: "Code Architecture",
    color: "text-blue-400",
  },
  {
    icon: FaShieldAlt,
    value: "Secure",
    label: "Firebase Integration",
    color: "text-sky-300",
  },
  {
    icon: FaGlobe,
    value: "Modern",
    label: "User Experiences",
    color: "text-blue-400",
  },
];

const technologies = [
  { name: "Flutter", icon: SiFlutter, color: "text-sky-300" },
  { name: "Dart", icon: SiDart, color: "text-blue-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-300" },
  { name: "Android", icon: SiAndroid, color: "text-emerald-300" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 24,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.94,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".tech-card", {
        opacity: 0,
        y: 15,
        duration: 0.55,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".hero-stat", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.45,
        ease: "power3.out",
      });

      gsap.to(".portrait-glow", {
        opacity: 0.7,
        scale: 1.08,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#0B1220] text-slate-50"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[-120px] h-[350px] w-[350px] rounded-full bg-blue-600/[0.08] blur-[130px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute bottom-[-100px] right-[-80px] h-[350px] w-[350px] rounded-full bg-sky-500/[0.07] blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.07),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-8 sm:px-8 lg:px-14 lg:pt-12">
        <div className="grid items-center gap-10 lg:min-h-[560px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="hero-content relative z-10 order-2 max-w-2xl lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300 sm:text-xs">
                Flutter & App Developer
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[62px]">
              I Build{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-slate-100 bg-clip-text text-transparent">
                Mobile Apps
              </span>
              <span className="block mt-2 text-slate-100">
                That Matter.
              </span>
            </h1>

            <p className="mt-6 max-w-[510px] text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I&apos;m Kiran Fatima, an App Developer crafting beautiful,
              scalable, and user-friendly mobile applications with Flutter,
              Dart, and Firebase.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#2F80FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(47,128,255,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_12px_35px_rgba(47,128,255,0.28)]"
              >
                View My Work
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-700 bg-white/[0.025] px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/[0.05]"
              >
                Contact Me
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-3 text-xs text-slate-400 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Open to exciting app development opportunities
            </div>
          </div>

          <div className="relative order-1 mx-auto flex min-h-[350px] w-full max-w-[440px] items-center justify-center sm:min-h-[470px] sm:max-w-[500px] lg:order-2 lg:min-h-[540px] lg:max-w-none">
            <div className="portrait-glow absolute left-1/2 top-[44%] h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 opacity-40 blur-[70px] sm:h-[330px] sm:w-[330px] sm:blur-[90px] lg:h-[370px] lg:w-[370px]" />

            <div className="absolute left-1/2 top-[44%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 sm:h-[390px] sm:w-[390px] lg:h-[430px] lg:w-[430px]" />

            <div className="absolute left-1/2 top-[44%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-500/20 sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]" />

            <div className="relative z-10 mt-[-18px] h-[230px] w-[230px] sm:h-[310px] sm:w-[310px] lg:h-[350px] lg:w-[350px]">
              <div className="absolute -inset-[6px] rounded-full border border-blue-400/50" />

              <div className="absolute -inset-[12px] rounded-full border border-sky-300/10" />

              <div className="relative h-full w-full overflow-hidden rounded-full border-[5px] border-[#111C2E] bg-[#111C2E] shadow-[0_25px_70px_rgba(0,0,0,0.4)]">
                <img
                  src="/portfolio.jpeg"
                  alt="Kiran Fatima - App Developer"
                  className="h-full w-full rounded-full object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#0B1220]/40 via-transparent to-blue-300/[0.04]" />
              </div>

              <span className="absolute right-[12%] top-[5%] h-3 w-3 rounded-full border-2 border-[#0B1220] bg-sky-300 shadow-[0_0_14px_rgba(125,211,252,0.5)]" />

              <span className="absolute bottom-[13%] left-[1%] h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.6)]" />
            </div>

            <div className="tech-card absolute left-[0%] top-[7%] z-20 flex items-center gap-2.5 rounded-xl border border-slate-700/80 bg-[#111C2E]/95 px-3 py-2.5 shadow-xl backdrop-blur-md sm:left-[2%] sm:top-[8%] sm:px-4 sm:py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-xl text-sky-300">
                <SiFlutter />
              </div>

              <div>
                <p className="text-xs font-semibold text-white sm:text-sm">
                  Flutter
                </p>
                <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">
                  App Development
                </p>
              </div>
            </div>

            <div className="tech-card absolute right-[0%] top-[28%] z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/80 bg-[#111C2E] text-xl text-blue-300 shadow-xl sm:right-[2%] sm:h-14 sm:w-14 sm:text-2xl">
              <SiDart />
            </div>

            <div className="tech-card absolute bottom-[23%] left-[0%] z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/80 bg-[#111C2E] text-xl text-emerald-300 shadow-xl sm:left-[2%] sm:h-14 sm:w-14 sm:text-2xl">
              <SiAndroid />
            </div>

            <div className="tech-card absolute bottom-[10%] right-[0%] z-20 flex items-center gap-2.5 rounded-xl border border-slate-700/80 bg-[#111C2E]/95 px-3 py-2.5 shadow-xl backdrop-blur-md sm:right-[2%] sm:px-4 sm:py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/10 text-xl text-amber-300">
                <SiFirebase />
              </div>

              <div>
                <p className="text-xs font-semibold text-white sm:text-sm">
                  Firebase
                </p>
                <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">
                  Cloud Services
                </p>
              </div>
            </div>

            <div className="absolute bottom-[0%] left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-xl border border-slate-700/80 bg-[#111C2E]/95 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-md sm:bottom-[1%] sm:px-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-lg text-blue-400">
                <FaChartBar />
              </div>

              <div>
                <p className="text-base font-bold leading-tight text-white sm:text-lg">
                  10+
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Apps & Projects
                </p>
              </div>

              <span className="ml-2 h-8 w-px bg-slate-700" />

              <div>
                <p className="text-xs font-semibold text-slate-200">
                  Developer
                </p>
                <p className="mt-1 text-[10px] text-slate-500">
                  Flutter & Dart
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0D1728]/90 sm:grid-cols-3 lg:mt-8 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`hero-stat flex min-h-[100px] flex-col items-center justify-center gap-2 px-3 py-5 text-center transition-colors duration-300 hover:bg-blue-500/[0.04] sm:min-h-[110px] ${
                  index !== 0 ? "border-l border-slate-700/50" : ""
                } ${
                  index >= 2 ? "border-t border-slate-700/50 sm:border-t-0" : ""
                } ${index === 3 ? "sm:border-l-0 lg:border-l" : ""}`}
              >
                <Icon className={`text-xl ${stat.color}`} />

                <p className="text-sm font-bold text-slate-100 sm:text-base">
                  {stat.value}
                </p>

                <p className="text-[10px] text-slate-400 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 641px) and (max-width: 1023px) {
          .hero-content {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .hero-content > div:first-child {
            justify-content: center;
          }

          .hero-content > p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-content > div:nth-of-type(2) {
            justify-content: center;
          }

          .hero-content > div:last-child {
            justify-content: center;
          }
        }

        @media (max-width: 500px) {
          .hero-stat:nth-child(2) {
            border-left: 1px solid rgba(51, 65, 85, 0.5) !important;
          }

          .hero-stat:nth-child(3),
          .hero-stat:nth-child(4),
          .hero-stat:nth-child(5) {
            border-left: 0 !important;
          }
        }

        @media (max-width: 380px) {
          .hero-content h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  );
}
