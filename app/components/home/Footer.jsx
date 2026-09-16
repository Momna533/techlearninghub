"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Websites", href: "/websites" },
  { label: "Software", href: "/softwares" },
  { label: "Applications", href: "/apps" },
  { label: "Digital Solutions", href: "/services" },
];

const contactLinks = [
  {
    label: "hello@techlearninghub.com",
    href: "mailto:hello@techlearninghub.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/",
  },
  {
    label: "Send an Enquiry",
    href: "/contact",
  },
];

const socialLinks = [
  { label: "f", ariaLabel: "Facebook", href: "#" },
  { label: "ig", ariaLabel: "Instagram", href: "#" },
  { label: "in", ariaLabel: "LinkedIn", href: "#" },
];

const ease = [0.22, 1, 0.36, 1];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071b36] text-white">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.1,
          ease,
        }}
        className="absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 35, -18, 0],
            y: [0, -22, 18, 0],
            scale: [1, 1.08, 0.97, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 -top-48 h-[32rem] w-[32rem] rounded-full bg-blue-500/[0.04] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 18, 0],
            y: [0, 22, -15, 0],
            scale: [1, 0.95, 1.06, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-48 -right-48 h-[30rem] w-[30rem] rounded-full bg-[#ffc400]/[0.03] blur-3xl"
        />

        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "72px 72px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <motion.div
          initial={{ x: "-120%", opacity: 0 }}
          whileInView={{ x: "120%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            delay: 0.45,
            ease,
          }}
          className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#ffc400]/35 to-transparent"
        />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
            <motion.div
              initial={{
                opacity: 0,
                x: -35,
                y: 18,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                ease,
              }}
              className="max-w-sm"
            >
              <Link href="/" className="group inline-flex items-center">
                <motion.div
                  whileHover={{
                    y: -5,
                    rotate: -2,
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                >
                  <Image
                    src="/images/logo-circle-footer.png"
                    alt="Tech Learning Hub"
                    loading="eager"
                    width={72}
                    height={72}
                    className="h-auto w-[72px] object-contain"
                  />
                </motion.div>
              </Link>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.16,
                  ease,
                }}
                className="mt-6 font-dm-sans text-sm leading-6 text-slate-400"
              >
                Practical technology, useful digital solutions and learning that
                helps people move from ideas to real outcomes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.24,
                  ease,
                }}
              >
                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-3 font-dm-sans text-sm font-semibold text-white transition-colors duration-300 hover:text-[#ffc400]"
                >
                  <span>Let’s Work Together</span>

                  <motion.span
                    animate={{
                      x: [0, 2, 0],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.85,
                delay: 0.08,
                ease,
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/70"
              >
                Explore
              </motion.span>

              <div className="mt-5 flex flex-col gap-3">
                {exploreLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.14 + index * 0.05,
                      ease,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group flex w-fit items-center gap-2 font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                    >
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        whileHover={{ width: 10, opacity: 1 }}
                        transition={{ duration: 0.25, ease }}
                        className="h-px bg-[#ffc400]"
                      />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.85,
                delay: 0.14,
                ease,
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/70"
              >
                Services
              </motion.span>

              <div className="mt-5 flex flex-col gap-3">
                {serviceLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.18 + index * 0.055,
                      ease,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group flex w-fit items-center gap-2 font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                    >
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        whileHover={{ width: 10, opacity: 1 }}
                        transition={{ duration: 0.25, ease }}
                        className="h-px bg-[#ffc400]"
                      />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                filter: "blur(5px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.85,
                delay: 0.2,
                ease,
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/70"
              >
                Contact
              </motion.span>

              <div className="mt-5 flex flex-col gap-4">
                {contactLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.22 + index * 0.06,
                      ease,
                    }}
                  >
                    <a
                      href={item.href}
                      className="font-dm-sans text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.42,
                  ease,
                }}
                className="mt-7 flex items-center gap-3"
              >
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.ariaLabel}
                    href={item.href}
                    aria-label={item.ariaLabel}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.5 + index * 0.07,
                      ease,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.06,
                      rotate: index === 1 ? 0 : index === 0 ? -3 : 3,
                    }}
                    whileTap={{ scale: 0.94 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 font-dm-mono text-xs text-slate-400 transition-all duration-300 hover:border-[#ffc400]/30 hover:bg-[#ffc400] hover:text-[#071b36]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.95,
              delay: 0.15,
              ease,
            }}
            className="mt-12 origin-center border-t border-white/10 pt-7 sm:mt-16 sm:pt-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <motion.p
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.25,
                  ease,
                }}
                className="font-dm-sans text-xs text-slate-500 sm:text-sm"
              >
                © {new Date().getFullYear()} Tech Learning Hub. All rights
                reserved.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.3,
                  ease,
                }}
                className="flex flex-wrap gap-x-5 gap-y-2"
              >
                <Link
                  href="/privacy"
                  className="font-dm-sans text-xs text-slate-500 transition-colors duration-300 hover:text-[#ffc400] sm:text-sm"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="font-dm-sans text-xs text-slate-500 transition-colors duration-300 hover:text-[#ffc400] sm:text-sm"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/contact"
                  className="font-dm-sans text-xs text-slate-500 transition-colors duration-300 hover:text-[#ffc400] sm:text-sm"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
