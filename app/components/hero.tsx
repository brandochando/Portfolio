"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-4 text-center">
      <motion.h1
        className="mb-4 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BRANDON CHANDLER
      </motion.h1>
      <motion.p
        className="max-w-[600px] text-lg text-white sm:text-xl tracking-tight font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        NEW GRAD SOFTWARE ENGINEER
      </motion.p>
    </div>
  );
}
