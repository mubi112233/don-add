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
<<<<<<< HEAD
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
=======
    google: "vX_t407Cag7AMUBJknopyYEdRElcHuZL_cjKFrBHXH8",
  },
  title: {
    default: "DON Recruitment - Professional Talent Acquisition | Hire Top Talent",
    template: "%s | DON Recruitment",
  },
  description:
    "Professional recruitment services connecting businesses with top talent. Specialized in executive search, permanent placement, and talent acquisition across industries.",
  keywords: [
    "recruitment services",
    "talent acquisition",
    "executive search",
    "staffing solutions",
    "hiring agency",
    "DON Recruitment",
    "Recruiting Agentur",
    "Personalvermittlung",
    "top talent hiring",
    "professional placement",
  ],
  authors: [{ name: "DON Recruitment", url: SITE_URL }],
  creator: "DON Recruitment",
  publisher: "DON Recruitment",
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
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
<<<<<<< HEAD
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
=======
    siteName: "DON Recruitment",
    title: "DON Recruitment - Professional Talent Acquisition | Hire Top Talent",
    description:
      "Professional recruitment services connecting businesses with top talent. Specialized in executive search, permanent placement, and talent acquisition.",
    url: absoluteUrl("/en"),
    locale: "en_US",
    alternateLocale: ["de_DE"],
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DON Recruitment — Professional Talent Acquisition" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DON Recruitment - Professional Talent Acquisition | Hire Top Talent",
    description:
      "Professional recruitment services connecting businesses with top talent. Specialized in executive search, permanent placement, and talent acquisition.",
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
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

<<<<<<< HEAD
=======
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DON Recruitment",
  url: SITE_URL,
  logo: absoluteUrl("/favicon.ico"),
  description:
    "Professional recruitment services connecting businesses with top talent. Specialized in executive search, permanent placement, and talent acquisition.",
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
  sameAs: ["https://linkedin.com/company/don-recruitment", "https://twitter.com/don_recruitment"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DON Recruitment",
  url: SITE_URL,
  inLanguage: ["en-US", "de-DE"],
  publisher: { "@type": "Organization", name: "DON Recruitment" },
};

// Service schema for recruitment services
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Recruitment Services",
  provider: {
    "@type": "Organization",
    name: "DON Recruitment",
    url: SITE_URL,
  },
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Recruitment Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Executive Search",
          description: "High-level executive and leadership recruitment",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Permanent Placement",
          description: "Direct hire recruitment for permanent positions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Talent Acquisition",
          description: "Comprehensive talent sourcing and acquisition services",
        },
      },
    ],
  },
};

// LocalBusiness schema
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DON Recruitment",
  url: SITE_URL,
  logo: absoluteUrl("/favicon.ico"),
  image: absoluteUrl("/og-image.jpg"),
  description: "Professional recruitment services connecting businesses with top talent",
  sameAs: [
    "https://linkedin.com/company/don-recruitment",
    "https://twitter.com/don_recruitment",
  ],
  priceRange: "€€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const htmlLang = headersList.get("x-html-lang") || "en";

  return (
    <html lang={htmlLang} suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
<<<<<<< HEAD
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
=======
      <head>
        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Security */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LNDGNQ7Z74" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LNDGNQ7Z74');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C78GJVDGR6" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C78GJVDGR6');
            `,
          }}
        />
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
<<<<<<< HEAD
=======
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
>>>>>>> 9e8183ea45ea299f0dde12c6351b616676beabba
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
