import { motion } from "framer-motion";
import { brandEase } from "@/lib/motion";

const ease = brandEase;

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="label-meta mb-4">About</p>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl tracking-tighter mb-6">
                Turning complex problems into
                <span className="text-primary"> elegant solutions.</span>
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a Full Stack Web Developer with over 12 years of experience
                across fast-paced digital agencies and focused, single-product companies.
                My work sits at the intersection of robust back-end architecture and
                polished front-end experiences.
              </p>
              <p>
                I thrive in cross-functional teams—collaborating closely with designers,
                product managers, QA engineers, and UX researchers to ship work that's
                both technically sound and genuinely useful.
              </p>
              <p>
                For the past several years, I've worked fully remote with distributed
                teams across multiple time zones, delivering consistently without
                missing a beat.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
