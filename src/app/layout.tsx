import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#101D35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "RepoDesk Solutions | Operational & Back-Office Support for US Repossession Agencies",
  description: "Helping US repossession agencies streamline order management, recovery operations, documentation, skip tracing, condition reports, and back-office workflows with experienced operational support.",
  keywords: [
    "repossession agency support",
    "recovery operations back-office",
    "RDN order management",
    "Clearplan route dispatch",
    "recovery condition reports",
    "skip tracing support for repossession",
    "automotive recovery billing",
    "US repossession support services"
  ],
  authors: [{ name: "RepoDesk Solutions" }],
  creator: "RepoDesk Solutions",
  publisher: "RepoDesk Solutions",
  metadataBase: new URL("https://repodesk-placeholder.com"),
  openGraph: {
    title: "Reliable Recovery Support. Smarter Agency Operations.",
    description: "Specialized back-office, operational, recovery support, and documentation services for US repossession agencies.",
    url: "https://repodesk-placeholder.com",
    siteName: "RepoDesk Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RepoDesk Solutions | Repossession Agency Support Services",
    description: "Specialized back-office and operational support for automotive repossession companies across the US.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RepoDesk Solutions",
    "description": "Professional back-office, operational, recovery support, and documentation services to US repossession agencies.",
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Repossession Agency Operational Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Order Management & Field Operations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Recovery Back-Office & Administrative Support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Skip Tracing & Locates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Condition Reports & Documentation"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased text-[#111111] bg-[#F7F5F0] selection:bg-[#101D35] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
