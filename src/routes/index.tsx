import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Technologies } from "@/components/sections/Technologies";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Qualification } from "@/components/sections/Qualification";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatbotWidget />
      <Toaster position="top-right" richColors />
    </div>
  );
}
