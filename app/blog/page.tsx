import { Metadata } from "next";
import { generateBlogMetadata } from "@/utils/metadata";
import BlogPage from "@/components/blog/blog-page";

export const metadata: Metadata = generateBlogMetadata();

export default function Page() {
  return <BlogPage />;
} 