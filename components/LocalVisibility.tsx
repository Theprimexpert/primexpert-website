"use client";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Compass, BookOpen, Map, ShieldCheck, Share2, CheckCircle2 } from "lucide-react";

const channels = [
  {
    icon: Sparkles,
    title: "AEO & GEO Optimization",
    desc: "Improve visibility across AI search and answer engines.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile & Google Maps",
    desc: "Optimize your profile and strengthen local search presence.",
  },
  {
    icon: Compass,
    title: "Apple Maps",
    desc: "Ensure accurate business information and local visibility.",
  },
  {
    icon: BookOpen,
    title: "Yelp & Yellow Pages",
    desc: "Build and optimize business listings.",
  },
  {
    icon: Map,
    title: "MapQuest",
    desc: "Improve location-based business visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Better Business Bureau (BBB)",
    desc: "Maintain a strong and trustworthy business presence.",
  },
  {
    icon: Share2,
    title: "Social Media Optimization",
    desc: "Strengthen your presence across major social media platforms.",
  },
];

export default function LocalVisibility() {
  return (
    <section id="local-visibility" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute left-1/4 top-0 w-[450px] h-[300px] bg-[#1E6FCC]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[#1E6FCC] text-sm font-semibold uppercase tracking-widest mb-4">Local Visibility</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a2761] leading-tight mb-6">
            Local Visibility
            <br />
            <span className="gradient-text">& Digital Growth.</span>
          </h2>
          <p className="text-[#1a2761]/50 text-base leading-[1.85]">
            We help businesses improve their online visibility and reach more
            local customers through:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {channels.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="shine glass rounded-2xl p-7 hover:border-gray-200 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1E6FCC]/10 flex items-center justify-center mb-5 group-hover:bg-[#1E6FCC]/20 transition-colors">
                <Icon size={18} className="text-[#1E6FCC]" />
              </div>
              <h3 className="text-[#1a2761] font-bold text-sm mb-2.5 leading-snug">{title}</h3>
              <p className="text-[#1a2761]/55 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 border-t border-gray-200 pt-8"
        >
          <CheckCircle2 size={20} className="text-[#1E6FCC] shrink-0" />
          <p className="text-[#1a2761] font-semibold text-base sm:text-lg">
            Our goal is simple: <span className="text-[#1a2761]/60 font-normal">Get your business found, trusted, and chosen by more customers online.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
