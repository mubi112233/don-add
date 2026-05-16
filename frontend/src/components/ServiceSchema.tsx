interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  provider?: string;
  serviceType?: string;
  areaServed?: string;
  hasOfferCatalog?: {
    name: string;
    items: Array<{
      name: string;
      description: string;
      price?: string;
    }>;
  };
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  provider = "Don-Ad",
  serviceType = "Advertising Service",
  areaServed = "Worldwide",
  hasOfferCatalog
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://don-ad.com",
      "logo": "https://don-ad.com/placeholder.svg"
    },
    "serviceType": serviceType,
    "areaServed": areaServed,
    "hasOfferCatalog": hasOfferCatalog ? {
      "@type": "OfferCatalog",
      "name": hasOfferCatalog.name,
      "itemListElement": hasOfferCatalog.items.map(item => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item.name,
          "description": item.description
        },
        "price": item.price ? {
          "@type": "PriceSpecification",
          "price": item.price,
          "priceCurrency": "USD"
        } : undefined
      }))
    } : undefined,
    "keywords": "digital advertising, marketing, paid ads, social media marketing",
    "inLanguage": "en",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://don-ad.com",
      "servicePhone": "+1-555-DONAD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
};

export default ServiceSchema;
