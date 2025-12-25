
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, type = 'website', name = COMPANY_NAME }) => {
  const location = useLocation();
  const canonicalUrl = `https://drgpower.com${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    // Update Document Title
    document.title = `${title} | ${name}`;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      linkCanonical.href = canonicalUrl;
      document.head.appendChild(linkCanonical);
    }

    // Update Open Graph Tags
    const ogTags = {
      'og:title': `${title} | ${name}`,
      'og:description': description,
      'og:url': canonicalUrl,
      'og:type': type,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    });

  }, [title, description, canonicalUrl, type, name]);

  return null;
};
