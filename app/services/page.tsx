"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "AI Directory Analysis",
    description: "Comprehensive analysis of your business presence across all major directories",
    features: [
      "Deep-learning powered content analysis",
      "Competitor positioning insights",
      "Directory-specific optimization recommendations",
      "Visibility score assessment"
    ],
    icon: "🔍"
  },
  {
    title: "Automated Optimization",
    description: "Smart, automated updates and optimization across all your directory listings",
    features: [
      "Real-time content synchronization",
      "Multi-platform consistency",
      "Smart keyword integration",
      "Automated NAP consistency"
    ],
    icon: "⚡"
  },
  {
    title: "Performance Analytics",
    description: "Detailed insights and tracking of your directory presence performance",
    features: [
      "Real-time visibility tracking",
      "Engagement analytics",
      "Conversion tracking",
      "ROI measurement"
    ],
    icon: "📊"
  },
  {
    title: "Local SEO Enhancement",
    description: "Boost your local search presence through optimized directory listings",
    features: [
      "Local keyword optimization",
      "Review management",
      "Local citation building",
      "Geographic targeting"
    ],
    icon: "🎯"
  }
];

const benefits = [
  {
    title: "Time Savings",
    description: "Save 40+ hours monthly on directory management",
    icon: "⏰"
  },
  {
    title: "Increased Visibility",
    description: "Average 200% improvement in directory visibility",
    icon: "👀"
  },
  {
    title: "Better Rankings",
    description: "Improve local search rankings by up to 150%",
    icon: "📈"
  },
  {
    title: "More Leads",
    description: "Generate 3x more qualified leads through directories",
    icon: "🎯"
  }
];

export default function Services() {
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
          AI-Powered Directory Optimization
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-zinc-300 max-w-3xl mx-auto"
        >
          Maximize your business visibility across all major directories with our comprehensive AI-driven services
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl text-rose-200">{service.title}</CardTitle>
                  <p className="text-zinc-300 mt-2">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-zinc-300">
                        <Badge variant="outline" className="bg-rose-500/10 text-rose-200 border-rose-500/20">
                          {feature}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
        >
          Why Choose Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-rose-200 mb-2">{benefit.title}</h3>
              <p className="text-zinc-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Visualization */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 border-rose-500/20 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-3xl text-center bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text mb-8">
              How We Optimize Your Listings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative py-10">
              <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-rose-500/20 via-amber-500/20 to-purple-500/20" />
              <div className="space-y-20">
                {[
                  { step: 1, title: "Initial Analysis", description: "AI scans your current directory presence" },
                  { step: 2, title: "Strategy Development", description: "Create custom optimization plan" },
                  { step: 3, title: "Implementation", description: "Deploy optimizations across all platforms" },
                  { step: 4, title: "Monitoring & Adjustment", description: "Continuous performance tracking" }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className={`flex items-center gap-8 ${i % 2 === 0 ? 'justify-end' : ''}`}
                  >
                    <div className={`w-1/2 ${i % 2 === 0 ? 'text-right' : ''}`}>
                      <h4 className="text-xl font-bold text-rose-200 mb-2">
                        Step {step.step}: {step.title}
                      </h4>
                      <p className="text-zinc-300">{step.description}</p>
                    </div>
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-rose-500" />
                    </div>
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto px-4 py-20"
      >
        <Card className="bg-gradient-to-br from-rose-900/80 to-purple-900/80 border-rose-500/20 text-center">
          <CardHeader>
            <CardTitle className="text-3xl bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text">
              Ready to Optimize Your Directory Presence?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Join hundreds of businesses already benefiting from our AI-powered directory optimization services.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-500/10">
                Schedule Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </main>
  );
} 