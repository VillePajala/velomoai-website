import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velomoai.com"),
  title: {
    default: "Velomo AI - Building software using modern AI tools",
    template: "%s | Velomo AI",
  },
  description:
    "Velomo AI develops software by leveraging modern AI tools. We create practical, privacy-focused solutions like MatchOps - a football coaching app for junior teams. Based in Finland.",
  keywords: [
    "Velomo AI",
    "AI software development",
    "MatchOps",
    "AI-assisted development",
    "rapid prototyping",
    "football coaching app",
    "soccer coaching software",
    "junior football",
    "sports technology",
    "Finland software company",
    "privacy-focused apps",
    "offline-first apps",
  ],
  authors: [{ name: "Velomo AI", url: "https://velomoai.com" }],
  creator: "Velomo AI",
  publisher: "Velomo AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://velomoai.com",
  },
  openGraph: {
    title: "Velomo AI - Building software using modern AI tools",
    description:
      "We develop practical, privacy-focused software using modern AI tools. Check out MatchOps - our football coaching app for junior teams.",
    url: "https://velomoai.com",
    siteName: "Velomo AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logos/velomoai_company-logo.png",
        width: 1024,
        height: 1024,
        alt: "Velomo AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velomo AI - Building software using modern AI tools",
    description:
      "We develop practical, privacy-focused software using modern AI tools. Check out MatchOps - our football coaching app.",
    images: ["/logos/velomoai_company-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    // Add these when you have them:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://velomoai.com/#organization",
      name: "Velomo AI",
      url: "https://velomoai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://velomoai.com/logos/velomoai_company-logo.png",
      },
      description:
        "Velomo AI develops software by leveraging modern AI tools. We focus on practical, buildable solutions.",
      foundingDate: "2025",
      founder: {
        "@type": "Person",
        name: "Ville Pajala",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "FI",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@velomoai.com",
        contactType: "customer service",
      },
      sameAs: ["https://www.linkedin.com/company/velomo-ai"],
    },
    {
      "@type": "WebSite",
      "@id": "https://velomoai.com/#website",
      url: "https://velomoai.com",
      name: "Velomo AI",
      publisher: {
        "@id": "https://velomoai.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://match-ops.com/#app",
      name: "MatchOps",
      applicationCategory: "SportsApplication",
      operatingSystem: "Web",
      description:
        "Football match tracking app for junior coaches. Plan lineups, track games, view statistics - all offline and privacy-focused.",
      url: "https://match-ops.com",
      author: {
        "@id": "https://velomoai.com/#organization",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      featureList: [
        "Interactive lineup planning",
        "Live game tracking",
        "Player statistics",
        "Offline functionality",
        "Privacy-focused",
        "Data export",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
