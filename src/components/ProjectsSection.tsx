import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getLatestProjects } from "@/data/content";
import { brandEase } from "@/lib/motion";

const ease = brandEase;

const ProjectsSection = () => {
  const projects = getLatestProjects(6);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="label-meta mb-4">Selected Work</p>
          <h2 className="text-3xl md:text-4xl tracking-tighter mb-10">Projects that shipped.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              whileHover={{ y: -5 }}
              className="transition-shadow hover:shadow-lift h-full"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden"
              >
                <div className={`aspect-[16/10] ${project.bg} overflow-hidden`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-full object-contain scale-90 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0 ml-2"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.synopsis}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-muted-foreground bg-accent px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
