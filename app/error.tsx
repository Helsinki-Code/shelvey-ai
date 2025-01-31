"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl"
        >
          😕
        </motion.div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-rose-200 text-transparent bg-clip-text">
            Something went wrong
          </h1>
          <p className="text-zinc-300 max-w-md mx-auto">
            We apologize for the inconvenience. Please try again or contact our support team if the problem persists.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = "/"}
            className="border-rose-500 text-rose-500 hover:bg-rose-500/10"
          >
            Go Home
          </Button>
        </div>
      </motion.div>
    </main>
  );
} 