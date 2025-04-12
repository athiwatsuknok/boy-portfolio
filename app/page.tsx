"use client";

import { useEffect, useState, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSectionAlt } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { FeaturedProjectSection } from "@/components/sections/featured-project-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    // Add smooth scrolling to HTML
    document.documentElement.style.scrollBehavior = "smooth";

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clean up
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Spotlight className="w-full h-max-screen">
        <Navbar scrolled={scrolled} />
        <HeroSection />
        <SkillsSection />
        <ExperienceSectionAlt />
        <ProjectsSection />
        <FeaturedProjectSection />
        <ContactSection />
        <Footer />
      </Spotlight>
    </main>
  );
}
