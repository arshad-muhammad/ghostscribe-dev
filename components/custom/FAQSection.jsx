const faqs = [
  {
    q: "What is GhostScribe?",
    a: "GhostScribe is an AI-powered platform that turns your text prompts into full-stack React UI code."
  },
  {
    q: "Is the generated code production-ready?",
    a: "Yes! GhostScribe generates clean, scalable code you can use in real projects."
  },
  {
    q: "Can I use GhostScribe for backend code?",
    a: "Absolutely. Generate both frontend components and backend API routes."
  },
  {
    q: "How do I get access to Pro features?",
    a: "Sign up and upgrade to Pro for unlimited usage and premium support."
  }
];

export default function FAQSection() {
  return (
    <section className="w-full py-20 bg-[#0A0E17] border-t border-[#1F2937]">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#F1F5F9] text-center">FAQ</h2>
        <div className="w-full space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#111827] rounded-2xl p-6 shadow flex flex-col">
              <div className="text-lg font-semibold text-[#3B82F6] mb-2">{faq.q}</div>
              <div className="text-[#94A3B8] text-base">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 