"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="w-16 h-16 border-4 border-rose-500 rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="w-24 h-24 border-4 border-rose-500 rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-2xl font-bold bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text"
      >
        Loading...
      </motion.h2>
    </div>
  );
}

export function LoadingCard() {
  return (
    <div className="rounded-lg bg-gradient-to-br from-purple-900/50 to-rose-900/50 border border-rose-500/20 p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-rose-500/20 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-rose-500/20 rounded" />
          <div className="h-4 bg-rose-500/20 rounded w-5/6" />
          <div className="h-4 bg-rose-500/20 rounded w-4/6" />
        </div>
      </div>
    </div>
  );
} 