"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    role: "E-commerce Store Owner · Austin, TX",
    body: "We were spending $4K/month on Google Ads and barely breaking even. PrimeXpert audited our campaigns in week one and found we were targeting the wrong keywords entirely. Within 60 days they cut our cost-per-acquisition in half. We're now profitably scaling to $20K/month in ad spend.",
    result: "CPL cut by 52% in 60 days",
    rating: 5,
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "Sandra L.",
    role: "Independent Real Estate Agent · Dallas, TX",
    body: "I was invisible on Google. A competitor who'd been in business for 2 years was outranking me on every local search. PrimeXpert's SEO team rebuilt my site, fixed my Google Business Profile, and started a content strategy. I'm now the #1 result for three of my top keywords — and my phone hasn't stopped ringing.",
    result: "Ranked #1 locally in 4 months",
    rating: 5,
    color: "from-cyan-600 to-blue-700",
  },
  {
    name: "James R.",
    role: "Restaurant Owner · Burkburnett, TX",
    body: "I used to miss calls every day — lunch rush, dinner rush, just couldn't keep up. PrimeXpert set up the answering service and we immediately started catching leads we'd been losing for years. They also redesigned our website and ran our social. I don't have to think about marketing anymore. It just works.",
    result: "30% more bookings within 30 days",
    rating: 5,
    color: "from-indigo-600 to-purple-700",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#f4f7fb] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-[#1a2761]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#1E6FCC] text-sm font-semibold uppercase tracking-widest mb-4">Client Results</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a2761] mb-4">
            Real businesses.{" "}
            <span className="gradient-text">Real outcomes.</span>
          </h2>
          <p className="text-[#1a2761]/50 text-base max-w-md mx-auto">
            Not cherry-picked case studies — these are the kinds of results we
            work toward with every single client, every single month.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="shine glass rounded-2xl p-7 hover:border-gray-200 transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-0.5 mb-5">
                {Array(r.rating).fill(0).map((_, j) => (
                  <Star key={j} size={13} className="text-[#1E6FCC] fill-[#1E6FCC]" />
                ))}
              </div>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 bg-[#1E6FCC]/10 border border-[#1E6FCC]/20 text-[#1E6FCC] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 self-start">
                {r.result}
              </div>

              <p className="text-[#1a2761]/60 text-sm leading-[1.85] mb-7 flex-1">
                &ldquo;{r.body}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-xs font-black shrink-0`}>
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-[#1a2761] font-semibold text-sm">{r.name}</div>
                  <div className="text-[#1a2761]/40 text-xs">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
