"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#03060f]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white p-0.5">
              <Image src="/logo.jpg" alt="PrimeXpert" fill className="object-contain" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              prime<span className="text-[#3B9FD4]">Xpert</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/55 hover:text-white transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+14435108100"
              className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
            >
              <Phone size={13} />
              (443) 510-8100
            </a>
            <a
              href="#contact"
              className="bg-white text-[#03060f] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#3B9FD4] hover:text-white transition-all duration-200"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#03060f]/95 backdrop-blur-xl border-b border-white/5`}
      >
        <div className="px-5 pb-5 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white font-medium py-2.5 text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 text-center bg-white text-[#03060f] font-semibold py-3 rounded-full text-sm"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
