"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, Share2, BarChart2, Code2, Palette, Headphones, Plus, Minus } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    tag: "SEO",
    desc: "Most businesses are invisible on Google — and they don't even know it. We fix that. Through deep keyword research, technical audits, and authoritative link building, we get your business ranking where your customers are already searching. The result: a steady stream of qualified leads that doesn't cost you per click.",
    features: ["Full Keyword Research & Mapping", "Technical SEO Audits & Fixes", "Authority Link Building", "Local SEO & Google Maps Ranking", "Monthly Rankings & Traffic Reports"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    tag: "SMM",
    desc: "Posting without a strategy is just noise. We build a social presence that actually means something — content that stops the scroll, sparks conversation, and turns followers into buyers. From organic growth to targeted ad campaigns, every post has a purpose: growing your brand and filling your pipeline.",
    features: ["Platform Strategy (Meta, IG, LinkedIn, TikTok)", "Scroll-Stopping Content Creation", "Community Building & Engagement", "Paid Social Ad Campaigns", "Weekly Performance Reporting"],
  },
  {
    icon: BarChart2,
    title: "PPC & Paid Advertising",
    tag: "PPC",
    desc: "You shouldn't have to wonder if your ad dollars are working. We build tightly structured Google and Meta campaigns where every dollar is tracked, every click is intentional, and every week we're squeezing more performance out of your budget. No wasted spend. No mystery. Just results you can see.",
    features: ["Google Search & Display Ads", "Meta & Instagram Ad Campaigns", "Landing Page Optimization", "Bid Management & Budget Control", "Transparent ROI Reporting"],
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    tag: "WEB",
    desc: "Your website is your best salesperson — or your biggest liability. We build fast, modern, mobile-first websites that make an instant impression and guide visitors toward taking action. Every design decision is made with your customer in mind, and every line of code is optimized to load fast and rank well.",
    features: ["Custom Design (No Templates)", "Mobile-First & Lightning Fast", "SEO-Ready Architecture", "Lead Capture & Conversion Optimization", "CMS Integration & Ongoing Support"],
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    tag: "GFX",
    desc: "People judge businesses in seconds — and your visuals make that first impression before a single word is read. We build brand identities that communicate quality, authority, and trust at a glance. From your logo to your social graphics to your printed materials, everything looks like it belongs to a brand worth trusting.",
    features: ["Logo & Full Brand Identity Systems", "Business Cards & Print Materials", "Social Media Graphic Templates", "Ad Creatives & Display Assets", "Brand Style Guide"],
  },
  {
    icon: Headphones,
    title: "24/7 Answering Services",
    tag: "24/7",
    desc: "Every call you miss is a customer who called your competitor next. Our professional answering team handles every inbound call — day, night, weekend, or holiday — capturing lead details, answering common questions, and booking appointments on your behalf. You get every opportunity. You miss nothing.",
    features: ["Live Answering 24 Hours, 7 Days", "Lead Qualification & Capture", "Appointment Scheduling", "Custom Call Scripts for Your Business", "After-Hours & Overflow Coverage"],
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="py-28 bg-[#03060f] relative">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#3B9FD4] text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-xl">
              Six ways we put
              <br />
              <span className="gradient-text">your brand on the map.</span>
            </h2>
            <p className="text-white/38 text-base max-w-sm leading-relaxed">
              Most agencies specialize in one thing. We cover every channel —
              so your marketing works together, not in silos.
            </p>
          </div>
        </motion.div>

        {/* Accordion */}
        <div className="border-t border-white/8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isOpen = open === i;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`border-b border-white/8 transition-colors duration-200 ${isOpen ? "bg-white/2" : "hover:bg-white/[0.015]"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 px-2 py-6 text-left group"
                >
                  <span className={`text-xs font-mono font-bold tracking-widest w-10 shrink-0 transition-colors ${isOpen ? "text-[#3B9FD4]" : "text-white/18 group-hover:text-white/35"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-[#3B9FD4]" : "bg-white/5 group-hover:bg-white/8"}`}>
                    <Icon size={18} className={isOpen ? "text-white" : "text-white/45"} />
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <h3 className={`text-lg font-bold transition-colors duration-200 ${isOpen ? "text-white" : "text-white/65 group-hover:text-white"}`}>
                      {svc.title}
                    </h3>
                    <span className="text-xs text-white/18 font-mono font-bold tracking-widest hidden sm:block shrink-0">
                      {svc.tag}
                    </span>
                  </div>
                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "border-[#3B9FD4] text-[#3B9FD4]" : "border-white/10 text-white/28"}`}>
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" as const }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[76px] pr-12 pb-8 flex flex-col sm:flex-row gap-10">
                        <p className="text-white/42 text-sm leading-[1.85] flex-1 max-w-xl">
                          {svc.desc}
                        </p>
                        <ul className="flex-shrink-0 sm:w-56 grid grid-cols-1 gap-2.5">
                          {svc.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-sm text-white/50">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#3B9FD4] shrink-0 mt-1.5" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
