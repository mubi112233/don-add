import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { DesignSystemProvider } from "@/components/DesignSystemProvider";
import { SITE_URL, absoluteUrl } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DON ADS",
  url: SITE_URL,
  logo: absoluteUrl("/favicon.ico"),
  description:
    "Professional ad management and call center services for growing businesses in the DACH region and worldwide.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "German"],
  },
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Place", name: "Worldwide" },
  ],
  sameAs: ["https://linkedin.com/company/don-ads", "https://twitter.com/don_ads"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DON ADS",
  url: SITE_URL,
  inLanguage: ["en-US", "de-DE"],
  publisher: { "@type": "Organization", name: "DON ADS" },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "0OlTu41Tz0RTHRVt4WDBqer5e4sECs-KHKVyi6GZxmY",
  },
  title: {
    default: "DON ADS - Professional Ad Management | Grow Your Leads & Revenue",
    template: "%s | DON ADS",
  },
  description:
    "Professional ad management and call center services for businesses in the DACH region. Google Ads, Meta Ads, and performance campaigns to grow your leads and revenue.",
  keywords: [
    "ad management",
    "Google Ads",
    "Meta Ads",
    "call center",
    "paid media",
    "performance marketing",
    "DON ADS",
    "Werbung schalten",
    "Online-Werbung",
  ],
  authors: [{ name: "DON ADS", url: SITE_URL }],
  creator: "DON ADS",
  publisher: "DON ADS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "DON ADS",
    title: "DON ADS - Professional Ad Management | Grow Your Leads & Revenue",
    description:
      "Professional ad management and call center services for businesses in the DACH region. Google Ads, Meta Ads, and performance campaigns.",
    url: absoluteUrl("/en"),
    locale: "en_US",
    alternateLocale: ["de_DE"],
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DON ADS — Professional Ad Management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DON ADS - Professional Ad Management | Grow Your Leads & Revenue",
    description:
      "Professional ad management and call center services for businesses in the DACH region. Google Ads, Meta Ads, and performance campaigns.",
    images: [absoluteUrl("/og-image.jpg")],
  },
  alternates: {
    canonical: absoluteUrl("/en"),
    languages: {
      en: absoluteUrl("/en"),
      de: absoluteUrl("/de"),
      "x-default": absoluteUrl("/en"),
    },
  },
};


export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const htmlLang = headersList.get("x-html-lang") || "en";

  return (
    <html lang={htmlLang} suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head suppressHydrationWarning />
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {process.env.NODE_ENV === "development" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){var o=console.error;console.error=function(){var a=arguments[0];if(typeof a==='string'&&(a.includes('bis_skin_checked')||a.includes('bis_use')||a.includes('chrome-extension')))return;o.apply(console,arguments);};})();`,
            }}
          />
        )}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <DesignSystemProvider defaultTheme="blue">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-FK6N732M42"
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FK6N732M42');`}
            </Script>
          </ThemeProvider>
        </DesignSystemProvider>
      </body>
    </html>
  );
}
