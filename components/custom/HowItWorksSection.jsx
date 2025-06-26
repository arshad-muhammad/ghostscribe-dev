import { MessageSquare, Bot, FileCode2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Prompt",
    desc: "Describe your UI or logic in plain English."
  },
  {
    icon: Bot,
    title: "AI",
    desc: "GhostScribe's AI understands and interprets your intent."
  },
  {
    icon: FileCode2,
    title: "Code Generated",
    desc: "Instantly receive production-ready React code."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="w-full py-20 bg-[#0A0E17] border-t border-[#1F2937]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#F1F5F9] text-center">How it works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center flex-1 relative">
              <div className="bg-[#111827] rounded-full p-5 mb-4">
                <step.icon className="h-10 w-10 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-2">{step.title}</h3>
              <p className="text-[#94A3B8] mb-2">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-24 h-1 bg-[#3B82F6]/40 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 