export default function Footer() {
  return (
    <footer className="w-full py-8 bg-[#0A0E17] border-t border-[#1F2937] flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
      <div className="text-[#F1F5F9] text-lg font-bold mb-4 md:mb-0">GhostScribe</div>
      <nav className="flex flex-col md:flex-row gap-4 text-[#94A3B8] text-base">
        <a href="#" className="hover:text-[#3B82F6] transition">Product</a>
        <a href="#" className="hover:text-[#3B82F6] transition">Pricing</a>
        <a href="#" className="hover:text-[#3B82F6] transition">Docs</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition">Twitter</a>
      </nav>
    </footer>
  );
} 