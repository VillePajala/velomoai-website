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
  title: "Velomo AI - Building software using modern AI tools",
  description:
    "Velomo AI develops software by leveraging modern AI tools. We focus on practical, buildable solutions—small, focused software systems built end-to-end.",
  keywords: [
    "Velomo AI",
    "AI software development",
    "MatchOps",
    "AI-assisted development",
    "rapid prototyping",
  ],
  authors: [{ name: "Velomo AI" }],
  openGraph: {
    title: "Velomo AI",
    description: "Building software using modern AI tools",
    url: "https://velomoai.com",
    siteName: "Velomo AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velomo AI",
    description: "Building software using modern AI tools",
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
      <body className={`${geistSans.variable} ${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
