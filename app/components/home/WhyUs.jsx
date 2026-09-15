"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Practical First",
    description:
      "We prioritize solutions that are useful, achievable and built around real problems — not technology for technology's sake.",
  },
  {
    number: "02",
    title: "Built Around You",
    description:
      "Every project has different goals and constraints. We shape the technology, process and priorities around what matters to you.",
  },
  {
    number: "03",
    title: "Built Through Doing",
    description:
      "We turn ideas into working products through practical design, development and continuous problem-solving.",
  },
  {
    number: "04",
    title: "Made To Last",
    description:
      "We aim for solutions that stay maintainable, adaptable and useful as your needs evolve.",
  },
];

const ease = [0.22, 1, 0.36, 1];

const principleVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#071B36] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-56 -top-40 h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.08] blur-3xl"
          animate={{
            x: [0, 45, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-56 bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#FFC400]/[0.045] blur-3xl"
          animate={{
            x: [0, -35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 opacity-[0.028] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px]" />

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease,
          }}
          className="absolute inset-x-0 top-0 h-px origin-left bg-white/[0.08]"
        />

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease,
          }}
          className="absolute inset-x-0 bottom-0 h-px origin-right bg-white/[0.06]"
        />

        <motion.div
          initial={{
            left: "-15%",
            opacity: 0,
          }}
          whileInView={{
            left: "115%",
            opacity: [0, 0.45, 0],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            delay: 0.7,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/[0.025] to-transparent blur-xl"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -55,
              y: 25,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.95,
              ease,
            }}
            className="max-w-xl"
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />

              <span className="font-[var(--font-dm-mono)] text-[10px] font-medium uppercase tracking-[0.18em] text-[#FFC400]/80">
                Why choose us
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 28,
                filter: "blur(7px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                delay: 0.12,
                ease,
              }}
              className="font-[var(--font-dm-sans)] text-3xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              Technology built
              <br />
              <span className="text-[#FFC400]">with purpose.</span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease,
              }}
              className="mt-6 max-w-lg font-[var(--font-dm-sans)] text-sm leading-7 text-slate-300 sm:text-base"
            >
              We do more than build digital products. We focus on understanding
              the problem, choosing the right approach and creating solutions
              that remain useful long after launch.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.42,
                ease,
              }}
            >
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.045] px-5 py-3.5 font-[var(--font-dm-sans)] text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFC400]/40 hover:bg-white/[0.08]"
              >
                <span>Learn About Us</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.08] text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#FFC400] group-hover:text-[#071B36]">
                  ↗
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 55,
              y: 25,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{
              duration: 0.95,
              delay: 0.12,
              ease,
            }}
            className="grid border-t border-white/10 sm:grid-cols-2 sm:border-t-0"
          >
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                variants={principleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  delay: 0.18 + index * 0.1,
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.3,
                    ease,
                  },
                }}
                className={`group relative overflow-hidden ${
                  index === 0
                    ? "border-b border-white/10 py-7 sm:border-r sm:pr-8 sm:pt-0"
                    : index === 1
                      ? "border-b border-white/10 py-7 sm:pl-8 sm:pt-0"
                      : index === 2
                        ? "border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:pr-8"
                        : "py-7 sm:pl-8"
                }`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.16em] text-[#FFC400]/70">
                    {item.number}
                  </span>

                  <span className="h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-12 group-hover:bg-[#FFC400]/50" />
                </div>

                <motion.h3
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.3 + index * 0.1,
                    ease,
                  }}
                  className="font-[var(--font-dm-sans)] text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl"
                >
                  {item.title}
                </motion.h3>

                <motion.p
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
                    duration: 0.6,
                    delay: 0.38 + index * 0.1,
                    ease,
                  }}
                  className="mt-3 font-[var(--font-dm-sans)] text-sm leading-6 text-slate-400"
                >
                  {item.description}
                </motion.p>

                <motion.div
                  initial={{
                    scaleX: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.5 + index * 0.1,
                    ease,
                  }}
                  className="mt-6 h-px origin-left bg-gradient-to-r from-[#FFC400]/60 to-transparent"
                />

                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-[#FFC400]/[0.025] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
