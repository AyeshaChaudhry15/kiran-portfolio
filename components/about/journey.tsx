"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCode,
  FaBriefcase,
  FaMobileAlt,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "Jan 2026 — Present",
    company: "Evermont Global Technologies",
    role: "CEO & Founder",
    type: "Leadership",
    location: "Bahawalpur, Punjab, Pakistan · On-site",
    description:
      "Founded and currently lead Evermont Global Technologies, helping startups and businesses build scalable digital solutions, software products and modern technology solutions.",
    icon: FaUserTie,
    side: "left",
  },

  {
    period: "Oct 2025 — Jan 2026",
    company: "Code's Thinker",
    role: "Senior Software Engineer",
    type: "Professional",
    location: "Bahawalpur, Punjab, Pakistan",
    description:
      "Delivered real-time tracking solutions, WebSocket communication and route optimization for fleet management applications while improving operational efficiency and integrating REST API solutions.",
    icon: FaCode,
    side: "right",
  },

  {
    period: "Mar 2023 — Mar 2024",
    company: "CAS — Center for Advance Solutions",
    role: "Android Developer",
    type: "Professional",
    location: "Punjab, Pakistan",
    description:
      "Developed native Android applications using Java and integrated REST APIs and Firebase for real-time data management and application functionality.",
    icon: FaCode,
    side: "left",
  },

  {
    period: "May 2022 — Aug 2025",
    company: "ITSH Tech Solution House",
    role: "International IT Recruiter",
    type: "Freelance",
    location: "Pakistan · Remote",
    description:
      "Identified and recruited qualified candidates for IT and software development roles through LinkedIn, job portals and professional networks while supporting technical recruitment processes.",
    icon: FaUsers,
    side: "right",
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".journey-heading",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        },
      );

      gsap.fromTo(
        ".journey-item",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey-list",
            start: "top 78%",
          },
        },
      );

      gsap.to(".journey-core", {
        boxShadow:
          "0 0 25px rgba(47,128,255,.6), 0 0 55px rgba(47,128,255,.18)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#071225] px-4 py-20 text-[#F4F7FC] sm:px-6 sm:py-24 md:px-8 lg:px-10 lg:py-28 xl:px-12 xl:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[8%] h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[100px] sm:h-96 sm:w-96 md:h-[500px] md:w-[500px]" />

        <div className="absolute -right-40 bottom-[5%] h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[100px] sm:h-96 sm:w-96 md:h-[500px] md:w-[500px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1000px]">
        {/* Heading */}
        <div className="journey-heading mb-12 text-center sm:mb-16 md:mb-20">
          <span className="inline-block text-[9px] font-bold uppercase tracking-[0.25em] text-[#4DA3FF] sm:text-[10px]">
            MY JOURNEY
          </span>

          <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.08] tracking-[-0.05em] text-[#F4F7FC] sm:text-[40px] md:text-[44px] lg:text-[48px]">
            A Journey of{" "}
            <em className="text-[#4DA3FF]">Growth.</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[12px] leading-7 text-[#849AB4] sm:text-[13px] md:text-[14px]">
            Every experience has shaped the way I approach technology,
            problem-solving and building digital products.
          </p>
        </div>

        {/* Vertical Journey */}
        <div className="journey-list relative">
          {/* Vertical Line */}
          <div className="journey-line absolute bottom-5 left-5 top-5 w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent sm:left-6" />

          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <div
                key={`${experience.company}-${experience.role}-${experience.period}-${index}`}
                className="journey-item relative mb-7 pl-14 last:mb-0 sm:pl-16"
              >
                {/* Timeline Core */}
                <div className="journey-core absolute left-[11px] top-7 z-10 flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-[#071225] bg-[#4DA3FF] shadow-[0_0_16px_rgba(47,128,255,.55)] sm:left-[15px]">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* Journey Card */}
                <article className="journey-card relative overflow-hidden rounded-2xl border border-[rgba(120,160,210,.16)] bg-gradient-to-br from-[rgba(14,32,55,.96)] to-[rgba(7,19,35,.98)] p-5 shadow-[0_15px_45px_rgba(0,0,0,.16)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_20px_55px_rgba(0,0,0,.25),0_0_35px_rgba(47,128,255,.1)] sm:p-6 md:p-7"
                >
                  {/* Subtle Card Glow */}
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/[0.035] blur-[50px]" />

                  {/* Top Row */}
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[9px] text-[#4DA3FF] sm:text-[10px]">
                        <FaCalendarDays className="text-[9px]" />
                        {experience.period}
                      </span>

                      <h3 className="mt-5 font-serif text-[20px] font-normal leading-tight text-[#F2F6FC] sm:text-[23px]">
                        {experience.company}
                      </h3>

                      <h4 className="mt-1.5 text-[13px] font-semibold leading-5 text-[#4DA3FF] sm:text-[14px]">
                        {experience.role}
                      </h4>
                    </div>

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.06] text-blue-400">
                      <Icon className="text-sm" />
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="relative mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-[#71869F] sm:text-[11px]">
                    <div className="flex items-center gap-2">
                      <FaLocationDot className="shrink-0 text-blue-400/70" />
                      <span>{experience.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(77,163,255,.6)]" />
                      <span>{experience.type}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-gradient-to-r from-blue-500/25 via-blue-900/40 to-transparent" />

                  {/* Description */}
                  <p className="relative max-w-3xl text-[11px] leading-6 text-[#8196B0] sm:text-[12px] sm:leading-7">
                    {experience.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-1 w-8 rounded-full bg-blue-400/70" />
                    <span className="h-1 w-2 rounded-full bg-cyan-400/40" />
                    <span className="h-px flex-1 bg-blue-900/30" />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 640px) {
          #journey {
            padding-top: 75px;
            padding-bottom: 75px;
          }

          .journey-heading {
            margin-bottom: 45px;
          }

          .journey-heading h2 {
            font-size: 34px;
          }

          .journey-heading p {
            font-size: 12px;
            line-height: 1.8;
          }

          .journey-list {
            padding-left: 0;
          }

          .journey-line {
            left: 4px;
          }

          .journey-core {
            left: -1px;
            top: 30px;
            width: 10px;
            height: 10px;
          }

          .journey-core > div {
            display: none;
          }

          .journey-item {
            padding-left: 25px;
            margin-bottom: 25px;
          }

          .journey-card {
            padding: 17px;
            border-radius: 12px;
          }

          .journey-card h3 {
            font-size: 17px;
          }

          .journey-card h4 {
            font-size: 12px;
          }
        }

        @media (max-width: 380px) {
          #journey {
            padding-left: 14px;
            padding-right: 14px;
          }

          .journey-line {
            left: 3px;
          }

          .journey-core {
            left: -2px;
          }

          .journey-item {
            padding-left: 23px;
          }

          .journey-card {
            padding: 15px;
          }

          .journey-card h3 {
            font-size: 16px;
          }

          .journey-heading h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}