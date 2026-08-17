"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: "easeOut" as const } },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d1940 0%, #1a2761 50%, #0e2055 100%)" }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "64px 64px"
      }} />
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#1E6FCC]/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#2979FF]/10 blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-32 pb-24">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-white/60 text-xs font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E6FCC] animate-pulse inline-block" />
          Burkburnett, TX · Serving Businesses Nationwide
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-black leading-[1.04] tracking-tight mb-6 text-white"
        >
          Your competitors
          <br />
          are{" "}
          <span style={{ background: "linear-gradient(135deg, #1E6FCC, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            growing online.
          </span>
          <br />
          You should be too.
        </motion.h1>

        {/* Sub */}
        <motion.p {...fadeUp(0.2)} className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          PrimeXpert is the full-service digital marketing agency that handles
          everything — SEO, paid ads, web design, social media, and 24/7
          answering services — so you can focus on running your business, not
          chasing leads.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#1E6FCC] hover:bg-[#1558a8] text-white font-bold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,111,204,0.4)] hover:scale-105"
          >
            Get a Free Strategy Call
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/30 font-medium text-sm px-7 py-4 rounded-full transition-all duration-300"
          >
            See What We Do
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-white/8 rounded-2xl overflow-hidden bg-white/8">
          {[
            { val: "500+", label: "Businesses Grown" },
            { val: "98%", label: "Client Retention" },
            { val: "3×", label: "Average ROI Lift" },
            { val: "10+", label: "Years in the Field" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0d1940]/80 backdrop-blur-sm px-6 py-6 flex flex-col items-center justify-center gap-1.5">
              <span className="text-3xl font-black text-white">{s.val}</span>
              <span className="text-white/35 text-xs font-medium tracking-wide uppercase">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave transition to white */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L60 70C120 60 240 40 360 36C480 32 600 44 720 50C840 56 960 54 1080 44C1200 34 1320 16 1380 8L1440 0V80H0Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}
