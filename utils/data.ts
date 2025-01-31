import { remark } from 'remark';
import html from 'remark-html';

// Blog post types
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  authorBio: string;
  featuredImage: string;
  content: string;
};

// Resource types
export type BaseResource = {
  category: string;
  title: string;
  description: string;
  type: string;
  link: string;
  duration?: string;
  format?: string;
  size?: string;
};

export type ResourceCategory = {
  title: string;
  description: string;
  resources: BaseResource[];
};

// Helper function to group resources by category
export function groupResourcesByCategory(resources: BaseResource[]): ResourceCategory[] {
  const groupedResources = resources.reduce((acc, resource) => {
    const category = acc.find(cat => cat.title === resource.category);
    if (category) {
      category.resources.push(resource);
    } else {
      acc.push({
        title: resource.category,
        description: getCategoryDescription(resource.category),
        resources: [resource],
      });
    }
    return acc;
  }, [] as ResourceCategory[]);

  return groupedResources;
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    Documentation: "Comprehensive guides and technical documentation",
    Guides: "Step-by-step guides and best practices",
    Videos: "Visual learning resources and walkthroughs",
    "Case Studies": "Real-world success stories and implementation examples",
    Webinars: "Live and recorded educational sessions",
    Downloads: "Downloadable resources and templates",
  };

  return descriptions[category] || "";
}

// Convert markdown to HTML
async function markdownToHtml(markdown: string) {
  try {
    const result = await remark()
      .use(html)
      .process(markdown);
    return result.toString();
  } catch (error) {
    console.error('Error converting markdown to HTML:', error);
    return markdown; // Return original markdown if conversion fails
  }
}

// Parse CSV line considering quoted values that might contain commas
function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let currentValue = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      values.push(currentValue.replace(/^"|"$/g, '').trim());
      currentValue = '';
    } else {
      currentValue += char;
    }
  }
  
  values.push(currentValue.replace(/^"|"$/g, '').trim());
  return values;
}

// Type guards
function isBlogPostKey(key: string): key is keyof BlogPost {
  return [
    'slug', 'title', 'excerpt', 'category', 'readTime', 'date',
    'authorName', 'authorRole', 'authorImage', 'authorBio',
    'featuredImage', 'content'
  ].includes(key);
}

function isBaseResourceKey(key: string): key is keyof BaseResource {
  return [
    'category', 'title', 'description', 'type', 'link',
    'duration', 'format', 'size'
  ].includes(key);
}

// Fetch blog posts
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/data/blog-posts.csv');
    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
    }
    
    const csvText = await response.text();
    const lines = csvText.split('\n').filter(line => line.trim());
    
    if (lines.length === 0) {
      throw new Error('Blog posts CSV file is empty');
    }
    
    const headers = parseCSVLine(lines[0]);
    
    const posts = await Promise.all(
      lines.slice(1).map(async line => {
        const values = parseCSVLine(line);
        const post: Partial<BlogPost> = {};
        
        headers.forEach((header, index) => {
          const value = values[index]?.trim() || '';
          const key = header.trim();
          if (isBlogPostKey(key)) {
            post[key] = value;
          }
        });
        
        // Ensure all required fields are present
        const requiredFields: (keyof BlogPost)[] = [
          'slug', 'title', 'excerpt', 'category', 'readTime', 'date',
          'authorName', 'authorRole', 'authorImage', 'authorBio',
          'featuredImage', 'content'
        ];
        
        const missingFields = requiredFields.filter(field => !post[field]);
        if (missingFields.length > 0) {
          throw new Error(`Missing required fields for blog post: ${missingFields.join(', ')}`);
        }
        
        // Convert markdown content to HTML
        post.content = await markdownToHtml(post.content as string);
        
        return post as BlogPost;
      })
    );
    
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

// Fetch resources
export async function fetchResources(): Promise<BaseResource[]> {
  try {
    const response = await fetch('/data/resources.csv');
    if (!response.ok) {
      throw new Error(`Failed to fetch resources: ${response.statusText}`);
    }
    
    const csvText = await response.text();
    const lines = csvText.split('\n').filter(line => line.trim());
    
    if (lines.length === 0) {
      throw new Error('Resources CSV file is empty');
    }
    
    const headers = parseCSVLine(lines[0]);
    
    return lines.slice(1).map(line => {
      const values = parseCSVLine(line);
      const resource: Partial<BaseResource> = {};
      
      headers.forEach((header, index) => {
        const value = values[index]?.trim() || '';
        const key = header.trim();
        if (isBaseResourceKey(key)) {
          resource[key] = value;
        }
      });
      
      // Ensure all required fields are present
      const requiredFields: (keyof BaseResource)[] = [
        'category', 'title', 'description', 'type', 'link'
      ];
      
      const missingFields = requiredFields.filter(field => !resource[field]);
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields for resource: ${missingFields.join(', ')}`);
      }
      
      return resource as BaseResource;
    });
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
} 