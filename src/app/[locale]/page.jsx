import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

// Lazy load below-fold components for performance
const Videos = dynamic(() => import("@/components/Videos"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

// const Community = dynamic(() => import("@/components/Community"), {
//   loading: () => <div className="h-96" />,
//   ssr: true,
// });

export default async function Home({ params }) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero locale={locale} />
        <About />
        <Works />
        <Videos />
        {/* <Community /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
