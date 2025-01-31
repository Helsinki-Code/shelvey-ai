"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Download, FileText, Book, Video, ChevronRight, LucideIcon } from "lucide-react";
import { BaseResource, ResourceCategory, fetchResources, groupResourcesByCategory } from "@/utils/data";
import { NewsletterForm } from "@/components/newsletter-form";
import { useEffect, useState } from "react";

// Icon mapping with proper type
const categoryIcons: Record<string, LucideIcon> = {
  Documentation: FileText,
  Guides: Book,
  Videos: Video,
  "Case Studies": FileText,
  Webinars: Video,
  Downloads: Download,
};

export default function Resources() {
  const [resourceCategories, setResourceCategories] = useState<ResourceCategory[]>([]);
  const [downloadableResources, setDownloadableResources] = useState<BaseResource[]>([]);

  useEffect(() => {
    async function loadData() {
      const resources = await fetchResources();
      setResourceCategories(groupResourcesByCategory(resources));
      setDownloadableResources(resources.filter(resource => resource.category === "Downloads"));
    }
    
    loadData();
  }, []);

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
          Directory Optimization Resources
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-zinc-300 max-w-3xl mx-auto"
        >
          Comprehensive guides, documentation, and tools to help you master directory optimization
        </motion.p>
      </motion.section>

      {/* Resource Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {resourceCategories.map((category, i) => {
            const Icon = categoryIcons[category.title] || FileText;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-rose-200" />
                      <CardTitle className="text-xl text-rose-200">{category.title}</CardTitle>
                    </div>
                    <p className="text-zinc-300">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.resources.map((resource, j) => (
                        <Link key={j} href={resource.link}>
                          <div className="p-4 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-rose-200 mb-1">{resource.title}</h3>
                                <p className="text-sm text-zinc-400">{resource.description}</p>
                              </div>
                              <ChevronRight className="w-5 h-5 text-rose-200" />
                            </div>
                            <div className="mt-2">
                              <Badge variant="outline" className="bg-rose-500/10 text-rose-200 border-rose-500/20">
                                {resource.type}
                              </Badge>
                              {resource.duration && (
                                <Badge variant="outline" className="ml-2 bg-rose-500/10 text-rose-200 border-rose-500/20">
                                  {resource.duration}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
        >
          Downloadable Resources
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {downloadableResources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-rose-200">{resource.title}</h3>
                      <p className="text-zinc-300">{resource.description}</p>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <Badge variant="outline" className="bg-rose-500/10 text-rose-200 border-rose-500/20">
                          {resource.format}
                        </Badge>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-rose-500 text-rose-500 hover:bg-rose-500/10"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
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