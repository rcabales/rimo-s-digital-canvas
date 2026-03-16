import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getLatestBlogPosts } from "@/data/content";
import { brandEase } from "@/lib/motion";

const ease = brandEase;

const BlogSection = () => {
  const posts = getLatestBlogPosts(6);

  return (
    <section id="blog" className="section-padding bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="label-meta mb-4">Writing</p>
          <h2 className="text-3xl md:text-4xl tracking-tighter mb-10">Thinking out loud.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              whileHover={{ y: -5 }}
              className="transition-shadow hover:shadow-lift"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-background rounded-2xl border border-border overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-muted-foreground">{post.readTime} read</span>
                    <span className="text-border">·</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0 ml-2"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.synopsis}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
