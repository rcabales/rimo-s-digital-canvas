import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { brandEase } from "@/lib/motion";

const ease = brandEase;

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="section-container pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-4xl"
        >
          {/* <p className="label-meta mb-6">Full Stack Developer · 12+ Years</p> */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] text-foreground mb-8">
            Full Stack Developer. 10+ years. <span className="text-primary">Front to back</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            I've spent more than ten years building websites and web apps that hold up under pressure. I work across the full stack — front end and back end — with WordPress at the core of what I do. Remote-first, working with teams around the world.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="h-12 px-8 rounded-full bg-foreground text-card inline-flex items-center text-sm font-medium hover:bg-primary transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="h-12 px-8 rounded-full border border-border text-foreground inline-flex items-center text-sm font-medium hover:bg-accent transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
