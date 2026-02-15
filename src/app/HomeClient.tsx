"use client";

import Introduction from "@/content/pages/introduction.mdx";
import { type PostFrontmatter } from "@/lib/server/posts";
import Link from "next/link";

type Props = {
  posts: PostFrontmatter[];
  allCount: number;
};

export default function Home({ posts }: Props) {
  const N = 5;

  const recentPosts = [...posts]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, N);

  const isFull = recentPosts.length === N;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="px-4 border-b md:border-b-0 md:border-r border-neutral-200">
        <Introduction />
      </div>

      <div className="flex flex-col h-full">
        <h2 className="px-4 pt-8 pb-4 text-2xl font-semibold tracking-tight border-neutral-200 shrink-0">
          Recent Posts:
        </h2>

        <div
          className="grid flex-1 min-h-0"
          style={{
            gridTemplateRows: `repeat(${N}, 1fr)`
          }}
        >
          {recentPosts.map((post, index) => {
            const isLast = index === recentPosts.length - 1;
            const addBorder = !isFull || !isLast ? true : false; 

            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div
                  className={`p-4 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:shadow-md flex flex-col h-full ${
                    addBorder ? "border-b border-neutral-200" : ""
                  }`}
                >
                  <h4 className="text-base font-semibold mb-2">
                    {post.title}
                  </h4>

                  <p className="text-sm text-neutral-800 dark:text-neutral-300 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <span className="text-xs font-medium mt-auto">
                    {post.date} • {post.tags.join(", ")}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
