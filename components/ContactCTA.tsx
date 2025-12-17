export default function ContactCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">
          Interested in working together?
        </h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Whether you have a project in mind or just want to chat about AI-powered development,
          we&apos;d love to hear from you.
        </p>
        <a
          href="mailto:hello@velomoai.com"
          className="inline-flex items-center gap-2 bg-[#00a0d2] hover:bg-[#0090c0] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-lg"
        >
          Get in Touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
