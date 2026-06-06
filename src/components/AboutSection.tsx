import { motion } from "framer-motion";
import { brandEase } from "@/lib/motion";

const ease = brandEase; // refresh

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
          {/* <p className="label-meta mb-4">About</p> */}
          <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-start">
            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease }}
              className="flex justify-center md:justify-start"
            >
              <div className="h-48 w-48 md:h-56 md:w-56 rounded-full ring-4 ring-border shadow-lg overflow-hidden bg-muted flex items-center justify-center">
                <img
                  src="/rc_headshot.jpg"
                  alt="Rimo Cabales headshot"
                  className="h-full w-full object-cover object-left scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-4xl font-semibold text-muted-foreground">RC</span>';
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl tracking-tighter mb-6">
                Turning complex problems into
                <span className="text-primary"> elegant solutions.</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Full Stack Web Developer with experience
                  across fast-paced digital agencies and focused, single-product companies.
                  My work sits at the intersection of robust back-end architecture and
                  polished front-end experiences.
                </p>
                <p>
                  I thrive in cross-functional teams - collaborating closely with designers,
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
