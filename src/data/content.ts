import projectCms from "@/assets/project-cms.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectDesignSystem from "@/assets/project-design-system.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectPublishing from "@/assets/project-publishing.jpg";
import blogHeadlessWp from "@/assets/blog-headless-wp.jpg";
import blogTypescript from "@/assets/blog-typescript.jpg";
import blogCss from "@/assets/blog-css.jpg";
import blogRemote from "@/assets/blog-remote.jpg";
import blogPerformance from "@/assets/blog-performance.jpg";
import blogMigration from "@/assets/blog-migration.jpg";
import inlineCms from "@/assets/inline-cms.jpg";
import inlineFintech from "@/assets/inline-fintech.jpg";
import inlineEcommerce from "@/assets/inline-ecommerce.jpg";
import inlineDesignSystem from "@/assets/inline-design-system.jpg";
import inlineHealthcare from "@/assets/inline-healthcare.jpg";
import inlinePublishing from "@/assets/inline-publishing.jpg";
import inlineHeadlessWp from "@/assets/inline-headless-wp.jpg";
import inlineTypescript from "@/assets/inline-typescript.jpg";
import inlineCss from "@/assets/inline-css.jpg";
import inlineRemote from "@/assets/inline-remote.jpg";
import inlinePerformance from "@/assets/inline-performance.jpg";
import inlineMigration from "@/assets/inline-migration.jpg";

// Project markdown content
import contentEnterpriseCms from "@/content/projects/enterprise-cms-platform.md?raw";
import contentFintech from "@/content/projects/fintech-dashboard.md?raw";
import contentEcommerce from "@/content/projects/ecommerce-migration.md?raw";
import contentDesignSystem from "@/content/projects/design-system-library.md?raw";
import contentHealthcare from "@/content/projects/healthcare-portal.md?raw";
import contentPublishing from "@/content/projects/media-publishing-platform.md?raw";
import bsiGroup from "@/content/projects/bsigroup.md?raw";

// Blog markdown content
import contentHeadlessWp from "@/content/blog/headless-wordpress-at-scale.md?raw";
import contentWordpressNextjs from "@/content/blog/wordpress-nextjs.md?raw";
import contentTypescript from "@/content/blog/typescript-patterns-for-seniors.md?raw";
import contentCss from "@/content/blog/css-architecture-2025.md?raw";
import contentRemote from "@/content/blog/remote-work-engineering-culture.md?raw";
import contentPerformance from "@/content/blog/performance-budgets-that-work.md?raw";
import contentMigration from "@/content/blog/wordpress-to-react-migration.md?raw";

export interface Project {
  slug: string;
  title: string;
  synopsis: string;
  thumbnail: string;
  inlineImage: string;
  date: string;
  tags: string[];
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  synopsis: string;
  thumbnail: string;
  inlineImage: string;
  date: string;
  readTime: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: "bsi-group",
    title: "BSI Group",
    synopsis: "Redesign and rebuild of the BSI website, building components integrated into a bespoke CMS with a focus on accessibility and lean JavaScript",
    thumbnail: projectCms,
    inlineImage: inlineCms,
    date: "2025-11-15",
    tags: ["JavaScript"],
    content: bsiGroup,
  },
  {
    slug: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    synopsis: "Real-time financial data visualization platform with role-based access control.",
    thumbnail: projectFintech,
    inlineImage: inlineFintech,
    date: "2025-08-20",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    content: contentFintech,
  },
  {
    slug: "ecommerce-migration",
    title: "E-Commerce Platform Migration",
    synopsis: "Migrated a legacy monolith to a modern JAMstack architecture, improving performance by 3x.",
    thumbnail: projectEcommerce,
    inlineImage: inlineEcommerce,
    date: "2025-05-10",
    tags: ["Next.js", "Tailwind", "Shopify", "GraphQL"],
    content: contentEcommerce,
  },
  {
    slug: "design-system-library",
    title: "Enterprise Design System",
    synopsis: "A comprehensive component library serving 15 development teams across the organization.",
    thumbnail: projectDesignSystem,
    inlineImage: inlineDesignSystem,
    date: "2025-02-28",
    tags: ["React", "Storybook", "CSS", "TypeScript"],
    content: contentDesignSystem,
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Patient Portal",
    synopsis: "HIPAA-compliant patient portal with telehealth integration and secure messaging.",
    thumbnail: projectHealthcare,
    inlineImage: inlineHealthcare,
    date: "2024-11-05",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "AWS"],
    content: contentHealthcare,
  },
  {
    slug: "media-publishing-platform",
    title: "Digital Publishing Platform",
    synopsis: "A high-traffic media platform serving 5M+ monthly readers with sub-second load times.",
    thumbnail: projectPublishing,
    inlineImage: inlinePublishing,
    date: "2024-08-18",
    tags: ["WordPress", "PHP", "Redis", "CloudFlare"],
    content: contentPublishing,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "wordpress-nextjs",
    title: "WordPress + Next.js: How I Build Websites That Are Fast, Flexible, and Easy for You to Manage",
    synopsis: "How WordPress and Next.js work together to give your business a faster, better-looking website — without the headaches.",
    thumbnail: blogHeadlessWp,
    inlineImage: inlineHeadlessWp,
    date: "2025-12-01",
    readTime: "8 min",
    content: contentWordpressNextjs,
  },
  {
    slug: "headless-wordpress-at-scale",
    title: "Headless WordPress at Scale: Lessons from 200+ Sites",
    synopsis: "Practical patterns for running headless WordPress in enterprise environments.",
    thumbnail: blogHeadlessWp,
    inlineImage: inlineHeadlessWp,
    date: "2025-12-01",
    readTime: "8 min",
    content: contentHeadlessWp,
  },
  {
    slug: "typescript-patterns-for-seniors",
    title: "TypeScript Patterns That Signal Senior-Level Code",
    synopsis: "Beyond generics: discriminated unions, branded types, and compile-time guarantees.",
    thumbnail: blogTypescript,
    inlineImage: inlineTypescript,
    date: "2025-10-15",
    readTime: "12 min",
    content: contentTypescript,
  },
  {
    slug: "css-architecture-2025",
    title: "CSS Architecture in 2025: What Actually Works",
    synopsis: "Evaluating Tailwind, CSS Modules, and vanilla CSS for large-scale applications.",
    thumbnail: blogCss,
    inlineImage: inlineCss,
    date: "2025-08-22",
    readTime: "10 min",
    content: contentCss,
  },
  {
    slug: "remote-work-engineering-culture",
    title: "Building Engineering Culture in Remote-First Teams",
    synopsis: "Strategies for maintaining code quality and team cohesion across time zones.",
    thumbnail: blogRemote,
    inlineImage: inlineRemote,
    date: "2025-06-10",
    readTime: "7 min",
    content: contentRemote,
  },
  {
    slug: "performance-budgets-that-work",
    title: "Performance Budgets That Actually Ship",
    synopsis: "How to implement performance budgets that don't get ignored by your team.",
    thumbnail: blogPerformance,
    inlineImage: inlinePerformance,
    date: "2025-03-18",
    readTime: "6 min",
    content: contentPerformance,
  },
  {
    slug: "wordpress-to-react-migration",
    title: "Migrating from WordPress to React: A Pragmatic Guide",
    synopsis: "A step-by-step strategy for incremental migration without disrupting business.",
    thumbnail: blogMigration,
    inlineImage: inlineMigration,
    date: "2025-01-05",
    readTime: "15 min",
    content: contentMigration,
  },
];

export function getLatestProjects(count = 6): Project[] {
  return [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getLatestBlogPosts(count = 6): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

function sortedByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAdjacentProjects(slug: string): { prev: Project; next: Project } | null {
  const sorted = sortedByDateDesc(projects);
  const idx = sorted.findIndex((p) => p.slug === slug);
  if (idx === -1 || sorted.length < 2) return null;
  const prev = sorted[(idx - 1 + sorted.length) % sorted.length];
  const next = sorted[(idx + 1) % sorted.length];
  return { prev, next };
}

export function getAdjacentBlogPosts(slug: string): { prev: BlogPost; next: BlogPost } | null {
  const sorted = sortedByDateDesc(blogPosts);
  const idx = sorted.findIndex((p) => p.slug === slug);
  if (idx === -1 || sorted.length < 2) return null;
  const prev = sorted[(idx - 1 + sorted.length) % sorted.length];
  const next = sorted[(idx + 1) % sorted.length];
  return { prev, next };
}

