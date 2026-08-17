"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const benefits = [
  "We'll review your current digital presence",
  "Identify your biggest growth opportunities",
  "Give you an honest, no-obligation action plan",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-28 bg-[#03060f] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-[#1a2761]/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[#1E6FCC] text-sm font-semibold uppercase tracking-widest mb-4">Free Strategy Call</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Let&apos;s talk about
            <br />
            <span className="gradient-text">what&apos;s possible.</span>
          </h2>
          <p className="text-white/32 max-w-lg mx-auto text-base leading-relaxed">
            No sales pressure. No generic pitch. In 20 minutes, we&apos;ll
            look at your business, tell you exactly where the opportunity is,
            and what we&apos;d do about it — whether you hire us or not.
          </p>
          <ul className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-white/40">
                <CheckCircle size={14} className="text-[#1E6FCC] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-72 space-y-3 shrink-0"
          >
            {[
              { icon: Phone, label: "Call Us Directly", value: "+1 (443) 510-8100", href: "tel:+14435108100" },
              { icon: MapPin, label: "Our Office", value: "110 Margaret St\nBurkburnett, TX 76354", href: "#" },
              { icon: Mail, label: "Email Us", value: "info@primexpert.com", href: "mailto:info@primexpert.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 glass rounded-xl p-5 hover:border-white/12 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1E6FCC]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1E6FCC]/20 transition-colors">
                  <Icon size={15} className="text-[#1E6FCC]" />
                </div>
                <div>
                  <div className="text-white/28 text-xs mb-0.5">{label}</div>
                  <div className="text-white/75 text-sm font-medium whitespace-pre-line">{value}</div>
                </div>
              </a>
            ))}

            <div className="glass rounded-xl p-5 mt-2">
              <p className="text-white/28 text-xs uppercase tracking-widest mb-3">Office Hours</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/28">Mon – Fri</span>
                  <span className="text-white/65">9 AM – 6 PM CST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/28">Saturday</span>
                  <span className="text-white/65">10 AM – 4 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/28">Sunday</span>
                  <span className="text-white/18">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/6 text-xs text-[#1E6FCC] pulse-dot">
                Answering service live 24/7
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            {sent ? (
              <div className="glass rounded-2xl p-14 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#1E6FCC]/15 flex items-center justify-center mb-5">
                  <CheckCircle size={24} className="text-[#1E6FCC]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">You&apos;re on our radar.</h3>
                <p className="text-white/38 text-sm max-w-xs">
                  We&apos;ve received your message and will be in touch within 24 hours
                  to schedule your free strategy call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "John Smith", required: true },
                    { name: "email", label: "Email Address", type: "email", placeholder: "john@yourcompany.com", required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-white/30 text-xs mb-2 uppercase tracking-wider">{f.label}</label>
                      <input
                        name={f.name}
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/18 focus:outline-none focus:border-[#1E6FCC]/50 focus:bg-white/6 transition-all"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/30 text-xs mb-2 uppercase tracking-wider">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/18 focus:outline-none focus:border-[#1E6FCC]/50 focus:bg-white/6 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/30 text-xs mb-2 uppercase tracking-wider">Biggest Challenge</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#1E6FCC]/50 focus:bg-white/6 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#080d1a]">What do you need most?</option>
                      {[
                        "More website traffic (SEO)",
                        "Better social media presence",
                        "Improve paid ad ROI (PPC)",
                        "New website or redesign",
                        "Branding & design help",
                        "Never miss customer calls",
                        "Everything — I need a full plan",
                      ].map(s => (
                        <option key={s} value={s} className="bg-[#080d1a]">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white/30 text-xs mb-2 uppercase tracking-wider">Tell us about your business</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you sell, who are your customers, and what's the #1 thing holding your business back right now?"
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/18 focus:outline-none focus:border-[#1E6FCC]/50 focus:bg-white/6 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-white text-[#03060f] font-bold py-4 rounded-xl hover:bg-[#1E6FCC] hover:text-white transition-all duration-200 hover:shadow-[0_0_30px_rgba(30,111,204,0.25)]"
                >
                  Book My Free Strategy Call
                  <ArrowRight size={16} />
                </button>
                <p className="text-white/18 text-xs text-center">
                  Free. No commitment. We respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
