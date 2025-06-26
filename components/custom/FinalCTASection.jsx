import { SparklesCore } from "@/components/ui/sparkles";
import Colors from '@/data/Colors';

export default function FinalCTASection() {
  return (
    <section className="w-full py-20 flex items-center justify-center relative overflow-hidden" style={{ background: Colors.BACKGROUND, borderTop: `1px solid ${Colors.BORDER}` }}>
      {/* Sparkles background */}
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        particleColor={Colors.HIGHLIGHT}
        speed={1}
      />
      <div className="flex flex-col items-center gap-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center max-w-2xl" style={{ color: Colors.TEXT }}>
          Start Building with GhostScribe
        </h2>
        <button className="font-semibold px-8 py-4 rounded-2xl text-xl transition-all shadow-lg mt-2"
          style={{ background: Colors.HIGHLIGHT, color: Colors.BACKGROUND }}>
          Get Started Free
        </button>
      </div>
    </section>
  );
} 