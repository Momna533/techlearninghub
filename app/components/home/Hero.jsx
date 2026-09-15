"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero-1.png",
    eyebrow: "SOFTWARE · WEB · DIGITAL",
    title: "Technology that helps your",
    highlight: "business move forward.",
    description:
      "We build websites, software and digital solutions that are practical, reliable and made around the way your business works.",
    href: "/services/software-development",
    cta: "Explore Our Services",
    secondary: "Start a Project",
    services: ["Web Development", "Custom Software", "Digital Solutions"],
    technologies: ["React", "Next.js", "Node.js", "Cloud"],
    stat: "50+",
    statLabel: "Digital Projects",
    tag: "SOFTWARE SOLUTIONS",
  },
  {
    image: "/images/hero-2.png",
    eyebrow: "DESIGN · DEVELOPMENT · SUPPORT",
    title: "From an idea to a",
    highlight: "working digital product.",
    description:
      "From websites and dashboards to business software and mobile apps, we turn ideas into products people can use and businesses can depend on.",
    href: "/services/software-solutions",
    cta: "View Our Solutions",
    secondary: "Discuss Your Idea",
    services: ["Websites", "Business Software", "Mobile Apps"],
    technologies: ["React", "Next.js", "Node.js", "Flutter"],
    stat: "24/7",
    statLabel: "Digital Support",
    tag: "BUILD WITH CONFIDENCE",
  },
  {
    image: "/images/hero-3.png",
    eyebrow: "BUSINESS · TECHNOLOGY · GROWTH",
    title: "Better technology for",
    highlight: "better business results.",
    description:
      "We combine design, development and practical technology to create digital products that improve everyday work and support long-term growth.",
    href: "/services",
    cta: "See What We Do",
    secondary: "Talk to Our Team",
    services: ["Business Solutions", "Web Applications", "Digital Growth"],
    technologies: ["React", "Node.js", "Python", "Cloud"],
    stat: "10+",
    statLabel: "Business Solutions",
    tag: "DIGITAL GROWTH",
  },
];

const ease = [0.22, 1, 0.36, 1];

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide = slides[activeSlide];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="hero"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#071B36] font-dm-sans text-white lg:min-h-[850px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          scale: [1, 1.025, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_76%_45%,rgba(37,99,235,0.16),transparent_32%),linear-gradient(115deg,#071B36_0%,#092344_52%,#0A284B_100%)]"
      />

      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[42%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#FFC400]/10 blur-[120px]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_35%,rgba(0,0,0,0.18)_100%)]" />

      <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col justify-center px-5 py-20 sm:px-8 lg:min-h-[850px] lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 xl:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,
                y: -12,
                transition: {
                  duration: 0.3,
                  ease,
                },
              }}
              className="relative z-20 max-w-3xl"
            >
              <motion.div
                variants={itemVariants}
                className="mb-6 flex flex-wrap items-center gap-3 sm:mb-7"
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 backdrop-blur-xl sm:px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFC400] shadow-[0_0_14px_rgba(255,196,0,0.55)]" />

                  <span className="font-dm-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white/65 sm:text-[10px]">
                    {slide.tag}
                  </span>
                </div>

                <span className="font-dm-mono text-[9px] tracking-[0.14em] text-white/30 sm:text-[10px]">
                  / 0{activeSlide + 1} — 0{slides.length}
                </span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="mb-4 font-dm-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#FFC400] sm:text-[11px]"
              >
                {slide.eyebrow}
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="max-w-4xl font-hikasani text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-[2.8rem] md:text-[3.25rem] lg:text-[3.55rem] xl:text-[4.1rem]"
              >
                {slide.title}{" "}
                <span className="text-white/45">{slide.highlight}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base"
              >
                {slide.description}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-7 flex flex-wrap gap-2"
              >
                {slide.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 font-dm-mono text-[9px] uppercase tracking-[0.08em] text-white/45 backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:text-white/75"
                  >
                    {service}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href={slide.href}
                  className="group inline-flex h-12 items-center justify-center rounded-lg bg-[#FFC400] px-5 text-sm font-semibold text-[#071B36] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD22F] hover:shadow-[0_15px_45px_rgba(255,196,0,0.18)]"
                >
                  {slide.cta}

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="https://wa.me/923080777142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.035] px-5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
                >
                  {slide.secondary}
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-9 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                    <span className="font-dm-mono text-[11px] text-[#FFC400]">
                      {slide.stat}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {slide.statLabel}
                    </p>

                    <p className="mt-0.5 font-dm-mono text-[9px] uppercase tracking-[0.08em] text-white/30">
                      Built with purpose
                    </p>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-white/10 sm:block" />

                <div>
                  <p className="font-dm-mono text-[9px] uppercase tracking-[0.14em] text-white/30">
                    Our approach
                  </p>

                  <p className="mt-1 text-sm text-white/55">
                    Strategy · Design · Development · Support
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`visual-${activeSlide}`}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.8,
                ease,
              }}
              className="relative z-10 hidden min-h-[420px] items-center justify-center lg:flex lg:min-h-[600px]"
            >
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[700px]"
              >
                <div className="absolute inset-12 rounded-[4rem] bg-blue-500/10 blur-3xl" />

                <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-2 shadow-[0_35px_110px_rgba(0,0,0,0.42)] backdrop-blur-xl"
                >
                  <div className="relative aspect-[1.18/1] overflow-hidden rounded-xl bg-[#0B2342]">
                    <Image
                      src={slide.image}
                      alt={`${slide.title} ${slide.highlight}`}
                      fill
                      sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 52vw, 680px"
                      className="object-cover object-center"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(7,27,54,0.25)_100%)]" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -20,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35,
                    ease,
                  }}
                  className="absolute bottom-[5%] left-[-1%] rounded-xl border border-white/10 bg-[#071B36]/90 px-5 py-4 shadow-2xl backdrop-blur-xl"
                >
                  <p className="font-dm-mono text-[9px] uppercase tracking-[0.14em] text-white/30">
                    Technology
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {slide.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/[0.06] bg-white/[0.045] px-2.5 py-1.5 font-dm-mono text-[9px] text-white/55"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.45,
                    ease,
                  }}
                  className="absolute right-[-2%] top-[18%] rounded-xl border border-white/10 bg-[#071B36]/90 p-4 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFC400] shadow-[0_0_14px_rgba(255,196,0,0.65)]" />

                    <div>
                      <p className="font-dm-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
                        Project status
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white">
                        Building for growth
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.55,
                    ease,
                  }}
                  className="absolute -bottom-5 right-[10%] rounded-xl border border-white/10 bg-[#071B36]/90 px-5 py-4 shadow-2xl backdrop-blur-xl"
                >
                  <p className="font-dm-mono text-[9px] uppercase tracking-[0.13em] text-white/30">
                    Development process
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-1.5 w-12 rounded-full bg-[#FFC400]" />
                    <span className="h-1.5 w-9 rounded-full bg-white/20" />
                    <span className="h-1.5 w-9 rounded-full bg-white/20" />
                    <span className="h-1.5 w-9 rounded-full bg-white/20" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease,
          }}
          className="relative z-30 mt-10 flex items-center justify-between border-t border-white/10 pt-5 lg:mt-5"
        >
          <div className="flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeSlide === index
                    ? "w-10 bg-[#FFC400]"
                    : "w-5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-sm text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-sm text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
