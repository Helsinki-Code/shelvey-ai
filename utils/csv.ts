import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export function readCsvFile<T>(filePath: string): T[] {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    cast: true,
  }) as T[];
}

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