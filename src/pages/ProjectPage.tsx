import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, getAdjacentProjects } from "@/data/content";
import { brandEase } from "@/lib/motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PrevNextNav from "@/components/PrevNextNav";
import MarkdownContent from "@/components/MarkdownContent";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const adjacent = slug ? getAdjacentProjects(slug) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) {
    return (
      <>
        <SiteHeader />
        <main className="section-container section-padding pt-32">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <Link to="/" className="text-primary mt-4 inline-block">← Back home</Link>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="section-container pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: brandEase }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs text-muted-foreground bg-accent px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl tracking-tighter mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-2">{project.synopsis}</p>
          <p className="font-mono text-xs text-muted-foreground mb-8">
            {new Date(project.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>

          <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border mb-10 bg-accent">
            <img
              src={project.thumbnail}
              alt={project.title}
              width={1280}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose prose-slate max-w-[65ch] prose-headings:tracking-tight prose-headings:font-semibold">
            <MarkdownContent
              content={project.content}
              inlineImage={project.inlineImage}
            />
          </article>
          {adjacent && (
            <PrevNextNav
              basePath="/projects"
              prev={adjacent.prev}
              next={adjacent.next}
              prevLabel="Previous project"
              nextLabel="Next project"
            />
          )}
        </motion.div>
      </main>
      <SiteFooter />
    </>
  );
};

export default ProjectPage;
