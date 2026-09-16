"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    name: "Ahmed",
    role: "Learner",
    initial: "A",
    text: "“The learning experience was practical and easy to follow. I was able to understand the concepts and actually use them instead of just memorizing them.”",
    featured: false,
  },
  {
    name: "Sara",
    role: "Client",
    initial: "S",
    text: "“They took the time to understand what we actually needed before building the solution. The result was much more useful than a generic approach.”",
    featured: true,
  },
  {
    name: "Muhammad",
    role: "Student",
    initial: "M",
    text: "“What stood out was the focus on real-world application. It helped me move from knowing something in theory to actually being able to use it.”",
    featured: false,
  },
];

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
    filter: "blur(5px)",
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: index * 0.1,
      ease,
    },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 25, -12, 0],
            y: [0, -16, 12, 0],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-blue-100/35 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 12, 0],
            y: [0, 15, -12, 0],
            scale: [1, 0.98, 1.04, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#ffc400]/[0.035] blur-3xl"
        />

        <div className="absolute inset-0 opacity-[0.014] [background-image:linear-gradient(#071b36_1px,transparent_1px),linear-gradient(90deg,#071b36_1px,transparent_1px)] [background-size:72px_72px]" />

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease,
          }}
          className="absolute left-0 right-0 top-0 h-px origin-left bg-[#071b36]/[0.06]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
            filter: "blur(6px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.85,
            ease,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
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
              delay: 0.12,
              ease,
            }}
            className="mb-5 inline-flex items-center gap-3"
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
                delay: 0.22,
                ease,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#ffc400]"
            />

            <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
              What People Say
            </span>

            <motion.span
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              whileInView={{
                scaleX: 1,
                opacity: 0.6,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.32,
                ease,
              }}
              className="h-px w-7 origin-left bg-[#ffc400]"
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
              duration: 0.85,
              delay: 0.22,
              ease,
            }}
            className="font-hikasani text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#071b36] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Experiences that
            <br />
            <span className="inline-flex items-center gap-3 text-[#0d2d5a]">
              speak for themselves
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
                  duration: 0.5,
                  delay: 0.58,
                  ease,
                }}
                className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] sm:h-3 sm:w-3"
              />
            </span>
            .
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
              delay: 0.55,
              ease,
            }}
            className="mx-auto mt-5 max-w-2xl font-dm-sans text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7"
          >
            The best measure of our work is the experience people have while
            learning, building and working with us.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:mt-14 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardReveal}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              style={{ perspective: 1200 }}
            >
              <motion.div
                whileHover={{
                  y: -7,
                  scale: 1.008,
                  transition: {
                    duration: 0.4,
                    ease,
                  },
                }}
                className={`group relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 sm:p-8 ${
                  testimonial.featured
                    ? "bg-[#071b36] text-white shadow-[0_20px_60px_rgba(7,27,54,0.16)] hover:shadow-[0_28px_75px_rgba(7,27,54,0.2)]"
                    : "border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(7,27,54,0.04)] hover:border-slate-300 hover:shadow-[0_22px_55px_rgba(7,27,54,0.09)]"
                }`}
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
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.35,
                    delay: 0.4 + index * 0.12,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#ffc400]/10 to-transparent"
                />

                {testimonial.featured && (
                  <>
                    <motion.div
                      initial={{
                        scaleY: 0,
                      }}
                      whileInView={{
                        scaleY: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 0.35,
                        ease,
                      }}
                      className="absolute left-0 top-8 h-16 w-0.5 origin-top bg-[#ffc400]"
                    />

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
                        duration: 0.8,
                        delay: 0.6,
                        ease,
                      }}
                      className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-[#ffc400]/30 to-transparent"
                    />
                  </>
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 6,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.22 + index * 0.1,
                      ease,
                    }}
                    className={`font-dm-mono text-sm tracking-[0.18em] transition-colors duration-300 ${
                      testimonial.featured
                        ? "text-[#ffc400]"
                        : "text-[#0d2d5a] group-hover:text-[#b18a00]"
                    }`}
                  >
                    ★★★★★
                  </motion.span>
                </div>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 14,
                    filter: "blur(3px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35 + index * 0.1,
                    ease,
                  }}
                  className={`relative z-10 mt-7 font-dm-sans text-sm leading-7 sm:text-base ${
                    testimonial.featured ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {testimonial.text}
                </motion.p>

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: 0.52 + index * 0.1,
                    ease,
                  }}
                  className={`relative z-10 mt-8 flex origin-left items-center gap-3 border-t pt-6 ${
                    testimonial.featured
                      ? "border-white/10"
                      : "border-slate-100"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: testimonial.featured ? -5 : 5,
                    }}
                    transition={{
                      duration: 0.3,
                      ease,
                    }}
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-dm-mono text-xs transition-colors duration-300 ${
                      testimonial.featured
                        ? "bg-white/10 text-white group-hover:bg-[#ffc400] group-hover:text-[#071b36]"
                        : "bg-[#071b36] text-white group-hover:bg-[#ffc400] group-hover:text-[#071b36]"
                    }`}
                  >
                    {testimonial.initial}
                  </motion.div>

                  <div>
                    <h3
                      className={`font-hikasani text-sm font-bold ${
                        testimonial.featured ? "text-white" : "text-[#071b36]"
                      }`}
                    >
                      {testimonial.name}
                    </h3>

                    <p className="font-dm-sans text-xs text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
