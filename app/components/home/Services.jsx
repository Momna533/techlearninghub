"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description:
      "Corporate sites, e-commerce stores and WordPress builds that load fast, rank well and convert visitors into customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 21h8" />
      </svg>
    ),
    items: [
      "Corporate & Business Websites",
      "E-commerce Stores",
      "WordPress & Shopify",
      "Landing Pages & Funnels",
      "Speed & SEO Optimisation",
      "Website Redesign",
    ],
    technologies: [
      {
        name: "WordPress",
        icon: "https://cdn.simpleicons.org/wordpress/21759B",
      },
      {
        name: "Shopify",
        icon: "https://cdn.simpleicons.org/shopify/7AB55C",
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
      {
        name: "Figma",
        icon: "https://cdn.simpleicons.org/figma/F24E1E",
      },
    ],
    link: "/our-work/#websites",
    linkText: "Explore website portfolio",
  },

  {
    title: "Web App Development",
    description:
      "Laravel, MERN and .NET applications: portals, CRMs, ERPs and SaaS platforms engineered for scale and security.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14 4l-4 16" />
      </svg>
    ),
    items: [
      "Custom Business Portals",
      "CRM & ERP Systems",
      "SaaS Platforms",
      "REST & GraphQL APIs",
      "Software Modernisation",
      "Payment Integrations",
    ],
    technologies: [
      {
        name: "Laravel",
        icon: "https://cdn.simpleicons.org/laravel/FF2D20",
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
        name: ".NET",
        icon: "https://cdn.simpleicons.org/dotnet/512BD4",
      },
      {
        name: "MySQL",
        icon: "https://cdn.simpleicons.org/mysql/4479A1",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
      },
    ],
    link: "/our-work/#webapps",
    linkText: "Explore web applications",
  },

  {
    title: "Mobile App Development",
    description:
      "Flutter, React Native and native Android apps, from idea to Play Store and App Store, with backend and admin panels included.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
    items: [
      "Android & iOS Apps",
      "Ride-hailing & Delivery Apps",
      "Marketplace Apps",
      "Healthcare & Booking Apps",
      "Push, Chat & Payments",
      "App Store Publishing",
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
    linkText: "Explore mobile apps",
  },

  {
    title: "Cloud & Servers",
    description:
      "Migration, hosting, domains and DevOps so your applications stay fast, secure and always online.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.5 1.5A3.5 3.5 0 0 0 6.5 19z" />
      </svg>
    ),
    items: [
      "Cloud Migration",
      "Managed Hosting & Domains",
      "CI/CD & DevOps",
      "Backups & Monitoring",
      "Security Hardening",
      "Performance Tuning",
    ],
    technologies: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Google Cloud",
        icon: "https://cdn.simpleicons.org/googlecloud/4285F4",
      },
      {
        name: "Docker",
        icon: "https://cdn.simpleicons.org/docker/2496ED",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.simpleicons.org/kubernetes/326CE5",
      },
      {
        name: "Nginx",
        icon: "https://cdn.simpleicons.org/nginx/009639",
      },
      {
        name: "Cloudflare",
        icon: "https://cdn.simpleicons.org/cloudflare/F38020",
      },
    ],
    link: "/get-in-touch/",
    linkText: "Talk to a cloud engineer",
  },

  {
    title: "AI, Animation & 3D",
    description:
      "AI utilities, chatbots and analytics, plus 2D/3D animation, architectural walkthroughs and 360° virtual tours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5-3 6v3H8v-3c-1-1-3-3-3-6a7 7 0 0 1 7-7Z" />
        <path d="M9 21h6" />
      </svg>
    ),
    items: [
      "AI Chatbots & Assistants",
      "Document & Data AI",
      "2D / 3D Animation",
      "Architectural Walkthroughs",
      "360° Virtual Tours",
      "Explainer Videos",
    ],
    technologies: [
      {
        name: "OpenAI",
        icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/openai.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python/3776AB",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.simpleicons.org/tensorflow/FF6F00",
      },
      {
        name: "Blender",
        icon: "https://cdn.simpleicons.org/blender/E87D0D",
      },
      {
        name: "Unity",
        icon: "https://cdn.simpleicons.org/unity/222222",
      },
      {
        name: "After Effects",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg",
      },
    ],
    link: "/services/#ai",
    linkText: "Explore AI utilities",
  },

  {
    title: "Digital Marketing & SEO",
    description:
      "Social media campaigns, search optimisation and paid ads that bring real leads, with weekly reporting you can understand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 11 21 4l-7 18-2-8-9-3Z" />
      </svg>
    ),
    items: [
      "Search Engine Optimisation",
      "Social Media Management",
      "Google & Meta Ads",
      "Content & Branding",
      "Email & WhatsApp Marketing",
      "Analytics & Reporting",
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
        name: "Analytics",
        icon: "https://cdn.simpleicons.org/googleanalytics/E37400",
      },
      {
        name: "Semrush",
        icon: "https://cdn.simpleicons.org/semrush/FF642D",
      },
      {
        name: "Canva",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
      },
      {
        name: "Mailchimp",
        icon: "https://cdn.simpleicons.org/mailchimp/FFE01B",
      },
    ],
    link: "/get-in-touch/",
    linkText: "Get a marketing plan",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const active = services[activeService];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#ffc400]/[0.04] blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />

              <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                Our Services
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />
            </div>

            <h2 className="font-hikasani text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#071b36] sm:text-4xl md:text-5xl lg:text-6xl">
              Digital solutions for
              <br className="hidden sm:block" />
              <span className="inline-flex items-center gap-3 text-[#0d2d5a]">
                businesses that want to grow
                <span className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.35)] sm:h-3 sm:w-3" />
              </span>
              .
            </h2>

            <p className="mt-5 max-w-2xl font-dm-sans text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7">
              From websites and applications to cloud, AI and digital marketing,
              we provide the technology and expertise your business needs to
              build, improve and grow online.
            </p>
          </div>

          <Link
            href="/services/"
            className="group inline-flex shrink-0 items-center gap-2 self-start font-dm-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 hover:text-[#0d2d5a] md:self-auto"
          >
            All services
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className={`group flex min-w-max items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 lg:w-full ${
                    isActive
                      ? "border-[#071b36] bg-[#071b36] text-white shadow-[0_10px_30px_rgba(7,27,54,0.12)]"
                      : "border-transparent bg-white/70 text-[#53657d] hover:border-slate-200 hover:bg-white hover:text-[#071b36]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "bg-[#ffc400] text-[#071b36]"
                        : "bg-[#eef2f6] text-[#53657d] group-hover:bg-[#e4eaf1] group-hover:text-[#071b36]"
                    }`}
                  >
                    <span className="h-[18px] w-[18px]">{service.icon}</span>
                  </span>

                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>

          <div
            key={activeService}
            className="animate-[servicesFade_450ms_ease-out] rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(7,27,54,0.06)] sm:p-8 lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
              <div>
                <div className="mb-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#071b36] text-[#ffc400]">
                    <span className="h-5 w-5">{active.icon}</span>
                  </div>

                  <h3 className="font-hikasani text-2xl font-bold tracking-[-0.025em] text-[#071b36] sm:text-3xl">
                    {active.title}
                  </h3>

                  <p className="mt-4 max-w-2xl font-dm-sans text-[15px] leading-7 text-[#53657d]">
                    {active.description}
                  </p>
                </div>

                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {active.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-dm-sans text-sm leading-6 text-[#26384e]"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffc400]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={active.link}
                  className="group mt-9 inline-flex items-center gap-2 font-dm-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 hover:text-[#0d2d5a]"
                >
                  {active.linkText}

                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
              </div>

              <div className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <span className="mb-5 block font-dm-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#718198]">
                  Technologies
                </span>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                  {active.technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex min-h-[70px] items-center gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white">
                        <img
                          src={technology.icon}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-5 w-5 object-contain"
                        />
                      </span>

                      <span className="font-dm-sans text-xs font-medium text-[#26384e]">
                        {technology.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes servicesFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
