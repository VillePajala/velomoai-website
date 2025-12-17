import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logos/velomoai_company-logo.png"
            alt="Velomo AI"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>
        <a
          href="mailto:hello@velomoai.com"
          className="text-gray-600 hover:text-[#00a0d2] transition-colors font-medium"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
