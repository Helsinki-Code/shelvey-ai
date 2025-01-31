"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const agencyInfo = {
  name: "ShelVey",
  address: {
    street: "131 Continental Dr Suite 305",
    city: "Newark",
    state: "DE",
    zip: "19713",
    country: "US"
  },
  phone: "+1 (302) 555-0123",
  email: "contact@shelvey.com",
  hours: {
    weekdays: "9:00 AM - 6:00 PM EST",
    saturday: "10:00 AM - 4:00 PM EST",
    sunday: "Closed"
  }
};

export function LocationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-rose-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text mb-4">
            Visit ShelVey
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Experience directory optimization excellence at our Newark office. We're here to help you maximize your local presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 overflow-hidden">
              <div className="relative h-[400px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.894157902621!2d-75.7276!3d39.6838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7a9e4d5c8b8a7%3A0x1b1b2b2b2b2b2b2b!2s131%20Continental%20Dr%20Suite%20305%2C%20Newark%2C%20DE%2019713!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </Card>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 border-rose-500/20 p-8">
              <div className="space-y-6">
                {/* Address */}
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="w-6 h-6 text-rose-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-rose-200 mb-1">Our Location</h3>
                    <p className="text-zinc-300">
                      {agencyInfo.address.street}<br />
                      {agencyInfo.address.city}, {agencyInfo.address.state} {agencyInfo.address.zip}<br />
                      {agencyInfo.address.country}
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="w-6 h-6 text-rose-400" />
                  <div>
                    <h3 className="font-semibold text-rose-200 mb-1">Phone</h3>
                    <p className="text-zinc-300">{agencyInfo.phone}</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-6 h-6 text-rose-400" />
                  <div>
                    <h3 className="font-semibold text-rose-200 mb-1">Email</h3>
                    <p className="text-zinc-300">{agencyInfo.email}</p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="w-6 h-6 text-rose-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-rose-200 mb-1">Business Hours</h3>
                    <div className="text-zinc-300">
                      <p>Monday - Friday: {agencyInfo.hours.weekdays}</p>
                      <p>Saturday: {agencyInfo.hours.saturday}</p>
                      <p>Sunday: {agencyInfo.hours.sunday}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 