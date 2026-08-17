"use client";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Users, Zap, ArrowRight } from "lucide-react";

const pillars = [
  { icon: TrendingUp, label: "Strategy Before Tactics", desc: "We diagnose your market before we ever write an ad or publish a post" },
  { icon: Shield, label: "No Vanity Metrics", desc: "We report on revenue impact — not likes, impressions, or effort" },
  { icon: Users, label: "A Real Team, Not a Portal", desc: "You talk to the people actually working on your account" },
  { icon: Zap, label: "Speed Without Shortcuts", desc: "Campaigns live in days. Quality is never traded for speed" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#f4f7fb] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#1a2761]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <p className="text-[#1E6FCC] text-sm font-semibold uppercase tracking-widest mb-4">About PrimeXpert</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a2761] leading-tight mb-6">
              We built this agency
              <br />
              <span className="gradient-text">for business owners,</span>
              <br />
              not marketers.
            </h2>
            <p className="text-[#1a2761]/50 text-base leading-[1.85] mb-5 max-w-lg">
              PrimeXpert was founded on one frustration: too many marketing
              agencies were great at looking busy but terrible at driving
              actual business growth. Fancy dashboards, bloated retainers,
              and results that never quite materialized.
            </p>
            <p className="text-[#1a2761]/50 text-base leading-[1.85] mb-10 max-w-lg">
              We do things differently. Based in Burkburnett, TX, our team
              of specialists works as a true extension of your business —
              accountable to your revenue goals, not our billable hours. When
              you win, we win. That&apos;s the only alignment that matters.
            </p>

            <div className="flex flex-wrap gap-10 mb-10">
              {[
                { val: "500+", label: "Businesses Served" },
                { val: "$2M+", label: "Ad Spend Managed" },
                { val: "98%", label: "Client Retention Rate" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-[#1a2761]">{s.val}</div>
                  <div className="text-[#1a2761]/40 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#1a2761] font-bold text-sm px-6 py-3.5 rounded-full hover:bg-[#1E6FCC] hover:text-white transition-all duration-200"
            >
              Let&apos;s Talk About Your Business <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Right — pillars grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 grid grid-cols-2 gap-4"
          >
            {pillars.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="shine glass rounded-2xl p-6 hover:border-white/14 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E6FCC]/10 flex items-center justify-center mb-4 group-hover:bg-[#1E6FCC]/20 transition-colors">
                  <Icon size={18} className="text-[#1E6FCC]" />
                </div>
                <div className="font-bold text-white text-sm mb-1.5">{label}</div>
                <div className="text-[#1a2761]/50 text-xs leading-relaxed">{desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
