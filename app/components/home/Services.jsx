"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites built to represent your brand, attract customers and create a strong online presence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 21h8" />
      </svg>
    ),
    items: [
      "Business & Corporate Websites",
      "Landing Pages & Portfolio Websites",
      "WordPress Websites",
      "Custom Frontend Development",
      "Responsive UI/UX Development",
      "Website Redesign & Optimisation",
    ],
    technologies: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs/000000",
      },
      {
        name: "WordPress",
        icon: "https://cdn.simpleicons.org/wordpress/21759B",
      },
      {
        name: "HTML5",
        icon: "https://cdn.simpleicons.org/html5/E34F26",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
    ],
    link: "/our-work/#websites",
    linkText: "Explore website projects",
  },
  {
    title: "Full-Stack & MERN Development",
    description:
      "Complete web applications built from frontend to backend, database and APIs using modern full-stack technologies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14 4l-4 16" />
      </svg>
    ),
    items: [
      "MERN Stack Applications",
      "Custom Web Applications",
      "Backend & REST APIs",
      "Admin Dashboards & Portals",
      "CRM & Business Systems",
      "Database & Third-Party Integrations",
    ],
    technologies: [
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
      },
      {
        name: "Express",
        icon: "https://cdn.simpleicons.org/express/000000",
      },
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
      },
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs/000000",
      },
      {
        name: "MySQL",
        icon: "https://cdn.simpleicons.org/mysql/4479A1",
      },
    ],
    link: "/our-work/#webapps",
    linkText: "Explore web applications",
  },
  {
    title: "E-commerce & Shopify",
    description:
      "Complete e-commerce solutions that help businesses sell online, manage products and reach customers across leading platforms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 7h12l1.5 13h-15L6 7Z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
    ),
    items: [
      "Shopify Stores & Customisation",
      "E-commerce Websites",
      "Product & Store Setup",
      "Payment & Shipping Integration",
      "eBay Store & Product Management",
      "E-commerce SEO & Optimisation",
    ],
    technologies: [
      {
        name: "Shopify",
        icon: "https://cdn.simpleicons.org/shopify/7AB55C",
      },
      {
        name: "WooCommerce",
        icon: "https://cdn.simpleicons.org/woocommerce/96588A",
      },
      {
        name: "eBay",
        icon: "https://cdn.simpleicons.org/ebay/E53238",
      },
      {
        name: "WordPress",
        icon: "https://cdn.simpleicons.org/wordpress/21759B",
      },
      {
        name: "Stripe",
        icon: "https://cdn.simpleicons.org/stripe/635BFF",
      },
      {
        name: "PayPal",
        icon: "https://cdn.simpleicons.org/paypal/003087",
      },
    ],
    link: "/our-work/#ecommerce",
    linkText: "Explore e-commerce solutions",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing that helps businesses build visibility, reach the right audience and generate measurable growth online.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 11 21 4l-7 18-2-8-9-3Z" />
      </svg>
    ),
    items: [
      "SEO & Search Visibility",
      "Social Media Marketing",
      "TikTok Marketing",
      "Google & Meta Ads",
      "Content & Brand Marketing",
      "Analytics & Performance Tracking",
    ],
    technologies: [
      {
        name: "Google",
        icon: "https://cdn.simpleicons.org/google/4285F4",
      },
      {
        name: "Meta",
        icon: "https://cdn.simpleicons.org/meta/0467DF",
      },
      {
        name: "TikTok",
        icon: "https://cdn.simpleicons.org/tiktok/000000",
      },
      {
        name: "Analytics",
        icon: "https://cdn.simpleicons.org/googleanalytics/E37400",
      },
      {
        name: "Semrush",
        icon: "https://cdn.simpleicons.org/semrush/FF642D",
      },
      {
        name: "Canva",
        icon: "https://cdn.simpleicons.org/canva/00C4CC",
      },
    ],
    link: "/get-in-touch/",
    linkText: "Get a marketing plan",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions using AI and machine learning to automate tasks, analyse information and create smarter digital products.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5-3 6v3H8v-3c-1-1-3-3-3-6a7 7 0 0 1 7-7Z" />
        <path d="M9 21h6" />
      </svg>
    ),
    items: [
      "AI-Powered Applications",
      "Machine Learning Solutions",
      "AI Chatbots & Assistants",
      "Data Analysis & Prediction",
      "AI API Integration",
      "Business Process Automation",
    ],
    technologies: [
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python/3776AB",
      },
      {
        name: "OpenAI",
        icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/openai.svg",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.simpleicons.org/tensorflow/FF6F00",
      },
      {
        name: "PyTorch",
        icon: "https://cdn.simpleicons.org/pytorch/EE4C2C",
      },
      {
        name: "Pandas",
        icon: "https://cdn.simpleicons.org/pandas/150458",
      },
      {
        name: "Scikit-learn",
        icon: "https://cdn.simpleicons.org/scikitlearn/F7931E",
      },
    ],
    link: "/services/#ai",
    linkText: "Explore AI solutions",
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile applications designed and developed for Android and iOS, from product idea and interface design to backend integration and deployment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
    items: [
      "Android & iOS Applications",
      "Cross-Platform Apps",
      "Business & Customer Apps",
      "Booking & Service Applications",
      "Payments & Notifications",
      "App Deployment & Maintenance",
    ],
    technologies: [
      {
        name: "Flutter",
        icon: "https://cdn.simpleicons.org/flutter/02569B",
      },
      {
        name: "React Native",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "Kotlin",
        icon: "https://cdn.simpleicons.org/kotlin/7F52FF",
      },
      {
        name: "Swift",
        icon: "https://cdn.simpleicons.org/swift/F05138",
      },
      {
        name: "Firebase",
        icon: "https://cdn.simpleicons.org/firebase/DD2C00",
      },
      {
        name: "Android",
        icon: "https://cdn.simpleicons.org/android/34A853",
      },
    ],
    link: "/our-work/#mobile",
    linkText: "Explore mobile applications",
  },
];

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
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

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const active = services[activeService];

  useEffect(() => {
    const element = document.getElementById("services-scroll");

    if (!element) return;

    const updateScrollButtons = () => {
      const maxScrollLeft = element.scrollWidth - element.clientWidth;

      setCanScrollLeft(element.scrollLeft > 5);
      setCanScrollRight(element.scrollLeft < maxScrollLeft - 5);
    };

    updateScrollButtons();

    element.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      element.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-12rem] top-10 h-[28rem] w-[28rem] rounded-full bg-blue-100/35 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-12rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#FFC400]/[0.025] blur-3xl"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-8"
        >
          <div className="max-w-3xl">
            <motion.div
              variants={reveal}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC400]" />

              <span className="font-[var(--font-dm-mono)] text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-[10px] sm:tracking-[0.18em]">
                What we build
              </span>

              <span className="h-px w-10 bg-slate-300" />
            </motion.div>

            <motion.h2
              variants={reveal}
              className="font-[var(--font-dm-sans)] text-[1.85rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#071B36] min-[400px]:text-3xl sm:text-4xl lg:text-5xl"
            >
              Digital solutions built around{" "}
              <span className="text-[#0D2D5A]">real business needs.</span>
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-4 max-w-2xl font-[var(--font-dm-sans)] text-sm leading-6 text-slate-500 sm:mt-5 sm:text-base sm:leading-7"
            >
              From websites and applications to cloud infrastructure, AI and
              digital growth, we bring the technology, design and expertise
              needed to build better digital experiences.
            </motion.p>
          </div>

          <motion.div variants={reveal}>
            <Link
              href="/services/"
              className="group inline-flex shrink-0 items-center gap-2 font-[var(--font-dm-mono)] text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 hover:text-[#071B36] sm:text-[10px] sm:tracking-[0.14em]"
            >
              View all services
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease,
          }}
          className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:mt-14 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-6"
        >
          <div className="relative min-w-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
              id="services-scroll"
              className="flex min-w-0 gap-2 overflow-x-auto pb-2 scrollbar-none lg:block lg:space-y-1.5 lg:overflow-visible lg:pb-0"
            >
              {services.map((service, index) => {
                const isActive = activeService === index;

                return (
                  <motion.button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveService(index)}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -18,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          ease,
                        },
                      },
                    }}
                    whileHover={{
                      x: isActive ? 0 : 4,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    className={`group relative flex h-[58px] w-[210px] shrink-0 items-center gap-3 rounded-xl border px-3.5 text-left transition-all duration-300 sm:w-[225px] lg:h-auto lg:w-full ${
                      isActive
                        ? "border-[#071B36] bg-[#071B36] text-white shadow-[0_16px_40px_rgba(7,27,54,0.12)]"
                        : "border-transparent bg-white/60 text-[#53657D] hover:border-slate-200 hover:bg-white hover:text-[#071B36]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-service-bar"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-[#FFC400]"
                      />
                    )}

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                        isActive
                          ? "bg-[#FFC400] text-[#071B36]"
                          : "bg-[#EEF2F6] text-slate-500 group-hover:bg-[#E5EBF2] group-hover:text-[#071B36]"
                      }`}
                    >
                      <span className="h-[18px] w-[18px]">{service.icon}</span>
                    </span>

                    <span className="min-w-0 font-[var(--font-dm-sans)] text-[13px] font-medium leading-5">
                      {service.title}
                    </span>

                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC400]" />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between lg:hidden">
              <button
                type="button"
                aria-label="Scroll services left"
                disabled={!canScrollLeft}
                onClick={() => {
                  document
                    .getElementById("services-scroll")
                    ?.scrollBy({ left: -230, behavior: "smooth" });
                }}
                className={`pointer-events-auto ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[#071B36] shadow-[0_6px_20px_rgba(7,27,54,0.12)] transition-all duration-300 ${
                  canScrollLeft
                    ? "border-slate-200 bg-white/95 hover:border-slate-300 hover:bg-[#071B36] hover:text-white"
                    : "cursor-not-allowed border-slate-100 bg-slate-100/80 text-slate-300 shadow-none"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="m11 18-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Scroll services right"
                disabled={!canScrollRight}
                onClick={() => {
                  document
                    .getElementById("services-scroll")
                    ?.scrollBy({ left: 230, behavior: "smooth" });
                }}
                className={`pointer-events-auto mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[#071B36] shadow-[0_6px_20px_rgba(7,27,54,0.12)] transition-all duration-300 ${
                  canScrollRight
                    ? "border-slate-200 bg-white/95 hover:border-slate-300 hover:bg-[#071B36] hover:text-white"
                    : "cursor-not-allowed border-slate-100 bg-slate-100/80 text-slate-300 shadow-none"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <motion.div
            key={activeService}
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.99,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
            className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(7,27,54,0.055)]"
          >
            <div className="relative grid lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="min-w-0 p-5 sm:p-7 md:p-8 lg:p-10">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.07,
                      },
                    },
                  }}
                >
                  <motion.div variants={reveal} className="mb-7 sm:mb-8">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#071B36] text-[#FFC400] sm:h-11 sm:w-11">
                        <span className="h-5 w-5">{active.icon}</span>
                      </div>

                      <span className="font-[var(--font-dm-mono)] text-[8px] uppercase tracking-[0.14em] text-slate-300 sm:text-[9px] sm:tracking-[0.16em]">
                        0{activeService + 1} / 0{services.length}
                      </span>
                    </div>

                    <motion.h3
                      variants={reveal}
                      className="font-[var(--font-dm-sans)] text-xl font-semibold leading-tight tracking-[-0.025em] text-[#071B36] min-[400px]:text-2xl sm:text-3xl"
                    >
                      {active.title}
                    </motion.h3>

                    <motion.p
                      variants={reveal}
                      className="mt-3 max-w-2xl font-[var(--font-dm-sans)] text-sm leading-6 text-[#53657D] sm:mt-4 sm:text-[15px] sm:leading-7"
                    >
                      {active.description}
                    </motion.p>
                  </motion.div>

                  <motion.div variants={reveal}>
                    <p className="mb-4 font-[var(--font-dm-mono)] text-[8px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:text-[9px] sm:tracking-[0.16em]">
                      What we deliver
                    </p>

                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.055,
                          },
                        },
                      }}
                      className="grid gap-x-6 gap-y-3 sm:grid-cols-2 sm:gap-x-10"
                    >
                      {active.items.map((item) => (
                        <motion.li
                          key={item}
                          variants={{
                            hidden: {
                              opacity: 0,
                              x: -8,
                            },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 0.4,
                                ease,
                              },
                            },
                          }}
                          className="flex min-w-0 items-start gap-3 font-[var(--font-dm-sans)] text-[13px] leading-5 text-[#26384E] sm:text-sm sm:leading-6"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC400]" />
                          <span className="min-w-0">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  <motion.div variants={reveal}>
                    <Link
                      href={active.link}
                      className="group mt-8 inline-flex max-w-full items-center gap-2 font-[var(--font-dm-mono)] text-[9px] font-medium uppercase tracking-[0.11em] text-slate-400 transition-colors duration-300 hover:text-[#071B36] sm:mt-9 sm:text-[10px] sm:tracking-[0.13em]"
                    >
                      <span className="truncate">{active.linkText}</span>

                      <svg
                        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              <div className="min-w-0 border-t border-slate-200 bg-[#F8FAFC] p-5 sm:p-7 md:p-8 lg:border-l lg:border-t-0 lg:p-8">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.06,
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={reveal}
                    className="mb-5 flex items-center justify-between"
                  >
                    <span className="font-[var(--font-dm-mono)] text-[8px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:text-[9px] sm:tracking-[0.18em]">
                      Technology
                    </span>

                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC400]" />
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.06,
                        },
                      },
                    }}
                    className="grid grid-cols-2 gap-2 sm:gap-2.5"
                  >
                    {active.technologies.map((technology) => (
                      <motion.div
                        key={technology.name}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 12,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.45,
                              ease,
                            },
                          },
                        }}
                        whileHover={{
                          y: -3,
                        }}
                        className="group flex min-h-[64px] min-w-0 flex-col justify-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 transition-shadow duration-300 hover:border-slate-300 hover:shadow-[0_8px_25px_rgba(7,27,54,0.05)] sm:min-h-[68px] sm:px-3"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#F8FAFC]">
                          <img
                            src={technology.icon}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-[18px] w-[18px] object-contain"
                          />
                        </span>

                        <span className="truncate font-[var(--font-dm-sans)] text-[10px] font-medium text-[#26384E] sm:text-[11px]">
                          {technology.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 px-5 py-3.5 sm:px-7 md:px-8 lg:px-10">
              <span className="h-1 w-8 shrink-0 rounded-full bg-[#FFC400]" />

              <span className="font-[var(--font-dm-mono)] text-[7px] uppercase tracking-[0.12em] text-slate-300 min-[400px]:text-[8px] sm:tracking-[0.15em]">
                Strategy · Design · Development · Support
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
