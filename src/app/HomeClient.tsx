"use client";

import Introduction from "@/content/pages/introduction.mdx";
import { type PostFrontmatter } from "@/lib/server/posts";
import Link from "next/link";

type Props = {
  posts: PostFrontmatter[];
  allCount: number;
};

export default function Home({ posts }: Props) {
  const recentPosts = [...posts]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 4);

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="px-4 border-r border-neutral-200">
        <Introduction />
      </div>

      <div>
        <h2 className="px-4 pt-8 pb-4 text-2xl font-semibold tracking-tight scroll-mt-24 border-b border-neutral-200">
          Recent Posts
        </h2>

        <div className="grid grid-cols-1">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border-neutral-200"
            >
              <div className="p-4 border-b border-neutral-200 transition-transform hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:shadow-md flex flex-col h-[180px]">
                <h4 className="text-base font-semibold mb-2">
                  {post.title}
                </h4>

                <p className="text-sm text-neutral-800 dark:text-neutral-300 mb-4">
                  {post.description}
                </p>

                <span className="text-xs font-medium mt-auto">
                  {post.date} • {post.tags.join(", ")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
