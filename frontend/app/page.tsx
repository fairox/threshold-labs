import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Events } from "@/components/sections/Events";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)]">
      <Header />
      <Hero />
      <About />
      <Events />
    </main>
  );
}
