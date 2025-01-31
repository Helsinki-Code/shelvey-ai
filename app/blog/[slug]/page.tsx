import { Metadata } from "next";
import { generateBlogMetadata } from "@/utils/metadata";
import { fetchBlogPosts } from "@/utils/data";
import BlogPostPage from "@/components/blog/blog-post-page";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const posts = await fetchBlogPosts();
    const post = posts.find(p => p.slug === params.slug);
    return generateBlogMetadata(post);
  } catch (error) {
    return generateBlogMetadata();
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogPostPage slug={params.slug} />;
} 