import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, getAdjacentProjects } from "@/data/content";
import { brandEase } from "@/lib/motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PrevNextNav from "@/components/PrevNextNav";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const adjacent = slug ? getAdjacentProjects(slug) : null;

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
            {(() => {
              const blocks = project.content.split("\n\n");
              const firstParaIdx = blocks.findIndex(
                (b) => !b.startsWith("#") && !b.startsWith("- ")
              );
              return blocks.flatMap((paragraph, i) => {
                const nodes: React.ReactNode[] = [];
                if (paragraph.startsWith("### ")) {
                  nodes.push(<h3 key={i}>{paragraph.replace("### ", "")}</h3>);
                } else if (paragraph.startsWith("## ")) {
                  nodes.push(<h2 key={i}>{paragraph.replace("## ", "")}</h2>);
                } else if (paragraph.startsWith("- ")) {
                  nodes.push(
                    <ul key={i}>
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                } else {
                  nodes.push(<p key={i}>{paragraph}</p>);
                }
                if (i === firstParaIdx) {
                  nodes.push(
                    <figure key={`fig-${i}`} className="not-prose my-8">
                      <img
                        src={project.inlineImage}
                        alt=""
                        loading="lazy"
                        width={1280}
                        height={640}
                        className="w-full rounded-2xl border border-border"
                      />
                    </figure>
                  );
                }
                return nodes;
              });
            })()}
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
