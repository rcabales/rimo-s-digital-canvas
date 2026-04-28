import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Wait a tick for sections to mount
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash, location.key]);

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
