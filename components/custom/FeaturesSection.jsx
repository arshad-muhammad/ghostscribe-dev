import { Code, Sparkles, Wand2, Layers } from "lucide-react";

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
    <section className="w-full py-20 bg-[#0A0E17] border-t border-[#1F2937]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#F1F5F9] text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center bg-[#111827] rounded-2xl p-8 shadow-lg h-full">
              <f.icon className="h-12 w-12 text-[#3B82F6] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#F1F5F9] text-center">{f.title}</h3>
              <p className="text-[#94A3B8] text-center text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 