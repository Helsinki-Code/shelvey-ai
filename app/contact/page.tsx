"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const contactMethods = [
  {
    icon: "📞",
    title: "Phone Support",
    description: "Talk to our experts",
    value: "+1 (555) 123-4567",
    availability: "Mon-Fri, 9AM-6PM EST"
  },
  {
    icon: "✉️",
    title: "Email",
    description: "Get in touch via email",
    value: "hello@directorypro.ai",
    availability: "24/7 Response"
  },
  {
    icon: "💬",
    title: "Live Chat",
    description: "Chat with our team",
    value: "Available on website",
    availability: "24/7 Support"
  }
];

export default function Contact() {
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
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-zinc-300 max-w-3xl mx-auto"
        >
          Ready to transform your directory presence? We're here to help you get started.
        </motion.p>
      </motion.section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <CardTitle className="text-xl text-rose-200">{method.title}</CardTitle>
                  <p className="text-zinc-300">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-amber-200">{method.value}</p>
                  <p className="text-sm text-zinc-400">{method.availability}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-br from-rose-900/50 to-purple-900/50 border-rose-500/20 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text">
              Send Us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-rose-200">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-rose-500/10 border-rose-500/20 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-rose-200">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-rose-500/10 border-rose-500/20 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-rose-200">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-rose-500/10 border-rose-500/20 text-zinc-100 placeholder:text-zinc-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-rose-200">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    className="bg-rose-500/10 border-rose-500/20 text-zinc-100 placeholder:text-zinc-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-rose-200">Interested In</Label>
                  <RadioGroup defaultValue="starter" className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="starter" id="starter" className="border-rose-500" />
                      <Label htmlFor="starter" className="text-zinc-300">Starter Plan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="professional" id="professional" className="border-rose-500" />
                      <Label htmlFor="professional" className="text-zinc-300">Professional Plan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="enterprise" id="enterprise" className="border-rose-500" />
                      <Label htmlFor="enterprise" className="text-zinc-300">Enterprise Plan</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-rose-200">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    className="bg-rose-500/10 border-rose-500/20 text-zinc-100 placeholder:text-zinc-500 min-h-[150px]"
                  />
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              q: "How quickly can you optimize our listings?",
              a: "Initial optimization typically takes 2-3 business days, with continuous improvements thereafter."
            },
            {
              q: "Do you handle all major directories?",
              a: "Yes, we cover all major business directories and industry-specific platforms."
            },
            {
              q: "Can you handle multiple locations?",
              a: "Absolutely! Our platform is designed to manage and optimize listings for businesses with multiple locations."
            },
            {
              q: "What kind of reporting do you provide?",
              a: "We provide comprehensive monthly reports covering visibility, engagement, and ROI metrics."
            }
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20">
                <CardHeader>
                  <CardTitle className="text-lg text-rose-200">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300">{faq.a}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 