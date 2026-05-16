interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
  itemReviewed?: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
  itemName: string;
  itemDescription?: string;
  itemType?: 'Product' | 'Service' | 'LocalBusiness';
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({ 
  reviews, 
  itemName, 
  itemDescription,
  itemType = 'Service' 
}) => {
  const calculateAggregateRating = () => {
    if (reviews.length === 0) return null;
    
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    
    return {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": 5,
      "worstRating": 1
    };
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": itemType,
    "name": itemName,
    "description": itemDescription,
    "aggregateRating": calculateAggregateRating(),
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished || new Date().toISOString().split('T')[0],
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "itemReviewed": {
        "@type": itemType,
        "name": review.itemReviewed || itemName
      }
    }))
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

export default ReviewSchema;
