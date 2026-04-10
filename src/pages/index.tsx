import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="Eswar Chinthakayala - Full Stack Developer"
        description="Experienced full stack developer specializing in Next.js, Python, PHP, Go, and modern web technologies. Building robust web applications with expertise across frontend and backend."
      />
      <main className="min-h-screen">
        <Hero />
        <Skills />
        <Footer />
      </main>
    </>
  );
}