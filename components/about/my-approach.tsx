"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: "◉",
    title: "Understand",
    description:
      "I deeply understand the problem, users, business goals and technical requirements first.",
  },
  {
    number: "02",
    icon: "◇",
    title: "Design",
    description:
      "I plan the product flow, architecture and technical direction around the actual requirements.",
  },
  {
    number: "03",
    icon: "</>",
    title: "Build",
    description:
      "I write clean, efficient and scalable code using modern development practices.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Deliver",
    description:
      "I test, optimize and deliver production-ready solutions that create real impact.",
  },
];

export default function MyApproach() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector(
        ".approach-heading",
      );

      const cards = gsap.utils.toArray<HTMLElement>(".approach-card");

      gsap.set([heading, ...cards], {
        opacity: 1,
      });

      if (heading) {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      }

      ScrollTrigger.batch(cards, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: "power3.out",
            },
          );
        },
      });

      gsap.to(".approach-number", {
        opacity: 0.55,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "sine.inOut",
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="approach"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        padding: "120px 5%",
        overflow: "hidden",
        background: "#071225",
        color: "#F4F7FC",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-10%",
            top: "10%",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(47,128,255,.06)",
            filter: "blur(120px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-10%",
            bottom: "5%",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(47,128,255,.05)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          width: "min(1180px,100%)",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          className="approach-heading"
          style={{
            marginBottom: "60px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              color: "#4DA3FF",
              fontFamily: "Arial,sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: ".25em",
            }}
          >
            <span
              style={{
                width: "27px",
                height: "1px",
                background: "#4DA3FF",
              }}
            />

            MY APPROACH
          </span>

          <h2
            style={{
              margin: "18px 0 0",
              color: "#F4F7FC",
              fontFamily: "Georgia,serif",
              fontSize: "clamp(40px,6vw,52px)",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-.055em",
            }}
          >
            From Idea To{" "}
            <em
              style={{
                color: "#4DA3FF",
                fontStyle: "italic",
              }}
            >
              Impact.
            </em>
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "22px 0 0",
              color: "#8196B0",
              fontFamily: "Arial,sans-serif",
              fontSize: "13px",
              lineHeight: 1.8,
            }}
          >
            A structured approach that turns ideas into polished,
            scalable and meaningful digital products.
          </p>
        </div>

        {/* Process Container */}
        <div
          style={{
            position: "relative",
            padding: "35px",
            border: "1px solid rgba(120,160,210,.15)",
            borderRadius: "20px",
            background:
              "linear-gradient(145deg,rgba(13,31,54,.82),rgba(6,18,34,.96))",
            boxShadow: "0 25px 80px rgba(0,0,0,.18)",
            overflow: "hidden",
          }}
        >
          {/* Grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.08,
              backgroundImage:
                "linear-gradient(rgba(77,145,220,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(77,145,220,.08) 1px,transparent 1px)",
              backgroundSize: "50px 50px",
              pointerEvents: "none",
            }}
          />

          {/* Connecting Line */}
          <div
            className="approach-connection"
            style={{
              position: "absolute",
              left: "12%",
              right: "12%",
              top: "88px",
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,rgba(65,160,255,.5),rgba(65,160,255,.5),transparent)",
            }}
          />

          {/* Cards */}
          <div
            className="approach-grid"
            style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "18px",
            }}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="approach-card"
                style={{
                  position: "relative",
                  minHeight: "320px",
                  padding: "25px 22px",
                  border: "1px solid rgba(120,160,210,.16)",
                  borderRadius: "15px",
                  background:
                    "linear-gradient(145deg,rgba(14,34,58,.96),rgba(7,19,35,.98))",
                  transition:
                    "transform .35s ease,border-color .35s ease,box-shadow .35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px)";
                  e.currentTarget.style.borderColor =
                    "rgba(72,164,255,.65)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0,0,0,.28),0 0 35px rgba(47,128,255,.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(120,160,210,.16)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Number */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "35px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      zIndex: 3,
                      width: "48px",
                      height: "48px",
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid rgba(65,157,255,.45)",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle,rgba(47,128,255,.18),rgba(5,20,38,.95))",
                      color: "#4DA3FF",
                      fontFamily: "monospace",
                      fontSize: "14px",
                      boxShadow:
                        "0 0 20px rgba(47,128,255,.12)",
                    }}
                  >
                    {step.icon}
                  </div>

                  <span
                    className="approach-number"
                    style={{
                      color: "rgba(77,163,255,.35)",
                      fontFamily: "monospace",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Step */}
                <p
                  style={{
                    margin: "0 0 10px",
                    color: "#4DA3FF",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                  }}
                >
                  STEP {step.number}
                </p>

                <h3
                  style={{
                    margin: "0 0 12px",
                    color: "#F2F6FC",
                    fontFamily: "Georgia,serif",
                    fontSize: "22px",
                    fontWeight: 400,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#8196B0",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "13px",
                    lineHeight: 1.8,
                  }}
                >
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div
                  style={{
                    position: "absolute",
                    left: "22px",
                    right: "22px",
                    bottom: "20px",
                    height: "1px",
                    background:
                      "linear-gradient(90deg,rgba(77,163,255,.45),transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          #approach {
            padding: 90px 6%;
          }

          .approach-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .approach-connection {
            display: none;
          }
        }

        @media (max-width: 600px) {
          #approach {
            padding: 75px 18px;
          }

          .approach-heading {
            margin-bottom: 40px !important;
          }

          .approach-heading h2 {
            font-size: 36px !important;
          }

          .approach-heading p {
            font-size: 12px !important;
          }

          .approach-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }

          .approach-card {
            min-height: auto !important;
            padding: 22px !important;
          }

          .approach-card > div:first-child {
            margin-bottom: 24px !important;
          }
        }

        @media (max-width: 380px) {
          #approach {
            padding-left: 14px;
            padding-right: 14px;
          }

          .approach-card {
            padding: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}