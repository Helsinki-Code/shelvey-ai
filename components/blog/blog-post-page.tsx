"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost } from "@/utils/data";
import { fetchBlogPosts } from "@/utils/data";
import { useEffect, useState } from "react";

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        setError(null);
        const posts = await fetchBlogPosts();
        const post = posts.find(p => p.slug === slug);
        
        if (post) {
          setCurrentPost(post);
          // Get related posts (excluding current post)
          const related = posts
            .filter(p => p.slug !== post.slug && p.category === post.category)
            .slice(0, 2);
          setRelatedPosts(related);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        setError("Failed to load blog post");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadData();
  }, [slug]);

  if (isLoading) {
    return (
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Skeleton className="h-8 w-24 mb-6" />
          <Skeleton className="h-16 w-full mb-6" />
          <div className="flex items-center gap-4 mb-8">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <Skeleton className="h-[400px] w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !currentPost) {
    return (
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-rose-200 mb-4">
            {error || "Post not found"}
          </h1>
          <Link href="/blog">
            <Button variant="default" className="mt-4">
              Back to Blog
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(currentPost.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <main className="min-h-screen py-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="text-zinc-300 hover:text-rose-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 max-w-4xl"
      >
        <Badge variant="outline" className="bg-rose-500/10 text-rose-200 border-rose-500/20 mb-6">
          {currentPost.category}
        </Badge>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-rose-300 to-purple-200 text-transparent bg-clip-text"
        >
          {currentPost.title}
        </motion.h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-12 h-12">
            <Image
              src={currentPost.authorImage}
              alt={currentPost.authorName}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-rose-200">{currentPost.authorName}</div>
            <div className="text-sm text-zinc-400">{currentPost.authorRole}</div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-rose-200">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-rose-200">
              <BookmarkPlus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={currentPost.featuredImage}
            alt={currentPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 mb-12">
          <CardContent className="p-8">
            <div className="prose prose-invert prose-rose max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {currentPost.content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Author Bio */}
        <Card className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 border-rose-500/20 mb-12">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src={currentPost.authorImage}
                  alt={currentPost.authorName}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-rose-200">{currentPost.authorName}</h3>
                <p className="text-zinc-400">{currentPost.authorRole}</p>
              </div>
            </div>
            <p className="text-zinc-300">{currentPost.authorBio}</p>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 hover:border-rose-500/40 transition-all">
                    <div className="relative w-full h-40">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-xl"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="outline" className="bg-rose-500/10 text-rose-200 border-rose-500/20 mb-3">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-xl text-rose-200">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-300 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-zinc-400">
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.section>
    </main>
  );
} 