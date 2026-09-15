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
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />

          <span className="absolute left-[7%] top-[25%] text-2xl text-white/20">
            ✦
          </span>
          <span className="absolute right-[8%] top-[18%] text-xl text-white/20">
            ✦
          </span>
          <span className="absolute bottom-[18%] left-[42%] text-sm text-white/20">
            ✦
          </span>
        </div>

        <header className="absolute inset-x-0 top-0 z-50 border-b border-white/40 bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.16)] backdrop-blur-md">
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
                    className="whitespace-nowrap text-sm font-medium text-slate-900 transition-colors hover:text-slate-600"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="https://wa.me/923080777142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  WhatsApp
                </Link>
              </div>

              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-950 shadow-sm backdrop-blur-sm sm:h-10 sm:w-10 lg:hidden"
              >
                <span className="text-lg leading-none sm:text-xl">
                  {menuOpen ? "×" : "☰"}
                </span>
              </button>
            </nav>
          </div>
        </header>

        {menuOpen && (
          <div
            className="fixed inset-0 z-[99999] h-[100vh] w-[100vw] bg-white lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-full w-full flex-col bg-white">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-2xl leading-none text-white transition-transform hover:scale-105"
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
                      className="flex min-h-14 items-center border-b border-slate-200 px-2 text-lg font-medium text-slate-900 transition-colors hover:text-slate-500"
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
                  className="mt-6 flex min-h-14 items-center justify-center rounded-2xl bg-slate-950 px-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
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
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3.5 py-2 backdrop-blur-sm sm:mb-6 sm:px-4">
                <span className="h-2 w-2 rounded-full bg-white" />
                <span className="font-dm-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white sm:text-xs sm:tracking-[0.16em]">
                  {slide.eyebrow}
                </span>
              </div>

              <h1
                className="max-w-3xl text-4xl font-bold leading-[1] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
                style={{ fontFamily: '"Hikasani Sans Serif", sans-serif' }}
              >
                {slide.title}
                <br />
                {slide.highlight}
              </h1>

              <p className="mt-6 max-w-xl font-dm-sans text-sm leading-6 text-[#c9d4db] sm:mt-7 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                {slide.description}
              </p>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={slide.href}
                  className="group inline-flex min-h-13 min-w-[180px] items-center justify-between rounded-2xl bg-white px-4 font-dm-sans text-base text-slate-950 transition-transform hover:-translate-y-0.5"
                  style={{ fontFamily: '"Hikasani Sans Serif", sans-serif' }}
                >
                  <span>{slide.cta}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/10 transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>

                <Link
                  href="https://wa.me/923080777142?text=Hello%2C%20I%20am%20interested%20in%20Tech%20Learning%20Hub."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-13 items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-4 font-dm-sans text-base font-semibold text-white backdrop-blur-sm transition-transform hover:-translate-y-0.5 sm:min-h-14"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>

            <div
              key={`image-${activeSlide}`}
              className="relative hidden animate-[fadeIn_500ms_ease-out] lg:block"
            >
              <div className="relative mx-auto w-full max-w-[650px]">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-100/50 blur-3xl" />

                <div className="relative aspect-[4/3] overflow-hidden bg-white/70 shadow-2xl shadow-slate-300/40">
                  <Image
                    src={slide.image}
                    alt={`${slide.title} ${slide.highlight}`}
                    fill
                    priority={activeSlide === 0}
                    sizes="(max-width: 1024px) 0px, 55vw"
                    className="object-cover transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
                </div>

                <div className="relative mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeSlide === index
                            ? "w-8 bg-white"
                            : "w-2 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={previousSlide}
                      aria-label="Previous slide"
                      className="flex h-8 w-8 items-center justify-center text-white transition-transform hover:-translate-x-1"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className="flex h-8 w-8 items-center justify-center text-white transition-transform hover:translate-x-1"
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

      <style jsx global>{`
        .font-dm-mono {
          font-family: var(--font-dm-mono), monospace;
        }

        .font-dm-sans {
          font-family: var(--font-dm-sans), sans-serif;
        }

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
