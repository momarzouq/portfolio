import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Work from "@/components/portfolio/Work";
import Videos from "@/components/portfolio/Videos";
import Community from "@/components/portfolio/Community";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Videos />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
