import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
    image: data.image,
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

export type PostFrontmatter = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
};
