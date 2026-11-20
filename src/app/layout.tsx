import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/data/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const notoSansTC = Noto_Sans_TC({ variable: "--font-noto-sans-tc", subsets: ["latin"], weight: ["400", "500", "700"] });

const title = "水彥捷 Jeremy Shui｜行銷企劃作品集：內容策略 × AI 搜尋優化";
const description = "31 個產業的 SEO、AEO、GEO 文案模擬提案，每案附 GA4 成效追蹤設計，另有一個真實客戶案例。具 GA4 認證，10 年以上採購、航運、供應鏈與行銷跨領域經驗。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: "%s｜水彥捷 Jeremy Shui" },
  description,
  authors: [{ name: "水彥捷 Jeremy Shui" }],
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", locale: "zh_TW", url: SITE.url, siteName: "SHUI." },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: "水彥捷",
      alternateName: "Jeremy Shui",
      jobTitle: "行銷企劃",
      email: `mailto:${SITE.email}`,
      url: SITE.url,
      sameAs: [SITE.github],
      knowsAbout: ["SEO", "AEO", "GEO", "Google Analytics 4", "內容策略", "文案"],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "國立臺灣海洋大學" },
        { "@type": "CollegeOrUniversity", name: "銘傳大學" },
      ],
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: "SHUI. 作品集", inLanguage: "zh-Hant-TW", author: { "@id": `${SITE.url}/#person` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansTC.variable} font-sans antialiased bg-white text-gray-900`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
