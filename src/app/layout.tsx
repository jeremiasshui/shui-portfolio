import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SHUI. | Creative Copywriter Portfolio",
  description: "A digital gallery showcasing SEO, AEO, GEO, and AIEO copywriting across 10+ industries. Bilingual portfolio in English and Traditional Chinese.",
  keywords: ["copywriter", "SEO", "AEO", "GEO", "AIEO", "portfolio", "文案", "作品集"],
  authors: [{ name: "SHUI" }],
  openGraph: {
    title: "SHUI. | Creative Copywriter Portfolio",
    description: "A digital gallery showcasing professional copywriting across industries",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansTC.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
