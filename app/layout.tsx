import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velomo AI - Building tools for coaches",
  description:
    "Velomo AI creates privacy-focused software for coaches and athletes. Our flagship product MatchOps helps soccer coaches track games, manage rosters, and plan tactics.",
  keywords: [
    "Velomo AI",
    "MatchOps",
    "soccer coaching",
    "sports software",
    "coaching tools",
  ],
  authors: [{ name: "Velomo AI" }],
  openGraph: {
    title: "Velomo AI",
    description: "Building tools for coaches and athletes",
    url: "https://velomoai.com",
    siteName: "Velomo AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velomo AI",
    description: "Building tools for coaches and athletes",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
