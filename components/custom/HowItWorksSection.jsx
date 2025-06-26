import { MessageSquare, Bot, FileCode2 } from "lucide-react";
import Colors from '@/data/Colors';

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
    <section className="w-full py-20" style={{ background: Colors.BACKGROUND, borderTop: `1px solid ${Colors.BORDER}` }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: Colors.TEXT }}>How it works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center flex-1 relative">
              <div className="rounded-full p-5 mb-4" style={{ background: Colors.SURFACE }}>
                <step.icon className="h-10 w-10" style={{ color: Colors.PRIMARY }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: Colors.TEXT }}>{step.title}</h3>
              <p className="mb-2" style={{ color: Colors.TEXT_MUTED }}>{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-24 h-1 rounded-full" style={{ background: Colors.PRIMARY + '66' }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 