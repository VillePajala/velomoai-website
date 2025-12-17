export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 font-[family-name:var(--font-montserrat)]">
          About
        </h2>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg mb-6">
            Velomo AI develops software by leveraging modern AI tools in hands-on
            development. AI functions as an accelerant while humans lead design
            and structure.
          </p>
          <p className="text-gray-600 text-lg mb-8">
            We focus on practical, buildable solutions ready for deployment
            today—small, focused software systems built end-to-end.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full text-sm text-cyan-700">
              AI-assisted development
            </span>
            <span className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700">
              Rapid prototyping
            </span>
            <span className="px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full text-sm text-cyan-700">
              Internal tools
            </span>
            <span className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700">
              End-to-end systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
