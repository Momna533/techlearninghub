"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Practice",
    title: "Learn by Building",
    description:
      "Learn through practical, project-based training that turns concepts into real skills and hands-on experience.",
  },
  {
    number: "02",
    label: "Collaborate",
    title: "Work Together",
    description:
      "Work in a collaborative team environment where ideas, feedback and shared knowledge help everyone grow.",
  },
  {
    number: "03",
    label: "Guidance",
    title: "Learn with Support",
    description:
      "Get professional mentorship, guidance and the right technology resources to keep learning with confidence.",
  },
  {
    number: "04",
    label: "Growth",
    title: "Keep Improving",
    description:
      "Solve real-world problems, strengthen your skills and keep developing through continuous learning and practical experience.",
  },
];

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
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

export default function HomePage() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Ambient background */}
      <motion.div
        className="pointer-events-none absolute -left-56 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-50/60 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-56 bottom-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#FFC400]/[0.025] blur-3xl"
        animate={{
          x: [0, -18, 0],
          y: [0, 12, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.012] [background-image:linear-gradient(#071B36_1px,transparent_1px),linear-gradient(90deg,#071B36_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />

            <span className="font-[var(--font-dm-mono)] text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              How we work
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-[var(--font-dm-sans)] text-3xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#071B36] sm:text-4xl lg:text-5xl"
          >
            A clear process from{" "}
            <span className="text-[#0D2D5A]">idea to outcome.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl font-[var(--font-dm-sans)] text-sm leading-7 text-slate-500 sm:text-base"
          >
            We keep every project focused and practical — understanding the
            challenge first, building with purpose and refining the result until
            it delivers real value.
          </motion.p>
        </motion.div>

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Desktop process line */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[30px] hidden lg:block">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                ease,
              }}
              className="absolute left-0 right-0 top-1/2 h-px origin-left -translate-y-1/2 bg-slate-200"
            />

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease,
              }}
              className="absolute left-0 right-0 top-1/2 h-px origin-left -translate-y-1/2 bg-gradient-to-r from-transparent via-[#FFC400]/45 to-transparent"
            />

            <motion.div
              initial={{ left: "0%", opacity: 0 }}
              whileInView={{
                left: "100%",
                opacity: [0, 1, 1, 0],
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 2,
                delay: 0.55,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 h-1 w-12 -translate-y-1/2 rounded-full bg-[#FFC400] blur-[1px]"
            />
          </div>

          {/* Process cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.35,
                    ease,
                  },
                }}
                className="group relative"
              >
                {/* Number */}
                <div className="relative z-10 flex justify-center lg:justify-start">
                  <motion.div
                    initial={{ scale: 0.75, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + index * 0.08,
                      ease,
                    }}
                    className="absolute -inset-2 rounded-full border border-dashed border-[#FFC400]/20 transition-all duration-500 group-hover:border-[#FFC400]/40"
                  />

                  <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_8px_30px_rgba(7,27,54,0.06)] transition-all duration-500 group-hover:border-[#071B36] group-hover:shadow-[0_18px_42px_rgba(7,27,54,0.11)]">
                    <span className="font-[var(--font-dm-mono)] text-[11px] font-medium text-[#071B36]">
                      {step.number}
                    </span>

                    <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-[#FFC400] transition-transform duration-300 group-hover:scale-125" />
                  </div>

                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.35 + index * 0.08,
                      ease,
                    }}
                    className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#FFC400]"
                  />
                </div>

                {/* Content */}
                <div className="mt-7 text-center lg:text-left">
                  <span
                    className={`inline-block font-[var(--font-dm-mono)] text-[9px] font-medium uppercase tracking-[0.17em] transition-colors duration-300 ${
                      index === 2
                        ? "text-[#B18A00] group-hover:text-[#071B36]"
                        : "text-slate-400 group-hover:text-[#071B36]"
                    }`}
                  >
                    {step.label}
                  </span>

                  <h3 className="mt-2 font-[var(--font-dm-sans)] text-xl font-semibold tracking-[-0.025em] text-[#071B36] sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 font-[var(--font-dm-sans)] text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: 0.35 + index * 0.1,
                      ease,
                    }}
                    className="mt-5 h-px origin-left bg-gradient-to-r from-[#FFC400]/80 to-transparent"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile process line */}
          <div className="pointer-events-none absolute bottom-8 left-[30px] top-8 w-px bg-slate-200 sm:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1,
                ease,
              }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-transparent via-[#FFC400]/45 to-transparent"
            />

            <motion.div
              initial={{ top: "0%", opacity: 0 }}
              whileInView={{
                top: "100%",
                opacity: [0, 1, 0],
              }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.8,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 h-12 w-2 -translate-x-1/2 rounded-full bg-[#FFC400]/25 blur-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
