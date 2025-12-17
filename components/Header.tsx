export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-white">
          Velomo AI
        </a>
        <a
          href="mailto:hello@velomoai.com"
          className="text-slate-300 hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
