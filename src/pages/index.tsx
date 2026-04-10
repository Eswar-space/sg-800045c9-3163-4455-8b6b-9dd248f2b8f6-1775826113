import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="Eswar Chinthakayala - Full Stack Developer"
        description="Full Stack Developer specializing in React, Next.js, Node.js, Python, and modern web technologies."
      />
      <main className="min-h-screen">
        <Hero />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}