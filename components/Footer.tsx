export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 mb-2">
          &copy; {new Date().getFullYear()} Velomo AI
        </p>
        <p className="text-gray-500 mb-4">Finland</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="mailto:hello@velomoai.com"
            className="text-[#00a0d2] hover:text-[#0090c0] transition-colors"
          >
            hello@velomoai.com
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="https://www.linkedin.com/company/velomo-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00a0d2] hover:text-[#0090c0] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
