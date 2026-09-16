"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hero from "@/app/components/home/Hero";
import Services from "@/app/components/home/Services";
import Process from "@/app/components/home/Process";
import WhyUs from "@/app/components/home/WhyUs";
import Projects from "@/app/components/home/Projects";
import FooterCTA from "@/app/components/home/FooterCTA";
import Testimonials from "@/app/components/home/Testimonials";
import Footer from "@/app/components/home/Footer";

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

export default function HomePage() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={` bg-white`}>
      <header className="border-b border-slate-200/70 bg-[#f8fafc]/90 backdrop-blur-xl">
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
                className="h-auto w-[105px] object-contain transition-transform duration-300 hover:scale-[1.015] xs:w-[120px] sm:w-[150px] lg:w-[180px]"
              />
            </Link>

            <div className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative whitespace-nowrap py-1.5 font-dm-sans text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc400]/60 focus-visible:ring-offset-4 ${
                      isActive
                        ? "text-[#0d2d5a]"
                        : "text-[#071b36]/85 hover:text-[#0d2d5a]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-0 left-0 h-px bg-[#ffc400] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}

              <Link
                href="https://wa.me/923080777142"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex min-h-10 items-center whitespace-nowrap rounded-full border border-[#071b36] bg-[#071b36] px-4 font-dm-sans text-sm font-semibold text-white shadow-[0_4px_14px_rgba(7,27,54,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a] hover:shadow-[0_7px_18px_rgba(7,27,54,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc400]/70 focus-visible:ring-offset-2"
              >
                WhatsApp
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-[#071b36] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffc400]/70 hover:bg-white hover:text-[#0d2d5a] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc400]/60 sm:h-10 sm:w-10 lg:hidden"
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
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200/80 px-4 sm:h-20 sm:px-6">
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
                  className="h-auto w-[120px] object-contain transition-transform duration-300 hover:scale-[1.015] sm:w-[150px]"
                />
              </Link>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071b36] text-2xl leading-none text-white shadow-[0_5px_16px_rgba(7,27,54,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a] hover:shadow-[0_8px_20px_rgba(7,27,54,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc400] focus-visible:ring-offset-2"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
              <div className="flex flex-col">
                {navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex min-h-14 items-center justify-between border-b px-2 font-dm-sans text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc400] sm:min-h-16 sm:text-xl ${
                        isActive
                          ? "border-[#ffc400]/70 text-[#0d2d5a]"
                          : "border-slate-200 text-[#071b36] hover:border-[#ffc400]/60 hover:text-[#0d2d5a]"
                      }`}
                    >
                      <span>{item.label}</span>

                      <span
                        className={`font-dm-sans text-base transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 opacity-100 text-[#ffc400]"
                            : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>

              <Link
                href="https://wa.me/923080777142"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex min-h-14 items-center justify-center rounded-2xl bg-[#071b36] px-4 font-dm-sans text-base font-semibold text-white shadow-[0_8px_24px_rgba(7,27,54,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d2d5a] hover:shadow-[0_12px_28px_rgba(7,27,54,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc400] focus-visible:ring-offset-2"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      )}

      <Hero />

      <Services />

      <Process />

      <WhyUs />

      <Projects />

      <FooterCTA />

      <Testimonials />

      <Footer />
    </main>
  );
}
