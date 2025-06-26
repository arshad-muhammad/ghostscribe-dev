const tiers = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic AI code generation",
      "Limited prompts per month",
      "Community support"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Pro",
    price: "$19/mo",
    features: [
      "Unlimited AI code generation",
      "Priority access to new features",
      "Premium support",
      "Export full projects"
    ],
    cta: "Upgrade to Pro",
    highlight: true
  }
];

export default function PricingSection() {
  return (
    <section className="w-full py-20 bg-[#0A0E17] border-t border-[#1F2937]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#F1F5F9] text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`flex flex-col items-center bg-[#111827] rounded-2xl p-10 shadow-xl border transition-all ${tier.highlight ? 'border-[#3B82F6] scale-105 z-10' : 'border-[#1F2937]'}`}
            >
              <h3 className="text-2xl font-bold mb-2 text-[#F1F5F9]">{tier.name}</h3>
              <div className={`text-4xl font-extrabold mb-4 ${tier.highlight ? 'text-[#EAB308]' : 'text-[#3B82F6]'}`}>{tier.price}</div>
              <ul className="mb-6 space-y-2">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-[#94A3B8] text-base flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#3B82F6] rounded-full"></span> {f}
                  </li>
                ))}
              </ul>
              <button className={`px-6 py-3 rounded-2xl font-semibold text-lg w-full transition-all ${tier.highlight ? 'bg-[#3B82F6] text-[#0A0E17] hover:bg-[#60A5FA]' : 'bg-[#111827] text-[#F1F5F9] hover:bg-[#1F2937] border border-[#1F2937]'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 