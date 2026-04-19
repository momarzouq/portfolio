import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Sparkles, GitBranch } from "lucide-react";
import SectionLabel from "./SectionLabel";

const SKILLS = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    desc: "Building production-grade apps with React, Node.js, TypeScript, and modern cloud infrastructure.",
  },
  {
    icon: Layers,
    title: "System Design",
    desc: "Designing scalable architectures, distributed systems, and clean APIs that grow with the product.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    desc: "Shipping intelligent features — from LLM-powered workflows to practical developer tooling.",
  },
  {
    icon: GitBranch,
    title: "Mentorship",
    desc: "Coaching engineers one-on-one on interviews, career growth, and navigating the tech industry.",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <SectionLabel>What I Do</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1]"
          >
            <span className="text-foreground">Craft meets</span>{" "}
            <span className="text-primary">community.</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
