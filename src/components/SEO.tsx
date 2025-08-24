import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Hivix Tour & Travel - Explore India\'s Best Destinations',
  description = 'Discover India with Hivix Tour & Travel. Rajasthan, Kerala, Kashmir, Ladakh tours. Book your dream vacation with expert guides and affordable packages.',
  keywords = 'India tour, travel packages, Rajasthan tour, Kerala backwaters, Kashmir valley, Ladakh adventure, India travel agency',
  image = 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
  url = 'https://hivixtours.com',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  article = false
}) => {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": article ? "Article" : "TravelAgency",
    "name": "Hivix Tour & Travel",
    "description": description,
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": `${url}/logo.png`,
      "width": "200",
      "height": "60"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9341436937",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Travel Street",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://facebook.com/hivixtours",
      "https://instagram.com/hivixtours",
      "https://twitter.com/hivixtours"
    ],
    ...(article && {
      "@type": "Article",
      "headline": title,
      "author": {
        "@type": "Person",
        "name": author
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "image": image
    })
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Hivix Tour & Travel" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Hivix Tour & Travel" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Article specific meta tags */}
      {article && author && (
        <>
          <meta name="author" content={author} />
          <meta property="article:author" content={author} />
        </>
      )}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgData)}
      </script>

      {/* Additional SEO tags */}
      <link rel="canonical" href={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
    </Helmet>
  );
};

export default SEO;