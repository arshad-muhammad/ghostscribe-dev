import Colors from '@/data/Colors';

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
    <section className="w-full py-20" style={{ background: Colors.BACKGROUND, borderTop: `1px solid ${Colors.BORDER}` }}>
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: Colors.TEXT }}>Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`flex flex-col items-center rounded-2xl p-10 shadow-xl border transition-all ${tier.highlight ? '' : ''}`}
              style={{
                background: Colors.SURFACE,
                border: `1.5px solid ${tier.highlight ? Colors.PRIMARY : Colors.BORDER}`,
                transform: tier.highlight ? 'scale(1.05)' : undefined,
                zIndex: tier.highlight ? 10 : undefined
              }}
            >
              <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: Colors.TEXT }}>{tier.name}</h3>
              <div className="text-4xl font-extrabold mb-4" style={{ color: tier.highlight ? Colors.HIGHLIGHT : Colors.PRIMARY }}>{tier.price}</div>
              <ul className="mb-6 space-y-2">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-base flex items-center gap-2" style={{ color: Colors.TEXT_MUTED }}>
                    <span className="inline-block w-2 h-2 rounded-full" style={{ background: Colors.PRIMARY }}></span> {f}
                  </li>
                ))}
              </ul>
              <button
                className="px-6 py-3 rounded-2xl font-semibold text-lg w-full transition-all"
                style={{
                  background: tier.highlight ? Colors.PRIMARY : Colors.SURFACE,
                  color: tier.highlight ? Colors.BACKGROUND : Colors.TEXT,
                  border: `1.5px solid ${Colors.BORDER}`,
                  ...(tier.highlight ? { boxShadow: '0 4px 24px 0 ' + Colors.PRIMARY + '33' } : {})
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 