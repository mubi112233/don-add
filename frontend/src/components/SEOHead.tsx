import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Omnichannel Ad Campaign Management | Google, Meta, TikTok, LinkedIn, X",
  description = "Plan, launch, and scale paid ads across Google, Meta, TikTok, Snapchat, LinkedIn, and X. Full‑funnel strategy, creative, tracking, A/B testing, and performance reporting.",
  keywords = "ad campaign management, Google ads, Meta ads, TikTok ads, LinkedIn ads, X ads, omnichannel advertising, paid advertising, digital marketing, ROAS optimization",
  ogImage = "/placeholder.svg",
  ogType = "website",
  canonicalUrl,
  noindex = false,
  structuredData
}) => {
  const baseUrl = "https://don-ad.com";
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Don-Ad",
    "url": baseUrl,
    "logo": `${baseUrl}/placeholder.svg`,
    "description": description,
    "sameAs": [
      "https://twitter.com/donad",
      "https://www.linkedin.com/company/donad",
      "https://www.facebook.com/donad"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-DONAD",
      "contactType": "sales",
      "availableLanguage": ["English"]
    },
    "serviceType": "Advertising Agency",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Advertising Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management",
            "description": "Complete Google Ads campaign management and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Ads Management",
            "description": "Facebook and Instagram advertising services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TikTok Ads Management",
            "description": "TikTok campaign creation and management"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Don-Ad" />
      <meta name="google-site-verification" content="0OlTu41Tz0RTHRVt4WDBqer5e4sECs-KHKVyi6GZxmY" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Don-Ad" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@donad" />
      <meta name="twitter:creator" content="@donad" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData, null, 2)}
      </script>
      
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-FK6N732M42"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FK6N732M42');`}
      </script>
    </Helmet>
  );
};

export default SEOHead;
