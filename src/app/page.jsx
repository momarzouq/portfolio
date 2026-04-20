import dynamic from "next/dynamic";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Works from "@/components/portfolio/Works";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import About from "@/components/portfolio/About";

// Lazy load below-fold components for performance
const Videos = dynamic(() => import("@/components/portfolio/Videos"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

const Community = dynamic(() => import("@/components/portfolio/Community"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Videos />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
