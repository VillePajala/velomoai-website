import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import ProductCard from "@/components/ProductCard";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main>
        <Hero />
        <WaveDivider color="#ffffff" />
        <Stats />
        <About />
        <WaveDivider color="#f3f4f6" flip />
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 font-[family-name:var(--font-montserrat)]">
              Our Products
            </h2>
            <ProductCard
              name="MatchOps"
              description="Football match tracking for junior coaches"
              tagline="Your data stays on your device. Always."
              images={[
                "/images/matchops/1.png",
                "/images/matchops/2.png",
                "/images/matchops/3.png",
              ]}
              features={[
                "Plan lineups with interactive field view",
                "Track game time and substitutions live",
                "Draw tactics for halftime talks",
                "View stats, trends, and player performance",
                "Export data to Excel or JSON",
                "Works offline, no registration needed",
              ]}
              href="https://match-ops.com"
            />
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
