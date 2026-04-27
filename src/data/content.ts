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

export interface Project {
  slug: string;
  title: string;
  synopsis: string;
  thumbnail: string;
  date: string;
  tags: string[];
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  synopsis: string;
  thumbnail: string;
  date: string;
  readTime: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: "enterprise-cms-platform",
    title: "Enterprise CMS Platform",
    synopsis: "A scalable headless CMS powering 200+ microsites for a Fortune 500 client.",
    thumbnail: projectCms,
    date: "2025-11-15",
    tags: ["WordPress", "PHP", "React", "REST API"],
    content: "## Enterprise CMS Platform\n\nBuilt a scalable headless WordPress CMS architecture that powers over 200 microsites for a Fortune 500 retail company. The system handles 10M+ page views monthly with a 99.9% uptime SLA.\n\n### Challenge\nThe client needed to unify their fragmented web presence across multiple brands while maintaining individual brand identity.\n\n### Solution\nDesigned a multi-tenant WordPress architecture with a shared core and brand-specific theme layers. Built custom Gutenberg blocks for content editors and a React-based front-end consuming the WP REST API.\n\n### Results\n- 60% reduction in content publishing time\n- 40% improvement in page load performance\n- Unified analytics across all properties",
  },
  {
    slug: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    synopsis: "Real-time financial data visualization platform with role-based access control.",
    thumbnail: projectFintech,
    date: "2025-08-20",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    content: "## FinTech Analytics Dashboard\n\nDesigned and developed a real-time analytics dashboard for a fintech startup, processing and visualizing millions of financial transactions daily.\n\n### Technical Highlights\n- WebSocket-based real-time data streaming\n- Custom D3.js visualizations for complex financial data\n- Role-based access control with granular permissions\n- Responsive design optimized for trading desk workflows",
  },
  {
    slug: "ecommerce-migration",
    title: "E-Commerce Platform Migration",
    synopsis: "Migrated a legacy monolith to a modern JAMstack architecture, improving performance by 3x.",
    thumbnail: projectEcommerce,
    date: "2025-05-10",
    tags: ["Next.js", "Tailwind", "Shopify", "GraphQL"],
    content: "## E-Commerce Platform Migration\n\nLed the full migration of a legacy PHP monolith e-commerce platform to a modern JAMstack architecture using Next.js and Shopify's Storefront API.\n\n### Impact\n- 3x improvement in Lighthouse performance scores\n- 25% increase in conversion rate\n- 50% reduction in infrastructure costs",
  },
  {
    slug: "design-system-library",
    title: "Enterprise Design System",
    synopsis: "A comprehensive component library serving 15 development teams across the organization.",
    thumbnail: projectDesignSystem,
    date: "2025-02-28",
    tags: ["React", "Storybook", "CSS", "TypeScript"],
    content: "## Enterprise Design System\n\nArchitected and led the development of a design system that standardized UI patterns across 15 development teams, reducing design inconsistencies by 80%.\n\n### Key Features\n- 60+ accessible, tested React components\n- Automated visual regression testing\n- Comprehensive Storybook documentation\n- Figma-to-code workflow integration",
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Patient Portal",
    synopsis: "HIPAA-compliant patient portal with telehealth integration and secure messaging.",
    thumbnail: projectHealthcare,
    date: "2024-11-05",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "AWS"],
    content: "## Healthcare Patient Portal\n\nBuilt a HIPAA-compliant patient portal enabling secure communication between patients and healthcare providers, including telehealth video consultations.\n\n### Security & Compliance\n- End-to-end encryption for all patient data\n- HIPAA and SOC 2 Type II compliance\n- Automated audit logging\n- Regular penetration testing",
  },
  {
    slug: "media-publishing-platform",
    title: "Digital Publishing Platform",
    synopsis: "A high-traffic media platform serving 5M+ monthly readers with sub-second load times.",
    thumbnail: projectPublishing,
    date: "2024-08-18",
    tags: ["WordPress", "PHP", "Redis", "CloudFlare"],
    content: "## Digital Publishing Platform\n\nDeveloped a high-performance digital publishing platform for a major media company, optimized for SEO and reader engagement.\n\n### Performance\n- Sub-second Time to First Byte (TTFB)\n- 95+ Lighthouse scores across all metrics\n- Edge caching strategy reducing origin requests by 90%",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "headless-wordpress-at-scale",
    title: "Headless WordPress at Scale: Lessons from 200+ Sites",
    synopsis: "Practical patterns for running headless WordPress in enterprise environments.",
    thumbnail: blogHeadlessWp,
    date: "2025-12-01",
    readTime: "8 min",
    content: "## Headless WordPress at Scale\n\nAfter managing headless WordPress deployments across 200+ sites, here are the architectural patterns that actually work at scale.\n\n### The Monorepo Approach\nKeeping all sites in a single repository with shared plugins and theme fragments...\n\n### Caching Strategy\nA multi-layer caching approach using Redis for object cache, Varnish for full-page cache, and a CDN edge layer...\n\n### Content Modeling\nUsing Advanced Custom Fields (ACF) with a strict schema to create a predictable API surface...",
  },
  {
    slug: "typescript-patterns-for-seniors",
    title: "TypeScript Patterns That Signal Senior-Level Code",
    synopsis: "Beyond generics: discriminated unions, branded types, and compile-time guarantees.",
    thumbnail: blogTypescript,
    date: "2025-10-15",
    readTime: "12 min",
    content: "## TypeScript Patterns That Signal Senior-Level Code\n\nThe difference between intermediate and senior TypeScript isn't about knowing more syntax—it's about leveraging the type system to eliminate entire categories of runtime errors.\n\n### Discriminated Unions\nInstead of optional properties, use discriminated unions to make impossible states unrepresentable...\n\n### Branded Types\nPrevent accidental mixing of semantically different values that share the same primitive type...",
  },
  {
    slug: "css-architecture-2025",
    title: "CSS Architecture in 2025: What Actually Works",
    synopsis: "Evaluating Tailwind, CSS Modules, and vanilla CSS for large-scale applications.",
    thumbnail: blogCss,
    date: "2025-08-22",
    readTime: "10 min",
    content: "## CSS Architecture in 2025\n\nAfter building design systems with every major CSS methodology, here's what actually scales and what doesn't.\n\n### The Tailwind Thesis\nUtility-first CSS works exceptionally well when you have a strong design token foundation...\n\n### When CSS Modules Win\nFor component libraries that need to be consumed by different frameworks...",
  },
  {
    slug: "remote-work-engineering-culture",
    title: "Building Engineering Culture in Remote-First Teams",
    synopsis: "Strategies for maintaining code quality and team cohesion across time zones.",
    thumbnail: blogRemote,
    date: "2025-06-10",
    readTime: "7 min",
    content: "## Building Engineering Culture in Remote-First Teams\n\nHaving worked remotely across multiple time zones for 8+ years, here are the practices that build strong engineering culture without an office.\n\n### Asynchronous Code Reviews\nStructured review processes that respect time zone differences...\n\n### Documentation as Culture\nWhen documentation is the default communication medium...",
  },
  {
    slug: "performance-budgets-that-work",
    title: "Performance Budgets That Actually Ship",
    synopsis: "How to implement performance budgets that don't get ignored by your team.",
    thumbnail: blogPerformance,
    date: "2025-03-18",
    readTime: "6 min",
    content: "## Performance Budgets That Actually Ship\n\nMost performance budgets fail because they're set once and forgotten. Here's how to make them stick.\n\n### Automate Enforcement\nIntegrate Lighthouse CI into your deploy pipeline with hard failure thresholds...\n\n### Make It Visible\nDashboard the metrics where the team already looks...",
  },
  {
    slug: "wordpress-to-react-migration",
    title: "Migrating from WordPress to React: A Pragmatic Guide",
    synopsis: "A step-by-step strategy for incremental migration without disrupting business.",
    thumbnail: blogMigration,
    date: "2025-01-05",
    readTime: "15 min",
    content: "## Migrating from WordPress to React\n\nA full rewrite is almost never the answer. Here's how to migrate incrementally while keeping the business running.\n\n### The Strangler Fig Pattern\nStart by embedding React components within WordPress pages...\n\n### API-First Migration\nExpose WordPress data through a well-structured REST API before touching the front-end...",
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
