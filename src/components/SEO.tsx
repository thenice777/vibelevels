
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "https://vibelevels.com/og-image.png",
  ogType = "website",
  structuredData 
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    updateMetaTag('name', 'description', description);
    
    // Update keywords if provided
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:image', ogImage);
    
    if (canonical) {
      updateMetaTag('property', 'og:url', canonical);
      updateCanonical(canonical);
    }
    
    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);
    
    // Add structured data if provided
    if (structuredData) {
      updateStructuredData(structuredData);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData]);

  const updateMetaTag = (attribute: string, value: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${value}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, value);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };

  const updateCanonical = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  };

  const updateStructuredData = (data: object) => {
    // Remove existing structured data
    const existing = document.querySelector('script[type="application/ld+json"]');
    if (existing) {
      existing.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  return null;
};
