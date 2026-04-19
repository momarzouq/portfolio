import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-brand-yellow/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Software Engineer · Content Creator
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-balance"
          >
            <span className="block text-foreground">Engineer.</span>
            <span className="block text-primary">Mentor.</span>
            <span className="block text-brand-yellow">Builder.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Im
            <span className="text-foreground font-semibold">
              Mohamed Marzouq
            </span>{" "}
            — a software engineer helping Arab developers level up through code,
            coaching and content. From cracking interviews to shipping real
            products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 h-12 shadow-lg shadow-primary/20"
            >
              <a href="#contact" className="inline-flex items-center gap-2">
                Contact Me <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent border-border text-foreground hover:bg-secondary h-12 px-6 font-semibold"
            >
              <a href="#videos" className="inline-flex items-center gap-2">
                <Play className="w-4 h-4" /> Watch Videos
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Orbit rings */}
          <div className="absolute inset-0 -m-8 rounded-full border border-primary/10" />
          <div className="absolute inset-0 -m-16 rounded-full border border-primary/5" />

          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-card border border-border">
            <img
              src="https://media.base44.com/images/public/69e55523a14d1d322b141bdb/127b17729_generated_39f71397.png"
              alt="Mohamed Marzouq — Software Engineer portrait (محمد مرزوق)"
              className="w-full h-full object-cover grayscale-[20%]"
            />
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 sm:-right-8 bg-card/90 backdrop-blur border border-border rounded-full px-4 py-2 shadow-xl"
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Software Engineer
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-1/2 -right-2 sm:-right-10 bg-card/90 backdrop-blur border border-border rounded-full px-4 py-2 shadow-xl"
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Interview Coach
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur border border-border rounded-full px-4 py-2 shadow-xl whitespace-nowrap"
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-arabic">محتوى عربي</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
