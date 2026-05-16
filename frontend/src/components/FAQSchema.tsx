interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  name?: string;
  description?: string;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ 
  faqs, 
  name = "Don-Ad FAQ", 
  description = "Frequently asked questions about Don-Ad's digital advertising services" 
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "name": name,
    "description": description
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

export default FAQSchema;
