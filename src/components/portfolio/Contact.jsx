import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Youtube, Linkedin, Instagram, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOCIALS = [
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 sm:py-40 border-t border-border/60 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1]"
        >
          <span className="block text-foreground">Say</span>
          <span className="block text-primary">Hello.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Whether you want coaching, have a collaboration in mind, or just want
          to say hello — reach out anytime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-base shadow-xl shadow-primary/30"
          >
            <a
              href="mailto:hello@momarzouq.com"
              className="inline-flex items-center gap-2"
            >
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
                {s.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
