import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CATEGORIES } from "@/config/categories";

const POSTS_PATH = path.join(process.cwd(), "src/content/blog");

export function getPostSlugs() {
  return fs.readdirSync(POSTS_PATH).filter((f) => f.endsWith(".mdx"));
}

export function getPostFrontmatter(slug: string): PostFrontmatter {
  const filePath = path.join(POSTS_PATH, slug);
  const file = fs.readFileSync(filePath, "utf8");

  const { data } = matter(file);

  return {
    slug: slug.replace(".mdx", ""),
    title: data.title,
    date: data.date,
    description: data.description,
    category: data.category,
    tags: data.tags
  };
}

export function getAllPosts(): PostFrontmatter[] {
  return getPostSlugs().map((slug) => getPostFrontmatter(slug));
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_PATH, slug + ".mdx");
  const source = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(source);

  return {
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getCategoryCounts() {
  const posts = getAllPosts();

  const counts: Record<string, number> = {};

  CATEGORIES.forEach(cat => {
    counts[cat] = 0;
  });

  posts.forEach(post => {
    if (counts[post.category] !== undefined) {
      counts[post.category] += 1;
    }
  });

  return counts;
}

export function getAllPostsCount(): number {
  return getPostSlugs().length;
}

export type PostFrontmatter = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[]
};
