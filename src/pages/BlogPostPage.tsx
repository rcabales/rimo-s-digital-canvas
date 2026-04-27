import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, getAdjacentBlogPosts } from "@/data/content";
import { brandEase } from "@/lib/motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PrevNextNav from "@/components/PrevNextNav";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const adjacent = slug ? getAdjacentBlogPosts(slug) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!post) {
    return (
      <>
        <SiteHeader />
        <main className="section-container section-padding pt-32">
          <h1 className="text-3xl font-semibold">Post not found</h1>
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
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-muted-foreground">{post.readTime} read</span>
            <span className="text-border">·</span>
            <span className="font-mono text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl tracking-tighter mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-8">{post.synopsis}</p>

          <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border mb-10 bg-accent">
            <img
              src={post.thumbnail}
              alt={post.title}
              width={1280}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose prose-slate max-w-[65ch] prose-headings:tracking-tight prose-headings:font-semibold">
            {(() => {
              const blocks = post.content.split("\n\n");
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
                        src={post.inlineImage}
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
              basePath="/blog"
              prev={adjacent.prev}
              next={adjacent.next}
              prevLabel="Previous post"
              nextLabel="Next post"
            />
          )}
        </motion.div>
      </main>
      <SiteFooter />
    </>
  );
};

export default BlogPostPage;
