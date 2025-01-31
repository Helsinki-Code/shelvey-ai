"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "@/components/newsletter-form";
import { type BlogPost, fetchBlogPosts } from "@/utils/data";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPage() {
  const [blogCategories, setBlogCategories] = useState<string[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        setError(null);
        const posts = await fetchBlogPosts();
        
        // Get unique categories
        const categories = Array.from(new Set(posts.map(post => post.category)));
        setBlogCategories(categories);
        
        // Split posts into featured and recent
        setFeaturedPosts(posts.slice(0, 2));
        setRecentPosts(posts.slice(2));
      } catch (err) {
        setError("Failed to load blog posts");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadData();
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-8 w-1/2 mx-auto mb-12" />
          
          {/* Categories Skeleton */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-8 w-24" />
            ))}
          </div>
          
          {/* Featured Posts Skeleton */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[1, 2].map((i) => (
              <Skeleton key={i} className="h-[400px]" />
            ))}
          </div>
          
          {/* Recent Posts Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-[300px]" />
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-rose-200 mb-4">
            {error}
          </h1>
          <Button
            variant="default"
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-rose-300 to-purple-200 text-transparent bg-clip-text"
        >
          Directory Optimization Insights
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-zinc-300 max-w-3xl mx-auto"
        >
          Expert insights, strategies, and best practices for maximizing your business directory presence
        </motion.p>
      </motion.section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {blogCategories.map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Badge variant="outline" className="bg-rose-500/10 text-rose-200 border-rose-500/20 px-4 py-2">
                {category}
              </Badge>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
        >
          Featured Articles
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 h-full hover:border-rose-500/40 transition-all">
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={post.authorImage}
                          alt={post.authorName}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-rose-200">{post.authorName}</div>
                        <div className="text-sm text-zinc-400">{post.authorRole}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-rose-500/10 text-rose-200 border-rose-500/20 mb-3">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-2xl text-rose-200">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <span>{new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}</span>
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

      {/* Recent Posts */}
      <section className="container mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
        >
          Latest Articles
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 h-full hover:border-rose-500/40 transition-all">
                  <div className="relative h-40 rounded-t-xl overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                      <span>{new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}</span>
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

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-12">
        <NewsletterForm />
      </section>
    </main>
  );
} 