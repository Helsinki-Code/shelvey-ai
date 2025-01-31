"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { number: "500+", label: "Businesses Optimized" },
  { number: "50K+", label: "Directory Listings Managed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "200%", label: "Average Visibility Increase" },
];

const values = [
  {
    title: "Innovation First",
    description: "Constantly pushing the boundaries of AI-powered directory optimization",
    icon: "💡"
  },
  {
    title: "Data-Driven Excellence",
    description: "Making decisions based on real metrics and proven results",
    icon: "📊"
  },
  {
    title: "Client Success",
    description: "Your growth and success are our top priorities",
    icon: "🎯"
  },
  {
    title: "Transparency",
    description: "Clear communication and honest reporting at every step",
    icon: "🤝"
  }
];

export default function About() {
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
          Revolutionizing Directory Presence
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-zinc-300 max-w-3xl mx-auto"
        >
          We're on a mission to transform how businesses manage their online directory presence through the power of artificial intelligence.
        </motion.p>
      </motion.section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-amber-400 text-transparent bg-clip-text mb-2">
                {stat.number}
              </h3>
              <p className="text-zinc-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-lg"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text">
            Our Story
          </h2>
          <div className="space-y-6 text-zinc-300">
            <p>
              Founded in 2024, DirectoryPro AI emerged from a simple observation: businesses were struggling to maintain consistent, optimized presence across the growing landscape of online directories.
            </p>
            <p>
              We combined cutting-edge AI technology with deep industry expertise to create a revolutionary platform that automates and optimizes directory listings at scale, helping businesses maximize their online visibility and local SEO performance.
            </p>
            <p>
              Today, we're proud to serve hundreds of businesses worldwide, continuously innovating and expanding our capabilities to stay ahead of the evolving digital landscape.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
        >
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-rose-200">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto px-4 py-20"
      >
        <Card className="bg-gradient-to-br from-rose-900/80 to-purple-900/80 border-rose-500/20 text-center">
          <CardHeader>
            <CardTitle className="text-3xl bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text">
              Join Us in Shaping the Future of Directory Optimization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Ready to experience the power of AI-driven directory optimization? Let's transform your online presence together.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600">
              Get Started Today
            </Button>
          </CardContent>
        </Card>
      </motion.section>
    </main>
  );
} 