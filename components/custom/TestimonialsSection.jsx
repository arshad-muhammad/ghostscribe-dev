import Colors from '@/data/Colors';

const testimonials = [
  {
    name: "Alex Kim",
    quote: "GhostScribe saved me hours of boilerplate. The AI-generated code is shockingly good!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Patel",
    quote: "I described my app in plain English and had a working React UI in minutes. Game changer!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Jordan Lee",
    quote: "The Pro plan is worth every penny. I use GhostScribe for all my new projects now.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20" style={{ background: Colors.BACKGROUND, borderTop: `1px solid ${Colors.BORDER}` }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: Colors.TEXT }}>What developers are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl p-8 shadow-lg h-full" style={{ background: Colors.SURFACE }}>
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-2 object-cover"
                style={{ borderColor: Colors.PRIMARY }}
              />
              <blockquote className="italic mb-4 text-center" style={{ color: Colors.TEXT_MUTED }}>“{t.quote}”</blockquote>
              <div className="font-semibold" style={{ color: Colors.HIGHLIGHT }}>{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 