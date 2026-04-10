import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO 
        title="Eswar Chinthakayala - Full Stack Developer"
        description="Full-stack developer specializing in modern web technologies. Building scalable applications with React, Next.js, Python, and more."
      />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}