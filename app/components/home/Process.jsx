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
    y: 45,
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

export default function HomePage() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <motion.div
        className="pointer-events-none absolute -left-48 top-16 h-[30rem] w-[30rem] rounded-full bg-blue-50/70 blur-3xl"
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-48 bottom-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#FFC400]/[0.035] blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#071B36_1px,transparent_1px),linear-gradient(90deg,#071B36_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />

            <span className="font-[var(--font-dm-mono)] text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
              How we work
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-[var(--font-dm-sans)] text-3xl font-semibold leading-[1.06] tracking-[-0.035em] text-[#071B36] sm:text-4xl lg:text-5xl"
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
          <div className="pointer-events-none absolute left-[7%] right-[7%] top-[30px] hidden lg:block">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.1,
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
              className="absolute left-0 right-0 top-1/2 h-px origin-left -translate-y-1/2 bg-gradient-to-r from-transparent via-[#FFC400]/60 to-transparent"
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
                delay: 0.65,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 h-1 w-14 -translate-y-1/2 rounded-full bg-[#FFC400] blur-[1px]"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.35,
                    ease,
                  },
                }}
                className="group relative"
              >
                <div className="relative z-10 flex justify-center lg:justify-start">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: 0.15 + index * 0.08,
                      ease,
                    }}
                    className="absolute -inset-2 rounded-full border border-dashed border-[#FFC400]/25"
                  />

                  <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_8px_25px_rgba(7,27,54,0.06)] transition-all duration-500 group-hover:border-[#071B36] group-hover:shadow-[0_16px_40px_rgba(7,27,54,0.12)]">
                    <span className="font-[var(--font-dm-mono)] text-[11px] font-medium text-[#071B36]">
                      {step.number}
                    </span>

                    <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
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

                <div className="mt-7 text-center lg:text-left">
                  <motion.span
                    whileHover={{ x: 4 }}
                    className={`inline-block font-[var(--font-dm-mono)] text-[9px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                      index === 2
                        ? "text-[#B18A00] group-hover:text-[#071B36]"
                        : "text-slate-400 group-hover:text-[#071B36]"
                    }`}
                  >
                    {step.label}
                  </motion.span>

                  <h3 className="mt-2 font-[var(--font-dm-sans)] text-xl font-semibold tracking-[-0.02em] text-[#071B36] sm:text-2xl">
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
                      duration: 0.7,
                      delay: 0.35 + index * 0.1,
                      ease,
                    }}
                    className="mt-5 h-px origin-left bg-gradient-to-r from-[#FFC400] to-transparent"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute bottom-8 left-[30px] top-8 w-px bg-slate-200 sm:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1,
                ease,
              }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-transparent via-[#FFC400]/50 to-transparent"
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
              className="absolute left-1/2 h-12 w-2 -translate-x-1/2 rounded-full bg-[#FFC400]/30 blur-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
