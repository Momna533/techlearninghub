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

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Softwares", href: "/softwares" },
  { label: "Websites", href: "/websites" },
  { label: "Apps", href: "/apps" },
  { label: "Contact Us", href: "/contact" },
];

const slides = [
  {
    eyebrow: "Technology & Learning",
    title: "Real Projects.",
    highlight: "Real Skills.",
    description:
      "From software development to complete business solutions — we build technology that makes a difference.",
    cta: "Explore Courses",
    href: "/courses",
    image: "/images/hero-1.jpg",
  },
  {
    eyebrow: "Build With Technology",
    title: "Ideas Into.",
    highlight: "Digital Solutions.",
    description:
      "Transform your ideas into practical digital products, websites, software and applications built for real-world needs.",
    cta: "Explore Services",
    href: "/services",
    image: "/images/hero-2.jpg",
  },
  {
    eyebrow: "Learn. Build. Grow.",
    title: "Skills That.",
    highlight: "Move You Forward.",
    description:
      "Learn practical technology skills through hands-on training designed to help you build confidence and create real results.",
    cta: "Start Learning",
    href: "/courses",
    image: "/images/hero-3.jpg",
  },
];

const shiftItems = [
  {
    number: "01",
    title: "Theory",
    description:
      "Learning concepts without enough opportunity to apply them in real situations.",
  },
  {
    number: "02",
    title: "Generic Solutions",
    description:
      "Using one-size-fits-all approaches that may not match the actual needs of a person or business.",
  },
  {
    number: "03",
    title: "Disconnected",
    description:
      "Skills, ideas and technology often exist separately instead of working together toward a clear outcome.",
  },
];

const betterItems = [
  {
    number: "01",
    title: "Practical Learning",
    description:
      "Build useful skills through hands-on learning, projects and real-world application.",
  },
  {
    number: "02",
    title: "Purpose-Built Technology",
    description:
      "Develop digital solutions around the specific goals, needs and challenges of each client.",
  },
  {
    number: "03",
    title: "Learn. Build. Apply.",
    description:
      "Connect learning and technology so ideas can move from concept to something useful.",
  },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`${dmSans.variable} ${dmMono.variable} bg-white`}>
      <section className="relative min-h-[80%] overflow-hidden bg-[linear-gradient(180deg,rgb(7,27,54)_0%,rgb(11,35,69)_35%,rgb(13,45,90)_50%,rgb(11,35,69)_65%,rgb(7,27,54)_100%)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />

          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#ffc400]/[0.06] blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />

          <div className="absolute left-[48%] top-[18%] h-40 w-40 rounded-full bg-[#ffc400]/[0.04] blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />

          <span className="absolute left-[7%] top-[25%] text-2xl text-[#ffc400]/50 animate-[float_6s_ease-in-out_infinite]">
            ✦
          </span>

          <span className="absolute right-[8%] top-[18%] text-xl text-[#ffc400]/40 animate-[float_7s_ease-in-out_infinite_reverse]">
            ✦
          </span>

          <span className="absolute bottom-[18%] left-[42%] text-sm text-white/20 animate-[float_8s_ease-in-out_infinite]">
            ✦
          </span>
        </div>

        <header className="absolute inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-[#f8fafc]/90 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-10">
            <nav className="flex h-16 items-center justify-between sm:h-20">
              <Link
                href="/"
                aria-label="Tech Learning Hub Home"
                className="relative z-10 flex min-w-0 shrink items-center"
              >
                <Image
                  src="/images/logo-transparent.png"
                  alt="Tech Learning Hub"
                  width={190}
                  height={60}
                  priority
                  className="h-auto w-[105px] object-contain xs:w-[120px] sm:w-[150px] lg:w-[180px]"
                />
              </Link>

              <div className="hidden items-center gap-5 lg:flex xl:gap-7">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="whitespace-nowrap font-dm-sans text-sm font-medium text-[#071b36] transition-colors duration-300 hover:text-[#0d2d5a]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="https://wa.me/923080777142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-10 items-center whitespace-nowrap rounded-full bg-[#071b36] px-4 font-dm-sans text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a]"
                >
                  WhatsApp
                </Link>
              </div>

              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-[#071b36] shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#ffc400] hover:text-[#0d2d5a] sm:h-10 sm:w-10 lg:hidden"
              >
                <span className="font-dm-sans text-lg leading-none sm:text-xl">
                  {menuOpen ? "×" : "☰"}
                </span>
              </button>
            </nav>
          </div>
        </header>

        {menuOpen && (
          <div
            className="fixed inset-0 z-[99999] h-[100vh] w-[100vw] bg-[#f8fafc] lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-full w-full flex-col bg-[#f8fafc]">
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 px-4 sm:h-20 sm:px-6">
                <Link
                  href="/"
                  aria-label="Tech Learning Hub Home"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/images/logo-transparent.png"
                    alt="Tech Learning Hub"
                    width={190}
                    height={60}
                    priority
                    className="h-auto w-[120px] object-contain sm:w-[150px]"
                  />
                </Link>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071b36] text-2xl leading-none text-white transition-all duration-300 hover:bg-[#0d2d5a]"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
                <div className="flex flex-col">
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-14 items-center border-b border-slate-200 px-2 font-dm-sans text-lg font-medium text-[#071b36] transition-colors duration-300 hover:text-[#0d2d5a]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href="https://wa.me/923080777142"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-6 flex min-h-14 items-center justify-center rounded-2xl bg-[#071b36] px-4 font-dm-sans text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d2d5a]"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto flex min-h-[80%] max-w-7xl items-center px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-10 lg:pb-12">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:gap-20">
            <div
              key={activeSlide}
              className="max-w-2xl animate-[fadeIn_500ms_ease-out]"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-sm transition-all duration-500 hover:border-[#ffc400]/40 hover:bg-white/15 sm:mb-6 sm:px-4">
                <span className="h-2 w-2 rounded-full bg-[#ffc400] shadow-[0_0_12px_rgba(255,196,0,0.65)]" />

                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white sm:text-xs sm:tracking-[0.16em]">
                  {slide.eyebrow}
                </span>
              </div>

              <h1 className="font-hikasani max-w-3xl text-4xl font-bold leading-[1] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                {slide.title}
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#ffc400]">
                    {slide.highlight}
                  </span>
                </span>
              </h1>

              <p className="mt-6 max-w-xl font-dm-sans text-sm leading-6 text-[#c9d4db] sm:mt-7 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                {slide.description}
              </p>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={slide.href}
                  className="group inline-flex min-h-13 min-w-[180px] items-center justify-between rounded-2xl bg-[#ffc400] px-4 font-dm-sans text-base font-semibold text-[#071b36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd43b] hover:shadow-[0_10px_30px_rgba(255,196,0,0.18)]"
                >
                  <span>{slide.cta}</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071b36]/10 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>

                <Link
                  href="https://wa.me/923080777142?text=Hello%2C%20I%20am%20interested%20in%20Tech%20Learning%20Hub."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-13 items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-4 font-dm-sans text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffc400]/50 hover:bg-[#ffc400]/10 sm:min-h-14"
                >
                  <span>WhatsApp Us</span>

                  <span className="ml-2 text-[#ffc400] transition-transform duration-300 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div
              key={`image-${activeSlide}`}
              className="relative hidden animate-[fadeIn_500ms_ease-out] lg:block"
            >
              <div className="relative mx-auto w-full max-w-[650px]">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-[#ffc400]/10 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />

                <div className="relative aspect-[4/3] overflow-hidden bg-white/70 shadow-2xl shadow-slate-300/40 transition-transform duration-700 hover:-translate-y-1">
                  <Image
                    src={slide.image}
                    alt={`${slide.title} ${slide.highlight}`}
                    fill
                    priority={activeSlide === 0}
                    sizes="(max-width: 1024px) 0px, 55vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#ffc400]" />
                </div>

                <div className="relative mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          activeSlide === index
                            ? "w-8 bg-[#ffc400]"
                            : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={previousSlide}
                      aria-label="Previous slide"
                      className="flex h-8 w-8 items-center justify-center font-dm-sans text-white transition-all duration-300 hover:-translate-x-1 hover:text-[#ffc400]"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className="flex h-8 w-8 items-center justify-center font-dm-sans text-white transition-all duration-300 hover:translate-x-1 hover:text-[#ffc400]"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />

          <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#ffc400]/[0.05] blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />

              <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                The Shift
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />
            </div>

            <h2 className="font-hikasani text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#071b36] sm:text-4xl md:text-5xl lg:text-6xl">
              From ideas and learning
              <br className="hidden sm:block" />
              to{" "}
              <span className="inline-flex items-center gap-3 text-[#0d2d5a]">
                real outcomes
                <span className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.35)] sm:h-3 sm:w-3" />
              </span>
              .
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-dm-sans text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7">
              Technology should not exist just for the sake of technology. We
              focus on turning knowledge, ideas and business needs into
              practical things people can actually use.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <div className="group rounded-3xl border border-slate-200 bg-white/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-[#071b36]/[0.04] sm:p-8 lg:p-9">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                    The usual approach
                  </span>

                  <h3 className="font-hikasani mt-2 text-2xl font-bold text-slate-800 sm:text-3xl">
                    Before
                  </h3>
                </div>

                <span className="font-dm-mono text-sm text-slate-300 transition-colors duration-300 group-hover:text-slate-400">
                  01
                </span>
              </div>

              <div className="mt-7 space-y-5">
                {shiftItems.map((item) => (
                  <div
                    key={item.number}
                    className="group/item flex gap-4 border-t border-slate-200 pt-5 first:border-t-0 first:pt-0"
                  >
                    <span className="font-dm-mono text-xs text-slate-400 transition-colors duration-300 group-hover/item:text-[#ffc400]">
                      {item.number}
                    </span>

                    <div>
                      <h4 className="font-dm-sans text-sm font-semibold text-slate-800 sm:text-base">
                        {item.title}
                      </h4>

                      <p className="mt-1.5 font-dm-sans text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex h-12 w-12 rotate-90 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-[#071b36] shadow-sm transition-all duration-500 hover:border-[#ffc400] hover:bg-[#ffc400] lg:rotate-0">
                →
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-[#071b36] p-6 text-white shadow-xl shadow-slate-300/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-8 lg:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#ffc400]/10 blur-3xl transition-transform duration-1000 group-hover:scale-125" />

              <div className="absolute left-0 top-8 h-16 w-0.5 bg-[#ffc400]" />

              <div className="relative flex items-center justify-between">
                <div>
                  <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/80">
                    The Tech Learning Hub approach
                  </span>

                  <h3 className="font-hikasani mt-2 text-2xl font-bold text-white sm:text-3xl">
                    With us
                  </h3>
                </div>

                <span className="font-dm-mono text-sm text-white/30">02</span>
              </div>

              <div className="relative mt-7 space-y-5">
                {betterItems.map((item) => (
                  <div
                    key={item.number}
                    className="group/item flex gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                  >
                    <span className="font-dm-mono text-xs text-[#ffc400]/70 transition-colors duration-300 group-hover/item:text-[#ffc400]">
                      {item.number}
                    </span>

                    <div>
                      <h4 className="font-dm-sans text-sm font-semibold text-white sm:text-base">
                        {item.title}
                      </h4>

                      <p className="mt-1.5 font-dm-sans text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 sm:mt-14 sm:flex-row">
            <p className="max-w-xl text-center font-dm-sans text-sm leading-6 text-slate-500 sm:text-left">
              Whether you are learning a new skill or building a digital
              solution, the goal is the same:{" "}
              <span className="font-semibold text-[#071b36]">
                make technology useful.
              </span>
            </p>

            <Link
              href="/services"
              className="group inline-flex min-h-12 items-center gap-4 rounded-2xl bg-[#071b36] px-5 font-dm-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a] hover:shadow-lg hover:shadow-[#071b36]/10"
            >
              <span>See What We Do</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffc400] text-[#071b36] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#ffc400]/[0.04] blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />

                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                  What We Do
                </span>
              </div>

              <h2 className="font-hikasani text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#071b36] sm:text-4xl md:text-5xl lg:text-6xl">
                Technology built
                <br className="hidden sm:block" />
                for{" "}
                <span className="inline-flex items-center gap-3 text-[#0d2d5a]">
                  real needs
                  <span className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.35)] sm:h-3 sm:w-3" />
                </span>
                .
              </h2>

              <p className="mt-5 max-w-2xl font-dm-sans text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7">
                From digital products and software to websites and applications,
                we create practical technology solutions designed around real
                people, businesses and their goals.
              </p>
            </div>

            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-4 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-dm-sans text-base font-semibold text-[#071b36] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffc400]/50 hover:shadow-md"
            >
              <span>View All Services</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071b36]/5 transition-all duration-300 group-hover:bg-[#ffc400] group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            <Link
              href="/websites"
              className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#ffc400]/[0.05] blur-3xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="font-dm-mono text-xs text-slate-400 transition-colors duration-300 group-hover:text-[#ffc400]">
                    01
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071b36] text-lg text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    ↗
                  </span>
                </div>

                <h3 className="font-hikasani mt-10 text-2xl font-bold tracking-[-0.02em] text-[#071b36] sm:text-3xl">
                  Websites
                </h3>

                <p className="mt-4 font-dm-sans text-sm leading-6 text-slate-500">
                  Modern, responsive websites designed to give businesses and
                  organizations a strong digital presence.
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-2 font-dm-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-[#071b36]">
                Explore Service
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <Link
              href="/softwares"
              className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#ffc400]/[0.05] blur-3xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="font-dm-mono text-xs text-slate-400 transition-colors duration-300 group-hover:text-[#ffc400]">
                    02
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071b36] text-lg text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    ↗
                  </span>
                </div>

                <h3 className="font-hikasani mt-10 text-2xl font-bold tracking-[-0.02em] text-[#071b36] sm:text-3xl">
                  Software
                </h3>

                <p className="mt-4 font-dm-sans text-sm leading-6 text-slate-500">
                  Purpose-built software solutions that help businesses manage,
                  automate and improve the way they work.
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-2 font-dm-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-[#071b36]">
                Explore Service
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <Link
              href="/apps"
              className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#ffc400]/[0.05] blur-3xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="font-dm-mono text-xs text-slate-400 transition-colors duration-300 group-hover:text-[#ffc400]">
                    03
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071b36] text-lg text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    ↗
                  </span>
                </div>

                <h3 className="font-hikasani mt-10 text-2xl font-bold tracking-[-0.02em] text-[#071b36] sm:text-3xl">
                  Applications
                </h3>

                <p className="mt-4 font-dm-sans text-sm leading-6 text-slate-500">
                  Digital applications created to solve specific problems and
                  provide useful experiences for users.
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-2 font-dm-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-[#071b36]">
                Explore Service
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <Link
              href="/services"
              className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-3xl bg-[#071b36] p-6 text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/40 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#ffc400]/[0.07] blur-3xl transition-transform duration-1000 group-hover:scale-125" />

              <div className="absolute left-0 top-8 h-16 w-0.5 bg-[#ffc400]" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="font-dm-mono text-xs text-white/30 transition-colors duration-300 group-hover:text-[#ffc400]">
                    04
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#071b36] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#ffc400]">
                    ↗
                  </span>
                </div>

                <h3 className="font-hikasani mt-10 text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
                  Digital Solutions
                </h3>

                <p className="mt-4 font-dm-sans text-sm leading-6 text-slate-300">
                  Bring your ideas together with practical technology solutions
                  built around your goals and requirements.
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-2 font-dm-mono text-[10px] uppercase tracking-[0.12em] text-white/40 transition-colors duration-300 group-hover:text-[#ffc400]">
                Explore Services
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:border-slate-300 hover:shadow-lg sm:mt-10 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-dm-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                Have something in mind?
              </p>

              <h3 className="font-hikasani mt-2 text-xl font-bold text-[#071b36] sm:text-2xl">
                Let&apos;s turn your idea into something useful.
              </h3>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-between gap-5 rounded-2xl bg-[#071b36] px-5 font-dm-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a]"
            >
              <span>Start a Conversation</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffc400] text-[#071b36] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="courses"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-50/70 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#ffc400]/[0.04] blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />

                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                  Learning
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />
              </div>

              <h2 className="font-hikasani text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#071b36] sm:text-4xl md:text-5xl lg:text-6xl">
                Learn skills
                <br className="hidden sm:block" />
                that{" "}
                <span className="inline-flex items-center gap-3 text-[#0d2d5a]">
                  actually matter
                  <span className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.35)] sm:h-3 sm:w-3" />
                </span>
                .
              </h2>

              <p className="mt-5 max-w-2xl font-dm-sans text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7">
                Move beyond theory with practical courses designed to help you
                understand technology, build real projects and develop skills
                you can actually use.
              </p>
            </div>

            <Link
              href="/courses"
              className="group inline-flex w-fit items-center gap-4 rounded-2xl bg-[#071b36] px-5 py-3.5 font-dm-sans text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a] hover:shadow-md"
            >
              <span>Explore All Courses</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffc400] text-[#071b36] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="group relative overflow-hidden rounded-3xl bg-[#071b36] p-7 text-white shadow-xl shadow-slate-300/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-9 lg:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ffc400]/[0.07] blur-3xl transition-transform duration-1000 group-hover:scale-125" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="absolute left-0 top-8 h-16 w-0.5 bg-[#ffc400]" />

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/80">
                      Learn by doing
                    </span>

                    <h3 className="font-hikasani mt-3 max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
                      From learning
                      <br />
                      to building.
                    </h3>
                  </div>

                  <span className="font-dm-mono text-sm text-white/30">01</span>
                </div>

                <p className="relative mt-6 max-w-xl font-dm-sans text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                  Our learning approach connects concepts with practice. You
                  learn something, apply it, build with it and understand how it
                  works in a real situation.
                </p>

                <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-[#ffc400]/30 hover:bg-[#ffc400]/[0.05]">
                    <span className="font-dm-mono text-[10px] uppercase tracking-[0.12em] text-[#ffc400]/60">
                      01
                    </span>

                    <h4 className="font-hikasani mt-3 text-base font-semibold text-white">
                      Learn
                    </h4>

                    <p className="mt-1.5 font-dm-sans text-xs leading-5 text-slate-400">
                      Understand the foundation.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-[#ffc400]/30 hover:bg-[#ffc400]/[0.05]">
                    <span className="font-dm-mono text-[10px] uppercase tracking-[0.12em] text-[#ffc400]/60">
                      02
                    </span>

                    <h4 className="font-hikasani mt-3 text-base font-semibold text-white">
                      Build
                    </h4>

                    <p className="mt-1.5 font-dm-sans text-xs leading-5 text-slate-400">
                      Turn knowledge into projects.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-[#ffc400]/30 hover:bg-[#ffc400]/[0.05]">
                    <span className="font-dm-mono text-[10px] uppercase tracking-[0.12em] text-[#ffc400]/60">
                      03
                    </span>

                    <h4 className="font-hikasani mt-3 text-base font-semibold text-white">
                      Apply
                    </h4>

                    <p className="mt-1.5 font-dm-sans text-xs leading-5 text-slate-400">
                      Use skills in real situations.
                    </p>
                  </div>
                </div>

                <Link
                  href="/courses"
                  className="group relative mt-8 inline-flex items-center gap-3 font-dm-sans text-sm font-semibold text-white transition-colors duration-300 hover:text-[#ffc400]"
                >
                  <span>Start Learning</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid gap-5">
              <Link
                href="/courses"
                className="group rounded-3xl border border-slate-200 bg-slate-50/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071b36] font-dm-mono text-sm text-white transition-colors duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    01
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#071b36] shadow-sm transition-all duration-300 group-hover:bg-[#ffc400] group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="font-hikasani mt-7 text-2xl font-bold text-[#071b36] sm:text-3xl">
                  Technology Skills
                </h3>

                <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500">
                  Develop practical digital and technology skills through
                  structured learning and hands-on projects.
                </p>
              </Link>

              <Link
                href="/courses"
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0d2d5a] font-dm-mono text-sm text-white transition-colors duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    02
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-[#071b36] shadow-sm transition-all duration-300 group-hover:bg-[#ffc400] group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="font-hikasani mt-7 text-2xl font-bold text-[#071b36] sm:text-3xl">
                  Career-Focused Learning
                </h3>

                <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500">
                  Build confidence through useful skills, practical experience
                  and projects that move you closer to your goals.
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 transition-all duration-500 hover:border-slate-300 sm:mt-10 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                For learners
              </span>

              <h3 className="font-hikasani mt-2 text-2xl font-bold text-[#071b36] sm:text-3xl">
                Ready to build something?
              </h3>

              <p className="mt-2 max-w-2xl font-dm-sans text-sm leading-6 text-slate-500">
                Explore our courses and find a practical starting point for your
                learning journey.
              </p>
            </div>

            <Link
              href="/courses"
              className="group inline-flex min-h-12 w-fit items-center gap-4 rounded-2xl bg-[#071b36] px-5 font-dm-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a]"
            >
              <span>Find a Course</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffc400] text-[#071b36] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="why-us"
        className="relative overflow-hidden bg-[#071b36] py-20 text-white sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#ffc400]/[0.05] blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
          <div className="absolute left-[45%] top-[25%] h-64 w-64 rounded-full bg-[#ffc400]/[0.025] blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />
                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#ffc400]/80 sm:text-xs">
                  Why Us
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />
              </div>

              <h2 className="font-hikasani text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Not just technology.
                <br />
                <span className="inline-flex items-center gap-3 text-[#ffc400]">
                  Technology with purpose
                  <span className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.35)] sm:h-3 sm:w-3" />
                </span>
                .
              </h2>

              <p className="mt-6 max-w-lg font-dm-sans text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                We believe good technology should solve a real problem, make
                something easier and create value for the people who use it.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 font-dm-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffc400]/40 hover:bg-white/10"
              >
                <span>Learn About Us</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36] group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ffc400]/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/10 sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ffc400]/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 font-dm-mono text-sm text-slate-300 transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    01
                  </span>
                  <span className="font-dm-mono text-xs text-white/20 transition-colors duration-300 group-hover:text-[#ffc400]/60">
                    FOCUS
                  </span>
                </div>

                <h3 className="font-hikasani relative mt-8 text-2xl font-bold text-white">
                  Practical First
                </h3>

                <p className="relative mt-3 font-dm-sans text-sm leading-6 text-slate-400">
                  We focus on what can actually be learned, built, used and
                  improved rather than technology for technology's sake.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ffc400]/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/10 sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ffc400]/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 font-dm-mono text-sm text-slate-300 transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    02
                  </span>
                  <span className="font-dm-mono text-xs text-white/20 transition-colors duration-300 group-hover:text-[#ffc400]/60">
                    APPROACH
                  </span>
                </div>

                <h3 className="font-hikasani relative mt-8 text-2xl font-bold text-white">
                  Built Around You
                </h3>

                <p className="relative mt-3 font-dm-sans text-sm leading-6 text-slate-400">
                  Every learner, idea and business has different needs. We
                  design our approach around the outcome that matters to you.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ffc400]/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/10 sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ffc400]/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 font-dm-mono text-sm text-slate-300 transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    03
                  </span>
                  <span className="font-dm-mono text-xs text-white/20 transition-colors duration-300 group-hover:text-[#ffc400]/60">
                    EXPERIENCE
                  </span>
                </div>

                <h3 className="font-hikasani relative mt-8 text-2xl font-bold text-white">
                  Learn From Doing
                </h3>

                <p className="relative mt-3 font-dm-sans text-sm leading-6 text-slate-400">
                  Real understanding comes from applying knowledge. Our work
                  connects learning with projects, problems and practical use.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ffc400]/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/10 sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ffc400]/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 font-dm-mono text-sm text-slate-300 transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    04
                  </span>
                  <span className="font-dm-mono text-xs text-white/20 transition-colors duration-300 group-hover:text-[#ffc400]/60">
                    OUTCOME
                  </span>
                </div>

                <h3 className="font-hikasani relative mt-8 text-2xl font-bold text-white">
                  Built To Be Useful
                </h3>

                <p className="relative mt-3 font-dm-sans text-sm leading-6 text-slate-400">
                  Whether it is a new skill or a digital solution, our goal is
                  to create something useful beyond the learning or development
                  process itself.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl font-dm-sans text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Different needs. Different challenges. One simple goal:
                <span className="ml-1 font-semibold text-white">
                  create meaningful results.
                </span>
              </p>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-fit items-center gap-4 rounded-2xl bg-white px-5 font-dm-sans text-base font-semibold text-[#071b36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffc400] hover:shadow-lg hover:shadow-[#ffc400]/10"
              >
                <span>Work With Us</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071b36]/5 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="work"
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
                  Featured Work
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />
              </div>

              <h2 className="font-hikasani text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#071b36] sm:text-4xl md:text-5xl lg:text-6xl">
                Ideas turned into
                <br className="hidden sm:block" />
                <span className="inline-flex items-center gap-3 text-[#0d2d5a]">
                  something real
                  <span className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.35)] sm:h-3 sm:w-3" />
                </span>
                .
              </h2>

              <p className="mt-5 max-w-2xl font-dm-sans text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7">
                Explore a selection of digital products, websites, software and
                applications created to solve real problems and support real
                goals.
              </p>
            </div>

            <Link
              href="/projects"
              className="group inline-flex w-fit items-center gap-4 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-dm-sans text-base font-semibold text-[#071b36] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffc400]/60 hover:shadow-md"
            >
              <span>View All Work</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071b36]/5 transition-all duration-300 group-hover:bg-[#ffc400] group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 lg:mt-16 lg:grid-cols-[1.25fr_0.75fr]">
            <Link
              href="/projects"
              className="group relative min-h-[430px] overflow-hidden rounded-3xl bg-[#071b36] p-7 text-white shadow-xl shadow-slate-300/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#071b36]/15 sm:p-9 lg:min-h-[500px] lg:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(255,196,0,0.06),transparent_35%)]" />

              <div className="absolute left-0 top-10 h-16 w-0.5 bg-[#ffc400]" />

              <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#ffc400]/40 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                ↗
              </div>

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/80">
                    Featured Project
                  </span>

                  <h3 className="font-hikasani mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                    Digital experiences
                    <br />
                    built for people.
                  </h3>

                  <p className="mt-5 max-w-lg font-dm-sans text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    From the first idea to the final product, we bring together
                    design, development and technology to create digital
                    experiences that are simple, useful and effective.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-dm-mono text-[10px] uppercase tracking-[0.1em] text-slate-300 transition-colors duration-300 group-hover:border-[#ffc400]/20">
                    Web
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-dm-mono text-[10px] uppercase tracking-[0.1em] text-slate-300 transition-colors duration-300 group-hover:border-[#ffc400]/20">
                    Software
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-dm-mono text-[10px] uppercase tracking-[0.1em] text-slate-300 transition-colors duration-300 group-hover:border-[#ffc400]/20">
                    Digital
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid gap-5">
              <Link
                href="/websites"
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 font-dm-mono text-sm text-[#071b36] transition-all duration-300 group-hover:bg-[#ffc400]">
                    01
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-[#071b36] transition-all duration-300 group-hover:bg-[#ffc400] group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="font-hikasani mt-8 text-2xl font-bold text-[#071b36] sm:text-3xl">
                  Websites
                </h3>

                <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500">
                  Responsive digital experiences designed to represent brands,
                  organizations and businesses online.
                </p>

                <div className="mt-6 font-dm-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-[#0d2d5a]">
                  Explore Websites →
                </div>
              </Link>

              <Link
                href="/softwares"
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0d2d5a] font-dm-mono text-sm text-white transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                    02
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-[#071b36] transition-all duration-300 group-hover:bg-[#ffc400] group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="font-hikasani mt-8 text-2xl font-bold text-[#071b36] sm:text-3xl">
                  Software
                </h3>

                <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500">
                  Purpose-built systems that help businesses organize, automate
                  and improve the way they work.
                </p>

                <div className="mt-6 font-dm-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-[#0d2d5a]">
                  Explore Software →
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            <div className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-7">
              <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 group-hover:text-[#0d2d5a]">
                What matters
              </span>

              <h3 className="font-hikasani mt-3 text-xl font-bold text-[#071b36] sm:text-2xl">
                Understand the problem
              </h3>

              <p className="mt-2 font-dm-sans text-sm leading-6 text-slate-500">
                Good solutions start by understanding what people actually need.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-7">
              <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 group-hover:text-[#0d2d5a]">
                What matters
              </span>

              <h3 className="font-hikasani mt-3 text-xl font-bold text-[#071b36] sm:text-2xl">
                Build with intention
              </h3>

              <p className="mt-2 font-dm-sans text-sm leading-6 text-slate-500">
                Every feature and decision should contribute to a useful
                outcome.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:col-span-2 lg:col-span-1 lg:p-7">
              <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 group-hover:text-[#0d2d5a]">
                What matters
              </span>

              <h3 className="font-hikasani mt-3 text-xl font-bold text-[#071b36] sm:text-2xl">
                Create lasting value
              </h3>

              <p className="mt-2 font-dm-sans text-sm leading-6 text-slate-500">
                The goal is technology that remains useful beyond the launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="process"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-50 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#ffc400]/[0.04] blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />

              <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                How We Work
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />
            </div>

            <h2 className="font-hikasani text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#071b36] sm:text-4xl md:text-5xl lg:text-6xl">
              Simple process.
              <br />
              <span className="inline-flex items-center gap-3 text-[#0d2d5a]">
                Clear outcomes
                <span className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.35)] sm:h-3 sm:w-3" />
              </span>
              .
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-dm-sans text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7">
              Whether you are learning a skill or building a digital solution,
              we keep the process focused, practical and connected to the
              outcome you actually want.
            </p>
          </div>

          <div className="relative mt-14 sm:mt-16 lg:mt-20">
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-slate-200 lg:block" />

            <div className="grid gap-8 lg:grid-cols-4 lg:gap-5">
              <div className="group relative">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-slate-200 bg-white font-dm-mono text-sm text-[#071b36] shadow-sm transition-all duration-500 group-hover:border-[#ffc400] group-hover:bg-[#ffc400] group-hover:text-[#071b36] group-hover:shadow-[0_8px_25px_rgba(255,196,0,0.12)] lg:mx-0">
                  <span>01</span>
                </div>

                <div className="mt-7 text-center lg:text-left">
                  <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 group-hover:text-[#0d2d5a]">
                    Start
                  </span>

                  <h3 className="font-hikasani mt-2 text-2xl font-bold text-[#071b36] sm:text-3xl">
                    Understand
                  </h3>

                  <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500">
                    We begin by understanding the person, business, problem or
                    learning goal behind the work.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-slate-200 bg-white font-dm-mono text-sm text-[#071b36] shadow-sm transition-all duration-500 group-hover:border-[#ffc400] group-hover:bg-[#ffc400] group-hover:text-[#071b36] group-hover:shadow-[0_8px_25px_rgba(255,196,0,0.12)] lg:mx-0">
                  <span>02</span>
                </div>

                <div className="mt-7 text-center lg:text-left">
                  <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 group-hover:text-[#0d2d5a]">
                    Plan
                  </span>

                  <h3 className="font-hikasani mt-2 text-2xl font-bold text-[#071b36] sm:text-3xl">
                    Define
                  </h3>

                  <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500">
                    We identify what needs to be done, choose the right approach
                    and create a clear direction before moving forward.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#ffc400] bg-[#071b36] font-dm-mono text-sm text-white shadow-lg shadow-[#071b36]/10 transition-all duration-500 group-hover:bg-[#ffc400] group-hover:text-[#071b36] group-hover:shadow-[0_8px_25px_rgba(255,196,0,0.16)] lg:mx-0">
                  <span>03</span>
                </div>

                <div className="mt-7 text-center lg:text-left">
                  <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/80 transition-colors duration-300 group-hover:text-[#0d2d5a]">
                    Create
                  </span>

                  <h3 className="font-hikasani mt-2 text-2xl font-bold text-[#071b36] sm:text-3xl">
                    Build
                  </h3>

                  <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500">
                    We turn the plan into practical learning, useful technology,
                    working products and real-world applications.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-slate-200 bg-white font-dm-mono text-sm text-[#071b36] shadow-sm transition-all duration-500 group-hover:border-[#ffc400] group-hover:bg-[#ffc400] group-hover:text-[#071b36] group-hover:shadow-[0_8px_25px_rgba(255,196,0,0.12)] lg:mx-0">
                  <span>04</span>
                </div>

                <div className="mt-7 text-center lg:text-left">
                  <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 group-hover:text-[#0d2d5a]">
                    Result
                  </span>

                  <h3 className="font-hikasani mt-2 text-2xl font-bold text-[#071b36] sm:text-3xl">
                    Improve
                  </h3>

                  <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500">
                    We review, refine and focus on making the final result
                    genuinely useful beyond the initial delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 transition-all duration-500 hover:border-slate-300 hover:shadow-lg sm:mt-16 sm:p-8 lg:mt-20 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ffc400]/[0.04] blur-3xl transition-transform duration-1000 group-hover:scale-125" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                  One approach
                </span>

                <h3 className="font-hikasani mt-3 text-2xl font-bold leading-tight text-[#071b36] sm:text-3xl">
                  Understand first. Build better.
                </h3>

                <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500 sm:text-base">
                  We do not believe in unnecessary complexity. The process
                  should make the work clearer, not harder.
                </p>
              </div>

              <Link
                href="/contact"
                className="group relative mt-3 inline-flex min-h-12 w-fit shrink-0 items-center gap-4 rounded-2xl bg-[#071b36] px-4 font-dm-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a] hover:shadow-lg hover:shadow-[#071b36]/10"
              >
                <span>Start With Us</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffc400] text-[#071b36] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#ffc400]/[0.04] blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />

              <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                What People Say
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />
            </div>

            <h2 className="font-hikasani text-3xl font-bold leading-[1.05] tracking-[-0.035em] text-[#071b36] sm:text-4xl md:text-5xl lg:text-6xl">
              Experiences that
              <br />
              <span className="inline-flex items-center gap-3 text-[#0d2d5a]">
                speak for themselves
                <span className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.35)] sm:h-3 sm:w-3" />
              </span>
              .
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-dm-sans text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7">
              The best measure of our work is the experience people have while
              learning, building and working with us.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 lg:mt-16 lg:grid-cols-3">
            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-dm-mono text-sm tracking-[0.18em] text-[#0d2d5a] transition-colors duration-300 group-hover:text-[#ffc400]">
                  ★★★★★
                </span>

                <span className="font-dm-mono text-[10px] text-slate-300">
                  01
                </span>
              </div>

              <p className="mt-7 font-dm-sans text-sm leading-7 text-slate-600 sm:text-base">
                “The learning experience was practical and easy to follow. I was
                able to understand the concepts and actually use them instead of
                just memorizing them.”
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071b36] font-dm-mono text-xs text-white transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                  A
                </div>

                <div>
                  <h3 className="font-hikasani text-sm font-bold text-[#071b36]">
                    Ahmed
                  </h3>

                  <p className="font-dm-sans text-xs text-slate-400">Learner</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-[#071b36] p-6 text-white shadow-xl shadow-slate-300/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#071b36]/15 sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#ffc400]/10 blur-3xl transition-transform duration-1000 group-hover:scale-125" />

              <div className="absolute left-0 top-8 h-16 w-0.5 bg-[#ffc400]" />

              <div className="relative flex items-center justify-between">
                <span className="font-dm-mono text-sm tracking-[0.18em] text-[#ffc400]">
                  ★★★★★
                </span>

                <span className="font-dm-mono text-[10px] text-white/20">
                  02
                </span>
              </div>

              <p className="relative mt-7 font-dm-sans text-sm leading-7 text-slate-300 sm:text-base">
                “They took the time to understand what we actually needed before
                building the solution. The result was much more useful than a
                generic approach.”
              </p>

              <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 font-dm-mono text-xs text-white transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                  S
                </div>

                <div>
                  <h3 className="font-hikasani text-sm font-bold text-white">
                    Sara
                  </h3>

                  <p className="font-dm-sans text-xs text-slate-400">Client</p>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-dm-mono text-sm tracking-[0.18em] text-[#0d2d5a] transition-colors duration-300 group-hover:text-[#ffc400]">
                  ★★★★★
                </span>

                <span className="font-dm-mono text-[10px] text-slate-300">
                  03
                </span>
              </div>

              <p className="mt-7 font-dm-sans text-sm leading-7 text-slate-600 sm:text-base">
                “What stood out was the focus on real-world application. It
                helped me move from knowing something in theory to actually
                being able to use it.”
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d2d5a] font-dm-mono text-xs text-white transition-all duration-300 group-hover:bg-[#ffc400] group-hover:text-[#071b36]">
                  M
                </div>

                <div>
                  <h3 className="font-hikasani text-sm font-bold text-[#071b36]">
                    Muhammad
                  </h3>

                  <p className="font-dm-sans text-xs text-slate-400">Student</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:border-slate-300 hover:shadow-lg sm:mt-10 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ffc400]/[0.04] blur-3xl transition-transform duration-1000 group-hover:scale-125" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                  Built on trust
                </span>

                <h3 className="font-hikasani mt-3 text-2xl font-bold leading-tight text-[#071b36] sm:text-3xl">
                  Your goals come first.
                </h3>

                <p className="mt-3 font-dm-sans text-sm leading-6 text-slate-500 sm:text-base">
                  Whether you are starting from zero, improving your skills or
                  bringing a business idea to life, we focus on understanding
                  what success means for you.
                </p>
              </div>

              <Link
                href="/contact"
                className="group relative mt-3 inline-flex min-h-12 w-fit shrink-0 items-center gap-4 rounded-2xl bg-[#071b36] px-4 font-dm-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a] hover:shadow-lg hover:shadow-[#071b36]/10"
              >
                <span>Talk To Us</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffc400] text-[#071b36] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#071b36] py-20 text-white sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#ffc400]/[0.05] blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
          <div className="absolute left-[45%] top-[20%] h-64 w-64 rounded-full bg-[#ffc400]/[0.025] blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />

              <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#ffc400]/80 sm:text-xs">
                Let’s Work Together
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc400]" />
            </div>

            <h2 className="font-hikasani text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Have an idea?
              <br />
              <span className="inline-flex items-center gap-3 text-[#ffc400]">
                Let’s make it useful
                <span className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#ffc400] shadow-[0_0_14px_rgba(255,196,0,0.35)] sm:h-3 sm:w-3" />
              </span>
              .
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-dm-sans text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Whether you want to learn a new skill, build a digital product,
              improve your business or simply discuss an idea, we would love to
              hear from you.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group mt-3 inline-flex min-h-12 items-center gap-4 rounded-2xl bg-[#ffc400] px-4 font-dm-sans text-base font-semibold text-[#071b36] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd43b] hover:shadow-lg hover:shadow-[#ffc400]/10"
              >
                <span>Start a Conversation</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071b36]/10 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>

              <Link
                href="/courses"
                className="group mt-3 inline-flex min-h-12 items-center rounded-2xl border border-white/15 bg-white/5 px-4 font-dm-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffc400]/40 hover:bg-[#ffc400]/10"
              >
                <span>Explore Courses</span>
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 border-t border-white/10 pt-10 sm:mt-16 sm:grid-cols-3 lg:mt-20">
            <Link
              href="/services"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ffc400]/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/10 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ffc400]/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <span className="font-dm-mono text-[10px] uppercase tracking-[0.14em] text-[#ffc400]/70">
                  For Businesses
                </span>

                <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ffc400]">
                  ↗
                </span>
              </div>

              <h3 className="font-hikasani relative mt-5 text-xl font-bold text-white sm:text-2xl">
                Need a digital solution?
              </h3>

              <p className="relative mt-2 font-dm-sans text-sm leading-6 text-slate-400">
                Let’s discuss your requirements and find the right technology
                solution.
              </p>
            </Link>

            <Link
              href="/courses"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ffc400]/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/10 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ffc400]/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <span className="font-dm-mono text-[10px] uppercase tracking-[0.14em] text-[#ffc400]/70">
                  For Learners
                </span>

                <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ffc400]">
                  ↗
                </span>
              </div>

              <h3 className="font-hikasani relative mt-5 text-xl font-bold text-white sm:text-2xl">
                Ready to learn?
              </h3>

              <p className="relative mt-2 font-dm-sans text-sm leading-6 text-slate-400">
                Explore practical courses designed around useful skills and real
                application.
              </p>
            </Link>

            <Link
              href="/about"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ffc400]/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/10 sm:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ffc400]/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <span className="font-dm-mono text-[10px] uppercase tracking-[0.14em] text-[#ffc400]/70">
                  Get To Know Us
                </span>

                <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ffc400]">
                  ↗
                </span>
              </div>

              <h3 className="font-hikasani relative mt-5 text-xl font-bold text-white sm:text-2xl">
                Want to know more?
              </h3>

              <p className="relative mt-2 font-dm-sans text-sm leading-6 text-slate-400">
                Discover who we are, what we believe and why we built Tech
                Learning Hub.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <footer className="relative overflow-hidden bg-[#071b36] text-white">
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
              <div className="max-w-sm">
                <Link href="/" className="group inline-flex items-center">
                  <Image
                    src="/images/logo-circle-footer.png"
                    alt="Tech Learning Hub"
                    width={72}
                    height={72}
                    className="h-auto w-[72px] object-contain transition-transform duration-500 group-hover:-translate-y-1"
                  />
                </Link>

                <p className="mt-6 font-dm-sans text-sm leading-6 text-slate-400">
                  Practical technology, useful digital solutions and learning
                  that helps people move from ideas to real outcomes.
                </p>

                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-3 font-dm-sans text-sm font-semibold text-white transition-colors duration-300 hover:text-[#ffc400]"
                >
                  <span>Let’s Work Together</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <div>
                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/70">
                  Explore
                </span>

                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/services"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Services
                  </Link>

                  <Link
                    href="/courses"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Courses
                  </Link>

                  <Link
                    href="/projects"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Projects
                  </Link>

                  <Link
                    href="/contact"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div>
                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/70">
                  Services
                </span>

                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/websites"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Websites
                  </Link>

                  <Link
                    href="/softwares"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Software
                  </Link>

                  <Link
                    href="/apps"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Applications
                  </Link>

                  <Link
                    href="/services"
                    className="w-fit font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Digital Solutions
                  </Link>
                </div>
              </div>

              <div>
                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#ffc400]/70">
                  Contact
                </span>

                <div className="mt-5 flex flex-col gap-4">
                  <a
                    href="mailto:hello@techlearninghub.com"
                    className="font-dm-sans text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    hello@techlearninghub.com
                  </a>

                  <a
                    href="https://wa.me/"
                    className="font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    WhatsApp
                  </a>

                  <Link
                    href="/contact"
                    className="font-dm-sans text-sm text-slate-400 transition-colors duration-300 hover:text-[#ffc400]"
                  >
                    Send an Enquiry
                  </Link>
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 font-dm-mono text-xs text-slate-400 transition-all duration-300 hover:border-[#ffc400]/30 hover:bg-[#ffc400] hover:text-[#071b36]"
                  >
                    f
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 font-dm-mono text-xs text-slate-400 transition-all duration-300 hover:border-[#ffc400]/30 hover:bg-[#ffc400] hover:text-[#071b36]"
                  >
                    ig
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 font-dm-mono text-xs text-slate-400 transition-all duration-300 hover:border-[#ffc400]/30 hover:bg-[#ffc400] hover:text-[#071b36]"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-7 sm:mt-16 sm:pt-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-dm-sans text-xs text-slate-500 sm:text-sm">
                  © {new Date().getFullYear()} Tech Learning Hub. All rights
                  reserved.
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes fadeIn {
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
    </main>
  );
}
