export default function LiveDemoSection() {
  return (
    <section className="w-full py-20 bg-[#0A0E17] border-t border-[#1F2937]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F1F5F9] text-center">Live Demo</h2>
        <p className="text-[#94A3B8] mb-8 text-center max-w-2xl">
          See GhostScribe in action. Type a prompt and watch as production-ready React code is generated instantly.
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-[#1F2937] shadow-2xl bg-[#111827]">
            <iframe
              src="https://ghostscribe.xyz"
              title="GhostScribe Live Demo"
              className="w-full h-full min-h-[320px] bg-[#111827]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
} 