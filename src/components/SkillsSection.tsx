import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Code2, GitBranch, Palette, Server, TestTube } from "lucide-react";
import { brandEase } from "@/lib/motion";

const ease = brandEase;

interface Skill {
  name: string;
  years: string;
  icon: React.ReactNode;
  primary: boolean;
}

const skills: Skill[] = [
  { name: "WordPress", years: "12+", icon: <Globe size={28} />, primary: true },
  { name: "PHP", years: "12+", icon: <Server size={28} />, primary: true },
  { name: "JavaScript", years: "12+", icon: <Code2 size={28} />, primary: true },
  { name: "CSS", years: "12+", icon: <Palette size={28} />, primary: true },
  { name: "Tailwind", years: "5+", icon: <Palette size={28} />, primary: true },
  { name: "GitHub", years: "10+", icon: <GitBranch size={28} />, primary: true },
  { name: "React", years: "6+", icon: <Code2 size={20} />, primary: false },
  { name: "Vue", years: "4+", icon: <Code2 size={20} />, primary: false },
  { name: "Next.js", years: "4+", icon: <Globe size={20} />, primary: false },
  { name: "Twig", years: "6+", icon: <Code2 size={20} />, primary: false },
  { name: "Cypress", years: "3+", icon: <TestTube size={20} />, primary: false },
];

const SkillsSection = () => {
  const [showYears, setShowYears] = useState(false);
  const primarySkills = skills.filter((s) => s.primary);
  const secondarySkills = skills.filter((s) => !s.primary);

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="label-meta mb-4">Technical Skills</p>
              <h2 className="text-3xl md:text-4xl tracking-tighter">The stack I rely on.</h2>
            </div>
            <button
              onClick={() => setShowYears(!showYears)}
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground border border-border rounded-full px-4 py-2 hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              {showYears ? "Technologies" : "Experience"}
            </button>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3">
            {primarySkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                whileHover={{ y: -4 }}
                className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-background rounded-2xl border border-border p-6 flex flex-col justify-between min-h-[160px] cursor-default transition-shadow hover:shadow-lift"
              >
                <div className="text-foreground mb-4">{skill.icon}</div>
                <div>
                  <p className="font-semibold text-foreground text-lg">{skill.name}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">
                    {showYears ? `${skill.years} years` : "Primary stack"}
                  </p>
                </div>
              </motion.div>
            ))}
            {secondarySkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (primarySkills.length + i) * 0.05, ease }}
                whileHover={{ y: -4 }}
                className="col-span-1 md:col-span-2 lg:col-span-2 bg-background rounded-2xl border border-border p-4 flex flex-col justify-between min-h-[80px] cursor-default transition-shadow hover:shadow-lift"
              >
                <div className="text-muted-foreground mb-2">{skill.icon}</div>
                <div>
                  <p className="font-medium text-foreground text-sm">{skill.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {showYears ? skill.years : "Secondary"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
