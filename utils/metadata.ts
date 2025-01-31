import type { Metadata } from 'next';
import type { BlogPost } from './data';

const siteConfig = {
  name: 'ShelVey',
  description: 'Expert insights, strategies, and best practices for maximizing your business directory presence',
  url: 'https://shelvey.com',
  ogImage: 'https://shelvey.com/og.jpg',
};

export function generateBlogMetadata(post?: BlogPost): Metadata {
  if (!post) {
    return {
      title: 'Blog | ' + siteConfig.name,
      description: siteConfig.description,
      openGraph: {
        title: 'Blog | ' + siteConfig.name,
        description: siteConfig.description,
        type: 'website',
        url: `${siteConfig.url}/blog`,
        images: [
          {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig.name,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Blog | ' + siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
      },
    };
  }

  const ogImage = post.featuredImage;

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    authors: [{ name: post.authorName }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.authorName],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
} 