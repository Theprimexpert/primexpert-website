"use client";
import { motion } from "framer-motion";
import { Target, LineChart, Clock, Award, MessageCircle, RefreshCw } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Built Around Your Goals — Not Ours",
    desc: "We don't sell packages. We ask what you're trying to achieve, then build a plan that actually gets you there. Your quarterly targets become our north star.",
  },
  {
    icon: LineChart,
    title: "You'll Always Know What You're Getting",
    desc: "Every campaign comes with clear KPIs set before we start. Monthly reports show exactly what moved, what didn't, and what we're doing about it. No fluff, no spin.",
  },
  {
    icon: Clock,
    title: "You'll Never Miss a Lead Again",
    desc: "Between our 24/7 answering service and always-on ad campaigns, we make sure every potential customer who reaches out gets a response — even at 2 AM on a Sunday.",
  },
  {
    icon: Award,
    title: "Specialists, Not Generalists",
    desc: "We don't have one person running your SEO, ads, and social simultaneously. You get a dedicated specialist per channel — someone who lives and breathes that discipline.",
  },
  {
    icon: MessageCircle,
    title: "We Talk to You Like a Partner",
    desc: "No ticket systems, no outsourced support, no waiting 5 days for answers. You get direct access to the people running your campaigns, every week.",
  },
  {
    icon: RefreshCw,
    title: "We Optimize Until It's Excellent",
    desc: "Month one is just the baseline. We test, learn, and refine constantly — so your results in month six are dramatically better than they were when we started.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 bg-[#03060f] relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B9FD4]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end gap-6"
        >
          <div className="flex-1">
            <p className="text-[#3B9FD4] text-sm font-semibold uppercase tracking-widest mb-4">Why PrimeXpert</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              What makes us
              <br />
              <span className="gradient-text">worth your trust.</span>
            </h2>
          </div>
          <p className="text-white/32 text-base max-w-xs leading-relaxed">
            Anyone can say they deliver results. Here&apos;s how we actually
            earn the right to say it — and keep earning it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="shine glass rounded-2xl p-7 hover:border-white/12 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3B9FD4]/8 flex items-center justify-center mb-5 group-hover:bg-[#3B9FD4]/16 transition-colors">
                  <Icon size={18} className="text-[#3B9FD4]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2.5 leading-snug">{r.title}</h3>
                <p className="text-white/33 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
