import aailaFoodsLogo from "@/assets/content/projects/aailafoods/aailafoods.png";

import hassanNurLogo from "@/assets/content/projects/hassannur/hassannur.png";

import paceCentreLogo from "@/assets/content/projects/pacecentre/pacecentre.svg";

import bsiLogo from "@/assets/content/projects/bsi/bsi-logo.svg";

import dezeenLogo from "@/assets/content/projects/dezeen/dezeen.svg";

import busterAndPunchLogo from "@/assets/content/projects/busterandpunch/busterandpunch.svg";


// Project markdown content
import bsiGroup from "@/content/projects/bsigroup.md?raw";
import dezeen from "@/content/projects/dezeen.md?raw";
import busterAndPunch from "@/content/projects/busterandpunch.md?raw";
import aailaFoods from "@/content/projects/aailafoods.md?raw";
import hassanNur from "@/content/projects/hassannur.md?raw";
import paceCentre from "@/content/projects/pacecentre.md?raw";

// Blog markdown content
import contentWordpressNextjs from "@/content/blog/wordpress-nextjs.md?raw";

export interface Project {
  slug: string;
  title: string;
  synopsis: string;
  thumbnail: string;
  tags: string[];
  content: string;
  bg: string;
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
    slug: "hassan-nur",
    title: "Hassan Nur",
    synopsis: "A look at the portfolio website I built solo for London-based 3D artist Hassan Nur, using React.js and Sanity.io to deliver a fast, media-rich showcase of his work.",
    thumbnail: hassanNurLogo,
    tags: ["React", "Sanity.io", "JavaScript"],
    content: hassanNur,
    bg: "bg-slate-100",
  },
  {
    slug: "bsi-group",
    title: "BSI Group",
    synopsis: "Redesign and rebuild of the BSI website, building components integrated into a bespoke CMS with a focus on accessibility and lean JavaScript",
    thumbnail: bsiLogo,
    tags: ["HTML", "JavaScript", "CSS"],
    content: bsiGroup,
    bg: "bg-slate-100",
  },
  {
    slug: "dezeen",
    title: "Dezeen",
    synopsis: "A leading architecture and design publication commissioned a ground-up website rebuild",
    thumbnail: dezeenLogo,
    tags: ["Wordpress", "PHP", "JavaScript"],
    content: dezeen,
    bg: "bg-slate-100",
  },
  {
    slug: "buster-and-punch",
    title: "Buster and Punch",
    synopsis: "A look at the Buster + Punch website refresh project, covering the brand's background and my role in developing the blog's front-end and back-end within a WordPress and WooCommerce stack.",
    thumbnail: busterAndPunchLogo,
    tags: ["Wordpress", "WooCommerce", "JavaScript"],
    content: busterAndPunch,
    bg: "bg-slate-700",
  },
  {
    slug: "aaila-foods",
    title: "Aaila Foods",
    synopsis: "A look at the Aaila Foods website refresh project, covering the brand's background and my role in developing the blog's front-end and back-end within a WordPress and WooCommerce stack.",
    thumbnail: aailaFoodsLogo,
    tags: ["Wordpress", "JavaScript"],
    content: aailaFoods,
    bg: "bg-slate-100",
  },
  {
    slug: "pace-centre",
    title: "Pace Centre",
    synopsis: "A full redesign and rebuild of the website for The Pace Centre, a Buckinghamshire charity supporting children with neurodisabilities,",
    thumbnail: paceCentreLogo,
    tags: ["Wordpress", "JavaScript"],
    content: paceCentre,
    bg: "bg-slate-100",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "wordpress-nextjs",
    title: "WordPress + Next.js: How I Build Websites That Are Fast, Flexible, and Easy for You to Manage",
    synopsis: "How WordPress and Next.js work together to give your business a faster, better-looking website — without the headaches.",
    thumbnail: hassanNurLogo,
    date: "2025-12-01",
    readTime: "8 min",
    content: contentWordpressNextjs,
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

