"use client";

import { type PostFrontmatter } from "@/lib/server/posts";
import Link from "next/link";
import { CATEGORIES } from "@/config/categories";
import { useState, useEffect } from "react";

type Props = {
  posts: PostFrontmatter[];
  categoriesCount: Record<string, number>;
  allCount: number;
};

const ITEMS_PER_PAGE = 10;

export default function BlogClient({
  posts,
  categoriesCount,
  allCount,
}: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [activeCategory]);

  const filteredPosts = activeCategory
    ? posts.filter(p => p.category === activeCategory)
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const visiblePosts = filteredPosts.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col h-full">
      {/* Categories */}
      <nav className="flex border-b border-neutral-300 bg-neutral-100 dark:bg-neutral-900 text-sm">
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
      </nav>

      {/* Posts */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2"
        style={{
          gridTemplateRows: "repeat(5, 1fr)"
        }}
      >
        {visiblePosts.map((post, index) => {
          const isFullPage = visiblePosts.length === ITEMS_PER_PAGE;
          const isLastTwo = index >= visiblePosts.length - 2;
          const hideBorder = isFullPage && isLastTwo;

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="md:[&:nth-child(odd)]:border-r border-neutral-200"
            >
              <div
                className={`h-full p-4 flex flex-col hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors
                  ${!hideBorder ? "border-b border-neutral-200" : ""}
                `}
              >
                <h4 className="text-base font-semibold mb-2">{post.title}</h4>
                <p className="text-sm text-neutral-800 dark:text-neutral-300 line-clamp-3">
                  {post.description}
                </p>
                <span className="text-xs text-neutral-500 mt-auto">
                  {post.date} • {post.tags?.join(", ")}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center text-sm border-t border-neutral-300">
          <button
            disabled={page === 0}
            onClick={() => setPage(p => p - 1)}
            className={`
              px-4 py-1 border-r border-neutral-300 text-neutral-700 dark:text-neutral-300 transition-colors h-10
              ${page === 0 
                ? "opacity-40 cursor-default bg-transparent"
                : "cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800"} // bottone attivo
            `}
          >
            ← Prev
          </button>

          <span className="text-neutral-500">
            {page + 1} / {totalPages}
          </span>

          <button
            disabled={page === totalPages - 1}
            onClick={() => setPage(p => p + 1)}
            className={`
              px-4 py-1 border-l border-neutral-300 text-neutral-700 dark:text-neutral-300 transition-colors h-10
              ${page === totalPages - 1 
                ? "opacity-40 cursor-default bg-transparent" 
                : "cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800"}
            `}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
