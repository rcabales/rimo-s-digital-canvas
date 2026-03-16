import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug } from "@/data/content";
import { brandEase } from "@/lib/motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

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
          <p className="text-muted-foreground mb-10">{post.synopsis}</p>

          <article className="prose prose-slate max-w-[65ch] prose-headings:tracking-tight prose-headings:font-semibold">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("### ")) {
                return <h3 key={i}>{paragraph.replace("### ", "")}</h3>;
              }
              if (paragraph.startsWith("## ")) {
                return <h2 key={i}>{paragraph.replace("## ", "")}</h2>;
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i}>
                    {paragraph.split("\n").map((item, j) => (
                      <li key={j}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </article>
        </motion.div>
      </main>
      <SiteFooter />
    </>
  );
};

export default BlogPostPage;
