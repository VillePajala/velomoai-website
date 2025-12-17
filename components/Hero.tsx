import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Image
          src="/logos/velomoai_company-logo.png"
          alt="Velomo AI - AI Powered"
          width={280}
          height={280}
          className="mx-auto mb-8"
          priority
        />
        <p className="text-xl md:text-2xl text-gray-600">
          Building software using modern AI tools
        </p>
      </div>
    </section>
  );
}
