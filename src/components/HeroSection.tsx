import { motion } from "framer-motion";
import { ArrowDown, User } from "lucide-react";
import { brandEase } from "@/lib/motion";

const ease = brandEase;

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="section-container pt-24">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl"
          >
            <p className="label-meta mb-6">Full Stack Developer · 12+ Years</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] text-foreground mb-8">
              Building resilient
              <br />
              web architecture
              <br />
              <span className="text-primary">for twelve years.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Full Stack Developer specializing in WordPress, React, and the space between
              design and engineering. Currently based globally, working remotely.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-muted border border-border shadow-lg">
              {/* Replace src with your headshot image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/30">
                <User className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 text-muted-foreground/50" />
              </div>
            </div>
          </motion.div>
        </div>
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
