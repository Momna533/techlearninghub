"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero-1.jpg",
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
    image: "/images/hero-2.jpg",
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
    image: "/images/hero-3.jpg",
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
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slide = slides[activeSlide];

  useEffect(() => {
    const timer = setInterval(
      () => {
        setActiveSlide((current) => (current + 1) % slides.length);
      },
      isHovered ? 4000 : 3000,
    );

    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="hero"
      className="relative isolate h-[900px] overflow-hidden bg-[#071B36] font-dm-sans text-white sm:h-[800px] lg:h-[850px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[#071B36]/70" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,54,0.96)_0%,rgba(7,27,54,0.84)_32%,rgba(7,27,54,0.52)_58%,rgba(7,27,54,0.28)_100%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(7,27,54,0.72)_0%,transparent_35%,transparent_100%)]" />

      <motion.div
        animate={{
          scale: [1, 1.018, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(115deg,rgba(7,27,54,0.12)_0%,rgba(9,35,68,0.06)_52%,rgba(10,40,75,0.12)_100%)]"
      />

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          opacity: [0.14, 0.22, 0.14],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[43%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 18, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#FFC400]/10 blur-[130px]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_38%,rgba(0,0,0,0.2)_100%)]" />

      <div className="relative mx-auto flex h-full max-w-[1500px] flex-col px-5 py-12 lg:py-20 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid h-full items-center lg:grid-cols-1">
          {" "}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,
                y: -10,
                transition: {
                  duration: 0.35,
                  ease,
                },
              }}
              className="relative z-20 flex min-h-[620px] max-w-3xl flex-col justify-start pt-12 lg:pt-22  sm:pt-28 lg:min-h-[620px] lg:justify-center lg:pt-0 lg:pr-4"
            >
              <motion.div
                variants={itemVariants}
                className="mb-6 flex flex-wrap items-center gap-3 sm:mb-7"
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.045] px-3.5 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-4">
                  <span className="h-2 w-2 rounded-full bg-[#FFC400] shadow-[0_0_16px_rgba(255,196,0,0.55)]" />

                  <span className="font-dm-mono text-[9px] font-medium uppercase tracking-[0.15em] text-white/65 sm:text-[10px]">
                    {slide.tag}
                  </span>
                </div>

                <span className="font-dm-mono text-[9px] tracking-[0.15em] text-white/25 sm:text-[10px]">
                  / 0{activeSlide + 1} — 0{slides.length}
                </span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="mb-4 font-dm-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[#FFC400] sm:text-[11px]"
              >
                {slide.eyebrow}
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="max-w-4xl font-hikasani text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[2.85rem] md:text-[3.3rem] lg:text-[3.65rem] xl:text-[4.15rem]"
              >
                {slide.title}{" "}
                <span className="text-white/[0.5]">{slide.highlight}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-xl text-[15px] leading-7 text-white/[0.58] sm:text-base"
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
                    className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 font-dm-mono text-[9px] uppercase tracking-[0.08em] text-white/[0.44] shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white/[0.78]"
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
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-[#FFC400] px-5 text-sm font-semibold text-[#071B36] shadow-[0_12px_35px_rgba(255,196,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#FFD22F] hover:shadow-[0_18px_50px_rgba(255,196,0,0.2)]"
                >
                  <span className="relative z-10">{slide.cta}</span>

                  <span className="relative z-10 ml-2 transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="https://wa.me/923080777142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center justify-center rounded-lg border border-white/[0.13] bg-white/[0.025] px-5 text-sm font-medium text-white shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.24] hover:bg-white/[0.07] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
                >
                  {slide.secondary}
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-9 flex flex-col gap-5 border-t border-white/[0.09] pt-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="hidden md:flex lg:flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035] shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                    <span className="font-dm-mono text-[11px] text-[#FFC400]">
                      {slide.stat}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {slide.statLabel}
                    </p>

                    <p className="mt-0.5 font-dm-mono text-[9px] uppercase tracking-[0.08em] text-white/25">
                      Built with purpose
                    </p>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-white/[0.09] sm:block" />

                <div>
                  <p className="font-dm-mono text-[9px] uppercase tracking-[0.14em] text-white/25">
                    Our approach
                  </p>

                  <p className="mt-1 text-sm text-white/[0.5]">
                    Strategy · Design · Development · Support
                  </p>
                </div>
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
            duration: 0.7,
            delay: 0.6,
            ease,
          }}
          className="relative z-30 mt-10 flex items-center justify-between border-t border-white/[0.09] pt-5 lg:mt-5"
        >
          <div className="flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-700 ${
                  activeSlide === index
                    ? "w-10 bg-[#FFC400] shadow-[0_0_12px_rgba(255,196,0,0.28)]"
                    : "w-5 bg-white/[0.18] hover:bg-white/[0.38]"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] text-sm text-white/[0.5] shadow-[0_8px_25px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-400 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.07] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] text-sm text-white/[0.5] shadow-[0_8px_25px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-400 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.07] hover:text-white"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
