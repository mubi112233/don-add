import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageSEOProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  srcSet?: string;
  placeholder?: string;
  quality?: number;
}

const ImageSEO: React.FC<ImageSEOProps> = ({
  src,
  alt,
  title,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes,
  srcSet,
  placeholder = '/placeholder.svg',
  quality = 85
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setIsLoaded(true);
    }
  }, []);

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Generate SEO-friendly filename if needed
  const generateSeoFilename = (originalSrc: string, altText: string): string => {
    if (originalSrc.includes('placeholder')) return originalSrc;
    
    // Convert alt text to SEO-friendly filename
    const seoFilename = altText
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    const extension = originalSrc.split('.').pop();
    return `${seoFilename}.${extension}`;
  };

  const optimizedSrc = error ? placeholder : src;
  const seoAlt = alt || 'Digital advertising services by Don-Ad';
  const seoTitle = title || seoAlt;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        ref={imgRef}
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={seoAlt}
        title={seoTitle}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          transition-opacity duration-300 
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        // SEO attributes
        itemProp="image"
      />
      
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
      
      {/* Schema.org structured data for image */}
      {isLoaded && !error && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            contentUrl: optimizedSrc,
            description: seoAlt,
            name: seoTitle,
            width: width,
            height: height
          })
        }}
      />
      )}
    </div>
  );
};

export default ImageSEO;
