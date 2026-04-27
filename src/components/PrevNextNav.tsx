import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface AdjacentItem {
  slug: string;
  title: string;
}

interface PrevNextNavProps {
  prev: AdjacentItem;
  next: AdjacentItem;
  basePath: "/projects" | "/blog";
  prevLabel?: string;
  nextLabel?: string;
}

const PrevNextNav = ({
  prev,
  next,
  basePath,
  prevLabel = "Previous",
  nextLabel = "Next",
}: PrevNextNavProps) => {
  return (
    <nav
      aria-label="Article navigation"
      className="mt-16 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <Link
        to={`${basePath}/${prev.slug}`}
        className="group flex flex-col items-start gap-2 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lift transition-all"
      >
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
          <ArrowLeft size={14} /> {prevLabel}
        </span>
        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {prev.title}
        </span>
      </Link>
      <Link
        to={`${basePath}/${next.slug}`}
        className="group flex flex-col items-end gap-2 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lift transition-all sm:text-right"
      >
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
          {nextLabel} <ArrowRight size={14} />
        </span>
        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {next.title}
        </span>
      </Link>
    </nav>
  );
};

export default PrevNextNav;
