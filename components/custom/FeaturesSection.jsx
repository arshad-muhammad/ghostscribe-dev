import { Code, Sparkles, Wand2, Layers } from "lucide-react";
import Colors from '@/data/Colors';

const features = [
  {
    icon: Code,
    title: "Production-Ready Code",
    desc: "Generate clean, scalable React code for both frontend and backend in seconds."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Magic",
    desc: "Describe your UI or logic in plain English and let GhostScribe do the rest."
  },
  {
    icon: Wand2,
    title: "Customizable Outputs",
    desc: "Tweak, extend, and export code to fit your stack and workflow."
  },
  {
    icon: Layers,
    title: "Full-Stack Support",
    desc: "From UI components to API routes, generate everything you need."
  }
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-20" style={{ background: Colors.BACKGROUND, borderTop: `1px solid ${Colors.BORDER}` }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: Colors.TEXT }}>Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl p-8 shadow-lg h-full" style={{ background: Colors.SURFACE }}>
              <f.icon className="h-12 w-12 mb-4" style={{ color: Colors.PRIMARY }} />
              <h3 className="text-xl font-semibold mb-2 text-center" style={{ color: Colors.TEXT }}>{f.title}</h3>
              <p className="text-center text-base" style={{ color: Colors.TEXT_MUTED }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 