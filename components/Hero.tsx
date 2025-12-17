import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 bg-gradient-to-b from-white via-cyan-50/30 to-gray-100 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <Image
            src="/logos/velomoai_company-logo-transparent.png"
            alt="Velomo AI - AI Powered"
            width={280}
            height={280}
            className="mx-auto mb-8 drop-shadow-lg"
            priority
          />
        </div>
        <p className="text-2xl md:text-4xl text-gray-700 font-medium animate-fade-in-up">
          Building software using modern AI tools
        </p>
      </div>
    </section>
  );
}
