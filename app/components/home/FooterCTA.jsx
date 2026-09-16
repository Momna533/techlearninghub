"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(5px)",
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

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B1830] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, -25, 12, 0],
            y: [0, 20, -12, 0],
            scale: [1, 1.06, 0.98, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#2563EB]/15 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 25, -12, 0],
            y: [0, -16, 20, 0],
            scale: [1, 0.98, 1.05, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-48 -left-40 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-3xl"
        />

        <div className="absolute inset-0 opacity-[0.014] [background-image:linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(90deg,#FFFFFF_1px,transparent_1px)] [background-size:72px_72px]" />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease,
          }}
          className="absolute left-0 right-0 top-0 h-px origin-left bg-white/[0.07]"
        />

        <motion.div
          initial={{
            x: "-120%",
            opacity: 0,
          }}
          whileInView={{
            x: "120%",
            opacity: [0, 1, 0],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.7,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#FFC400]/35 to-transparent"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.975,
            filter: "blur(7px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease,
          }}
          whileHover={{
            y: -3,
            borderColor: "rgba(255,255,255,0.15)",
            transition: {
              duration: 0.4,
              ease,
            },
          }}
          className="group relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.14)] backdrop-blur-sm sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-14"
        >
          <motion.div
            initial={{
              scale: 0.75,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease,
            }}
            className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full border border-white/[0.04]"
          />

          <motion.div
            initial={{
              x: -30,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="relative z-10 max-w-2xl"
          >
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-3"
            >
              <motion.span
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.25,
                  ease,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#FFC400]"
              />

              <span className="font-[var(--font-dm-mono)] text-[10px] font-medium uppercase tracking-[0.18em] text-[#FFC400]">
                Start a conversation
              </span>

              <motion.span
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scaleX: 1,
                  opacity: 0.5,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.4,
                  ease,
                }}
                className="h-px w-7 origin-left bg-[#FFC400]"
              />
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.98,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.32,
                ease,
              }}
              className="font-[var(--font-dm-sans)] text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
            >
              Have a project in mind?
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease,
              }}
              className="mt-4 max-w-xl font-[var(--font-dm-sans)] text-sm leading-6 text-slate-300 sm:text-base"
            >
              Talk to our team before you start. Free consultation, no
              commitment.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.96,
              filter: "blur(5px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease,
            }}
            className="relative z-10 flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
          >
            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
                boxShadow: "0 18px 45px rgba(255,196,0,0.14)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.3,
                ease,
              }}
            >
              <Link
                href="/get-in-touch/"
                className="group inline-flex items-center justify-center rounded-full bg-[#FFC400] px-6 py-3.5 font-[var(--font-dm-sans)] text-sm font-semibold text-[#0B1830] shadow-[0_8px_25px_rgba(255,196,0,0.08)] transition-all duration-300 hover:bg-[#FFD633]"
              >
                Discuss Your Project
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
                borderColor: "rgba(255,255,255,0.32)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.3,
                ease,
              }}
            >
              <a
                href="https://wa.me/923212225212"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 font-[var(--font-dm-sans)] text-sm font-medium text-white transition-all duration-300 hover:bg-white/[0.09]"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>

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
              duration: 1,
              delay: 0.65,
              ease,
            }}
            className="pointer-events-none absolute bottom-0 left-10 right-10 h-px origin-center bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
