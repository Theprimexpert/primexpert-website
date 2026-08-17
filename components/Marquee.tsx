const items = [
  "Rank #1 on Google",
  "Stop Losing Leads",
  "Ads That Actually Pay Off",
  "Websites That Convert",
  "Brands That Get Noticed",
  "Never Miss a Customer Call",
  "Grow Your Business Online",
  "Real Results, Not Promises",
  "Your Full Marketing Team",
  "Strategy + Execution",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative py-7 border-y border-white/6 bg-[#080d1a] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080d1a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080d1a] to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-5 px-6 text-white/28 text-xs font-semibold uppercase tracking-widest whitespace-nowrap"
          >
            {item}
            <span className="text-[#3B9FD4] text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
