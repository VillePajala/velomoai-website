import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-slate-200">
              Our Products
            </h2>
            <ProductCard
              name="MatchOps"
              description="Soccer coaching made simple"
              features={[
                "Track games and player statistics",
                "Manage team rosters",
                "Plan tactics with visual field editor",
                "Works completely offline",
                "Privacy-focused: your data stays on your device",
              ]}
              href="https://match-ops.com"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
