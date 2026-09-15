"use client";

import Image from "next/image";
import Link from "next/link";
import { DM_Mono, DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const slides = [
  {
    image: "/images/hero-1.png",
    eyebrow: "SOFTWARE DEVELOPMENT",
    title: "We build digital products that",
    highlight: "move businesses forward.",
    description:
      "From custom web applications and enterprise platforms to scalable business systems, we design and develop reliable software that solves real operational problems and creates better digital experiences.",
    href: "/services/software-development",
    cta: "Explore Software Solutions",
    secondary: "Start a Project",
    services: ["Web Applications", "ERP Systems", "SaaS Platforms"],
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    stat: "50+",
    statLabel: "Digital Projects",
    tag: "END-TO-END DEVELOPMENT",
  },
  {
    image: "/images/hero-2.png",
    eyebrow: "MOBILE APP DEVELOPMENT",
    title: "Turn your ideas into",
    highlight: "powerful mobile experiences.",
    description:
      "We create intuitive, high-performance mobile applications that connect businesses with their customers. From product strategy and UI design to development and deployment, we handle the complete journey.",
    href: "/services/mobile-development",
    cta: "Explore Mobile Solutions",
    secondary: "Discuss Your App",
    services: ["iOS Applications", "Android Apps", "Cross-Platform"],
    technologies: ["React Native", "Flutter", "Firebase", "Node.js"],
    stat: "24/7",
    statLabel: "Digital Accessibility",
    tag: "MOBILE-FIRST EXPERIENCES",
  },
  {
    image: "/images/hero-3.png",
    eyebrow: "READY-MADE SOFTWARE",
    title: "Powerful software solutions",
    highlight: "built for everyday business.",
    description:
      "Skip unnecessary complexity with practical, ready-to-use software solutions for business operations, administration, productivity, customer management and everyday digital workflows.",
    href: "/services/software-solutions",
    cta: "View Software Solutions",
    secondary: "Talk to Our Team",
    services: ["Business Software", "Management Systems", "Productivity Tools"],
    technologies: ["Cloud", "Web", "API", "Automation"],
    stat: "10+",
    statLabel: "Business Solutions",
    tag: "READY TO DEPLOY",
  },
  {
    image: "/images/hero-1.png",
    eyebrow: "AI & AUTOMATION",
    title: "Automate repetitive work and",
    highlight: "build smarter operations.",
    description:
      "We help businesses use artificial intelligence and automation to reduce repetitive work, organize information, improve decision-making and create workflows that operate more efficiently.",
    href: "/services/ai-automation",
    cta: "Explore AI & Automation",
    secondary: "Discuss Automation",
    services: ["AI Integration", "Workflow Automation", "Smart Systems"],
    technologies: ["AI APIs", "Python", "Node.js", "Cloud"],
    stat: "30%+",
    statLabel: "Potential Time Savings",
    tag: "SMARTER WORKFLOWS",
  },
  {
    image: "/images/hero-2.png",
    eyebrow: "DIGITAL GROWTH",
    title: "Build your online presence and",
    highlight: "reach the right audience.",
    description:
      "We combine modern websites, search visibility, digital campaigns and conversion-focused experiences to help businesses establish a stronger presence and turn online attention into meaningful growth.",
    href: "/services/digital-marketing",
    cta: "Explore Digital Growth",
    secondary: "Grow With Us",
    services: ["SEO", "Digital Marketing", "Web Presence"],
    technologies: ["SEO", "Analytics", "Content", "Ads"],
    stat: "360°",
    statLabel: "Digital Strategy",
    tag: "GROWTH & VISIBILITY",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = slides[activeSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  return (
    <section
      id="hero"
      className={`${dmMono.variable} ${dmSans.variable} hero-section relative min-h-[760px] overflow-hidden bg-[#071b36] text-white lg:min-h-[850px]`}
    >
      {/* Main background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(24,119,242,0.14),transparent_32%),linear-gradient(115deg,#071b36_0%,#092344_52%,#0a284b_100%)]" />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-3xl" />
        <div className="absolute right-[-12rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#ffc400]/[0.025] blur-3xl" />
        <div className="absolute bottom-[-15rem] left-[35%] h-[30rem] w-[30rem] rounded-full bg-blue-400/[0.04] blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col justify-center px-5 py-20 sm:px-8 lg:min-h-[850px] lg:px-12 xl:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-16">
          {/* Content */}
          <div
            key={`content-${activeSlide}`}
            className="relative z-10 max-w-3xl animate-[heroContent_650ms_cubic-bezier(0.22,1,0.36,1)]"
          >
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffc400] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ffc400]" />
                </span>

                <span className="font-[var(--font-dm-mono)] text-[11px] font-medium tracking-[0.16em] text-white/70">
                  {slide.tag}
                </span>
              </div>

              <span className="font-[var(--font-dm-mono)] text-[11px] tracking-[0.12em] text-white/35">
                / 0{activeSlide + 1} — 0{slides.length}
              </span>
            </div>

            <p className="mb-4 font-[var(--font-dm-mono)] text-[12px] font-medium uppercase tracking-[0.22em] text-[#ffc400]">
              {slide.eyebrow}
            </p>

            <h1 className="max-w-4xl font-hikasani text-[2rem] font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
              {slide.title}{" "}
              <span className="text-white/55">{slide.highlight}</span>
            </h1>

            <p className="mt-7 max-w-2xl font-[var(--font-dm-sans)] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              {slide.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {slide.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[0.08em] text-white/55 backdrop-blur-sm"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={slide.href}
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#ffc400] px-4 font-[var(--font-dm-sans)] text-base font-semibold text-[#071b36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd22f] hover:shadow-[0_12px_35px_rgba(255,196,0,0.18)]"
              >
                {slide.cta}
              </Link>

              <Link
                href="https://wa.me/923080777142"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/[0.035] px-4 font-[var(--font-dm-sans)] text-base font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              >
                {slide.secondary}
              </Link>
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <span className="font-[var(--font-dm-mono)] text-xs text-[#ffc400]">
                    {slide.stat}
                  </span>
                </div>

                <div>
                  <p className="font-[var(--font-dm-sans)] text-sm font-semibold text-white">
                    {slide.statLabel}
                  </p>

                  <p className="mt-0.5 font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[0.08em] text-white/35">
                    Built with purpose
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-white/10 sm:block" />

              <div>
                <p className="font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[0.14em] text-white/35">
                  Our approach
                </p>

                <p className="mt-1 font-[var(--font-dm-sans)] text-sm text-white/65">
                  Strategy · Design · Development · Support
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div
            key={`visual-${activeSlide}`}
            className="relative z-10 hidden min-h-[390px] items-center justify-center animate-[heroVisual_850ms_cubic-bezier(0.22,1,0.36,1)] lg:flex lg:min-h-[600px]"
          >
            <div className="absolute right-[8%] top-[5%] hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md sm:block">
              <span className="font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[0.13em] text-white/50">
                Digital solutions
              </span>
            </div>

            <div className="absolute bottom-[7%] left-[2%] hidden rounded-xl border border-white/10 bg-[#071b36]/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
              <p className="font-[var(--font-dm-mono)] text-[9px] uppercase tracking-[0.14em] text-white/35">
                Technology
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {slide.technologies.slice(0, 3).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/[0.06] px-2.5 py-1.5 font-[var(--font-dm-mono)] text-[9px] text-white/60"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-[690px]">
              <div className="absolute inset-8 rounded-[2rem] bg-blue-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <div className="relative aspect-[1.18/1] overflow-hidden rounded-xl bg-[#0b2342]">
                  <Image
                    preload={activeSlide === 0}
                    src={slide.image}
                    alt={`${slide.title} ${slide.highlight}`}
                    fill
                    sizes="(max-width: 1024px) 92vw, (max-width: 1280px) 52vw, 650px"
                    className="object-cover object-center"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071b36]/10 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute -right-3 top-[18%] hidden rounded-xl border border-white/10 bg-[#071b36]/80 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-right-8">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.7)]" />

                  <div>
                    <p className="font-[var(--font-dm-mono)] text-[9px] uppercase tracking-[0.12em] text-white/35">
                      Project status
                    </p>

                    <p className="mt-1 font-[var(--font-dm-sans)] text-xs font-semibold text-white">
                      Building for growth
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 right-[12%] hidden rounded-xl border border-white/10 bg-[#071b36]/90 px-5 py-4 shadow-2xl backdrop-blur-xl md:block">
                <p className="font-[var(--font-dm-mono)] text-[9px] uppercase tracking-[0.13em] text-white/35">
                  Development process
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1.5 w-8 rounded-full bg-[#ffc400]" />
                  <span className="h-1.5 w-8 rounded-full bg-white/20" />
                  <span className="h-1.5 w-8 rounded-full bg-white/20" />
                  <span className="h-1.5 w-8 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="relative z-20 mt-10 flex items-center justify-between border-t border-white/10 pt-5 lg:mt-4">
          <div className="flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeSlide === index
                    ? "w-10 bg-[#ffc400]"
                    : "w-5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Entire hero enters once when the page loads */
        @keyframes heroSectionEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Content transition when the slide changes */
        @keyframes heroContent {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Image/visual transition when the slide changes */
        @keyframes heroVisual {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.985);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .hero-section {
          animation: heroSectionEnter 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-section,
          .hero-section * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
