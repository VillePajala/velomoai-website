export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 mb-2">
          &copy; {new Date().getFullYear()} Velomo AI
        </p>
        <p className="text-slate-500 mb-4">Helsinki, Finland</p>
        <a
          href="mailto:hello@velomoai.com"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          hello@velomoai.com
        </a>
      </div>
    </footer>
  );
}
