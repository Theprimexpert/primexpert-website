import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";

const services = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "PPC Management",
  "Web Development",
  "Graphic Design",
  "Answering Services",
];

export default function Footer() {
  return (
    <footer className="bg-[#080d1a] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-9 h-9">
                <Image src="/logo.jpg" alt="PrimeXpert" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg text-white">
                prime<span className="text-[#3B9FD4]">Xpert</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-6">
              Your end-to-end digital marketing partner. We help businesses grow,
              increase visibility, and achieve measurable results online.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+14435108100" className="flex items-center gap-2.5 text-white/35 hover:text-[#3B9FD4] text-sm transition-colors">
                <Phone size={13} /> +1 (443) 510-8100
              </a>
              <div className="flex items-start gap-2.5 text-white/35 text-sm">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                110 Margaret St, Burkburnett TX 76354
              </div>
              <a href="mailto:info@primexpert.com" className="flex items-center gap-2.5 text-white/35 hover:text-[#3B9FD4] text-sm transition-colors">
                <Mail size={13} /> info@primexpert.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/20 text-xs font-semibold uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/40 hover:text-white text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/20 text-xs font-semibold uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[["Home", "#home"], ["About", "#about"], ["Why Us", "#why-us"], ["Contact", "#contact"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/40 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-white/8 border border-white/10 hover:bg-[#3B9FD4] hover:border-[#3B9FD4] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} PrimeXpert. All rights reserved.</p>
          <p className="text-white/15 text-xs">110 Margaret St, Burkburnett TX 76354</p>
        </div>
      </div>
    </footer>
  );
}
