"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    category: "Custom Software · Business Solutions",
    title: "SOFTWARE DELIVERED TO CLIENTS",
    description:
      "We develop customized software solutions for businesses — from POS systems to management platforms.",
    image: "/images/hero-1.png",
    alt: "Custom software and web application interfaces",
    href: "/our-work/#webapps",
  },
  {
    category: "Corporate · E-commerce · CMS",
    title: "WEBSITES WE DEVELOP",
    description:
      "Modern, responsive and professionally designed websites for businesses and organizations.",
    image: "/images/hero-1.png",
    alt: "Modern business website designs",
    href: "/our-work/#websites",
  },
  {
    category: "Android · iOS · Cross-Platform",
    title: "OUR APPS",
    description:
      "Innovative mobile applications built for real-world needs and everyday usability.",
    image: "/images/hero-1.png",
    alt: "Mobile application interfaces",
    href: "/our-work/#mobile",
  },
];

const filters = [
  { label: "All", href: "/our-work/" },
  { label: "Websites", href: "/our-work/#websites" },
  { label: "Web Apps", href: "/our-work/#webapps" },
  { label: "Mobile Apps", href: "/our-work/#mobile" },
  { label: "3D & Video", href: "/videos/" },
];

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.94,
    rotateX: 10,
    filter: "blur(8px)",
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: index * 0.12,
      ease,
    },
  }),
};

export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#F4F7FA] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-48 top-10 h-[30rem] w-[30rem] rounded-full bg-blue-100/60 blur-3xl"
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-48 bottom-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#FFC400]/[0.035] blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#071B36_1px,transparent_1px),linear-gradient(90deg,#071B36_1px,transparent_1px)] [background-size:72px_72px]" />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            ease,
          }}
          className="absolute left-0 right-0 top-0 h-px origin-left bg-[#071B36]/[0.08]"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease,
          }}
          className="absolute bottom-0 left-0 right-0 h-px origin-right bg-[#071B36]/[0.06]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-7 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />

              <span className="font-[var(--font-dm-mono)] text-[10px] font-medium uppercase tracking-[0.18em] text-[#2563EB]">
                Success Stories
              </span>
            </div>

            <motion.h2
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="font-[var(--font-dm-sans)] text-3xl font-semibold leading-[1.06] tracking-[-0.035em] text-[#0B1830] sm:text-4xl lg:text-5xl"
            >
              Recent work
            </motion.h2>
          </motion.div>

          <motion.nav
            aria-label="Project categories"
            initial={{
              opacity: 0,
              x: 30,
              filter: "blur(7px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="flex max-w-full flex-wrap items-center gap-x-5 gap-y-3 border-b border-slate-200 pb-2"
          >
            {filters.map((filter, index) => (
              <motion.div
                key={filter.label}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.25 + index * 0.06,
                  ease,
                }}
              >
                <Link
                  href={filter.href}
                  className={`group relative block pb-2 font-[var(--font-dm-mono)] text-[10px] font-medium uppercase tracking-[0.13em] transition-colors duration-200 ${
                    index === 0
                      ? "text-[#0B1830]"
                      : "text-slate-500 hover:text-[#0B1830]"
                  }`}
                >
                  {filter.label}

                  <span
                    className={`absolute inset-x-0 -bottom-[3px] h-px origin-left bg-[#FFC400] transition-transform duration-300 ${
                      index === 0
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardReveal}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              style={{ perspective: 1200 }}
              className={index === 1 ? "md:translate-y-6 lg:translate-y-0" : ""}
            >
              <motion.div
                whileHover={{
                  y: -9,
                  transition: {
                    duration: 0.35,
                    ease,
                  },
                }}
              >
                <Link href={project.href} className="group block">
                  <motion.div
                    className="relative mb-6 aspect-[1.35/1] overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(7,27,54,0.045)]"
                    whileHover={{
                      boxShadow: "0 28px 70px rgba(7,27,54,0.13)",
                    }}
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                  >
                    <motion.div
                      initial={{
                        x: "-120%",
                        opacity: 0,
                      }}
                      whileInView={{
                        x: "120%",
                        opacity: [0, 1, 0],
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 1.4,
                        delay: 0.3 + index * 0.12,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />

                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0B1830]/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <motion.div
                      initial={{
                        scale: 1.08,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 1,
                        delay: 0.1 + index * 0.1,
                        ease,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        loading="eager"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                      />
                    </motion.div>

                    <div className="pointer-events-none absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/5 text-white opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:opacity-100">
                      <span className="text-sm">↗</span>
                    </div>
                  </motion.div>

                  <div className="px-1">
                    <motion.span
                      variants={reveal}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                      }}
                      className="font-[var(--font-dm-mono)] text-[10px] font-medium uppercase tracking-[0.13em] text-slate-500"
                    >
                      {project.category}
                    </motion.span>

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.28 + index * 0.1,
                        ease,
                      }}
                      className="mt-2 font-[var(--font-dm-sans)] text-xl font-semibold tracking-[-0.025em] text-[#0B1830] transition-colors duration-200 group-hover:text-[#B18A00] sm:text-[22px]"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.36 + index * 0.1,
                        ease,
                      }}
                      className="mt-2 max-w-sm font-[var(--font-dm-sans)] text-sm leading-6 text-slate-500"
                    >
                      {project.description}
                    </motion.p>

                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: 0.44 + index * 0.1,
                        ease,
                      }}
                      className="mt-4 inline-flex items-center gap-2 font-[var(--font-dm-mono)] text-[10px] font-medium uppercase tracking-[0.12em] text-[#0B1830]"
                    >
                      View project
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
