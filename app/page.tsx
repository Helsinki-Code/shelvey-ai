"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "AI Analysis Expert",
    role: "Directory Optimization Specialist",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Content Strategist",
    role: "SEO Optimization Lead",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Data Scientist",
    role: "Performance Analytics Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const services = [
  {
    title: "Directory Analysis",
    description: "AI-driven analysis of your current directory presence and optimization opportunities",
    icon: "📊",
  },
  {
    title: "Content Optimization",
    description: "Create compelling, SEO-optimized content for maximum visibility",
    icon: "✍️",
  },
  {
    title: "Performance Tracking",
    description: "Real-time monitoring and analytics of your directory performance",
    icon: "📈",
  }
];

const features = [
  {
    title: "AI-Powered Optimization",
    description: "Leverage cutting-edge AI technology to optimize your directory listings",
    icon: "⚡",
  },
  {
    title: "Comprehensive Coverage",
    description: "Get listed and optimized across all major business directories",
    icon: "🌐",
  },
  {
    title: "Data-Driven Results",
    description: "Make informed decisions with comprehensive analytics and insights",
    icon: "📊",
  },
  {
    title: "Time-Efficient",
    description: "Save hours of manual work with our automated optimization process",
    icon: "⏱️",
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const pricingPlans = [
  {
    name: "Starter",
    price: "$299/mo",
    features: [
      "AI Analysis of 50 Directories",
      "Monthly Optimization",
      "Basic SEO Reports",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "$599/mo",
    features: [
      "AI Analysis of 200 Directories",
      "Weekly Optimization",
      "Advanced SEO Analytics",
      "Priority Support",
      "Custom Branding"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Directory Analysis",
      "Daily Optimization",
      "Real-time SEO Tracking",
      "Dedicated Account Manager",
      "API Access",
      "Custom Integration"
    ]
  }
];

const processSteps = [
  {
    title: "AI Analysis",
    description: "Our AI scans and analyzes your current presence across all major business directories",
    icon: "🔍"
  },
  {
    title: "Optimization Strategy",
    description: "We create a custom strategy based on data-driven insights",
    icon: "📊"
  },
  {
    title: "Implementation",
    description: "Automated optimization across all platforms with human oversight",
    icon: "⚡"
  },
  {
    title: "Monitoring",
    description: "Continuous monitoring and adjustments for optimal performance",
    icon: "📈"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-24 text-center relative overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-amber-200 via-rose-300 to-purple-200 text-transparent bg-clip-text">
            Directory Listing
            <br />
            Reimagined with AI
          </h1>
          <p className="mx-auto mt-6 max-w-[800px] text-xl text-zinc-300">
            Revolutionizing how businesses appear across directories with AI-powered optimization
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600">
              Start Optimization
            </Button>
            <Button size="lg" variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-500/10">
              View Demo
            </Button>
          </div>
        </motion.div>
      </motion.section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-20 bg-black/30 backdrop-blur-lg rounded-3xl my-20">
        <motion.h2 
          {...fadeIn}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
        >
          How It Works
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 hover:border-rose-500/40 transition-all">
                <CardHeader>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <CardTitle className="text-xl text-rose-200">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300">{step.description}</p>
                </CardContent>
              </Card>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-rose-500/20 to-amber-500/20" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2 
          {...fadeIn}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
        >
          Pricing Plans
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 hover:border-rose-500/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-rose-200">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-amber-200">
                    {plan.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-zinc-300">
                        <span className="text-rose-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600">
                    Get Started
                  </Button>
                </CardFooter>
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
        <Card className="bg-gradient-to-br from-rose-900/80 to-purple-900/80 border-rose-500/20">
          <CardHeader>
            <CardTitle className="text-4xl text-center bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text">
              Ready to Dominate Directory Rankings?
            </CardTitle>
            <CardDescription className="text-xl text-center text-zinc-300 mt-4">
              Join hundreds of businesses leveraging AI for optimal directory presence
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center gap-6 mt-6">
            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-500/10">
              Schedule Demo
            </Button>
          </CardFooter>
        </Card>
      </motion.section>
    </main>
  )
} 