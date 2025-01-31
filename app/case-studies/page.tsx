"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    company: "TechStart Solutions",
    industry: "Software Development",
    challenge: "Inconsistent presence across 50+ directories with outdated information",
    solution: "Implemented AI-driven directory optimization and real-time sync",
    results: [
      "300% increase in directory visibility",
      "150% more customer inquiries",
      "Reduced management time by 85%",
      "Improved local SEO rankings by 200%"
    ],
    metrics: {
      visibility: "+300%",
      inquiries: "+150%",
      timeReduction: "85%",
      roi: "450%"
    }
  },
  {
    company: "Local Bistro Chain",
    industry: "Restaurant & Hospitality",
    challenge: "Managing listings for 12 locations with frequent menu and hour updates",
    solution: "Automated multi-location directory management system",
    results: [
      "200% increase in online reservations",
      "95% accuracy in real-time updates",
      "4.8/5 average rating across directories",
      "2x foot traffic from directory listings"
    ],
    metrics: {
      reservations: "+200%",
      accuracy: "95%",
      rating: "4.8/5",
      traffic: "+100%"
    }
  },
  {
    company: "HealthCare Plus",
    industry: "Healthcare Services",
    challenge: "Poor visibility in healthcare directories and inconsistent practitioner info",
    solution: "Comprehensive healthcare directory optimization strategy",
    results: [
      "250% increase in patient inquiries",
      "100% compliance with healthcare directories",
      "Improved practitioner visibility by 180%",
      "45% increase in new patient acquisition"
    ],
    metrics: {
      inquiries: "+250%",
      compliance: "100%",
      visibility: "+180%",
      patients: "+45%"
    }
  }
];

const testimonials = [
  {
    quote: "The AI-powered optimization transformed our online presence across directories. We're seeing more qualified leads than ever before.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechStart Solutions"
  },
  {
    quote: "Managing multiple location listings was a nightmare before. Now it's completely automated and always accurate.",
    author: "Michael Rodriguez",
    role: "Operations Manager",
    company: "Local Bistro Chain"
  },
  {
    quote: "The improvement in our healthcare directory presence has directly contributed to our patient growth.",
    author: "Dr. Emily Thompson",
    role: "CEO",
    company: "HealthCare Plus"
  }
];

export default function CaseStudies() {
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
          Success Stories
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-zinc-300 max-w-3xl mx-auto"
        >
          See how businesses are transforming their directory presence with our AI-powered solutions
        </motion.p>
      </motion.section>

      {/* Case Studies Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="space-y-20">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20">
                <CardHeader>
                  <div className="flex flex-wrap gap-4 items-center mb-4">
                    <CardTitle className="text-2xl text-rose-200">{study.company}</CardTitle>
                    <Badge variant="outline" className="bg-rose-500/10 text-rose-200 border-rose-500/20">
                      {study.industry}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-amber-200 mb-2">Challenge</h3>
                      <p className="text-zinc-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-200 mb-2">Solution</h3>
                      <p className="text-zinc-300">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-amber-200 mb-4">Results</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(study.metrics).map(([key, value], j) => (
                        <div key={j} className="bg-rose-500/10 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-rose-200 mb-2">{value}</div>
                          <div className="text-zinc-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 h-full">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">"</div>
                  <p className="text-zinc-300 mb-6">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-rose-200">{testimonial.author}</div>
                    <div className="text-sm text-zinc-400">{testimonial.role}</div>
                    <div className="text-sm text-zinc-400">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
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
              Ready to Write Your Success Story?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Join these successful businesses and transform your directory presence with our AI-powered solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-500/10">
                View More Case Studies
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </main>
  );
} 