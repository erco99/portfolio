"use client"

import { type PostFrontmatter } from "@/lib/server/posts";
import Link from "next/link";
import { CATEGORIES } from "@/config/categories";
import { useState } from "react";

type Props = {
  posts: PostFrontmatter[];
  categoriesCount: Record<string, number>;
  allCount: number;
};

export default function BlogClient({
  posts,
  categoriesCount,
  allCount,
}: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter(p => p.category === activeCategory)
    : posts;

  return (
    <div>
      <nav
        className="
          flex overflow-hidden 
          border-b border-neutral-300
          bg-neutral-100 dark:bg-neutral-900
          text-neutral-800 dark:text-erco-color
        "
      >
        <div className="flex text-sm">
          <span
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 cursor-pointer border-r border-neutral-300
              ${activeCategory === null
                ? "bg-neutral-300 dark:bg-neutral-700 font-semibold"
                : "hover:bg-neutral-200 dark:hover:bg-neutral-800"}
            `}
          >
            ALL POSTS ({allCount})
          </span>
        </div>
        <div className="flex text-sm">
          {CATEGORIES.map(cat => (
            <span
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 cursor-pointer border-r border-neutral-300
                ${activeCategory === cat
                  ? "bg-neutral-300 dark:bg-neutral-700 font-semibold"
                  : "hover:bg-neutral-200 dark:hover:bg-neutral-800"}
              `}
            >
              {cat.toUpperCase()} ({categoriesCount[cat]})
            </span>
          ))}
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="md:[&:nth-child(odd)]:border-r border-neutral-200"
          >
            <div className="p-4 border-b border-neutral-200 transition-transform hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:shadow-md flex flex-col h-[180px]">
              <h4 className="text-base font-semibold mb-2">{post.title}</h4>
              <p className="text-sm text-neutral-800 dark:text-neutral-300 mb-4">{post.description}</p>
              <span className="text-xs font-medium mt-auto">
                {post.date} • {post.tags.join(", ")}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
