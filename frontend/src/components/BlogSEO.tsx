import SEOHead from "./SEOHead";

interface BlogSEOProps {
  title: string;
  description: string;
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  canonicalUrl?: string;
  keywords?: string;
}

const BlogSEO: React.FC<BlogSEOProps> = ({
  title,
  description,
  author = "Don-Ad Team",
  publishDate,
  modifiedDate,
  category = "Digital Marketing",
  tags = [],
  featuredImage = "/placeholder.svg",
  canonicalUrl,
  keywords
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": featuredImage,
    "author": {
      "@type": "Organization",
      "name": "Don-Ad",
      "url": "https://don-ad.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Don-Ad",
      "logo": {
        "@type": "ImageObject",
        "url": "https://don-ad.com/placeholder.svg"
      }
    },
    "datePublished": publishDate || new Date().toISOString(),
    "dateModified": modifiedDate || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://don-ad.com${canonicalUrl}`
    },
    "keywords": tags.join(", "),
    "articleSection": category,
    "wordCount": description.split(" ").length
  };

  const metaKeywords = keywords || tags.join(", ") + ", digital marketing, advertising, Don-Ad";

  return (
    <SEOHead
      title={`${title} | Don-Ad Blog`}
      description={description}
      keywords={metaKeywords}
      ogImage={featuredImage}
      ogType="article"
      canonicalUrl={canonicalUrl}
      structuredData={structuredData}
    />
  );
};

export default BlogSEO;
