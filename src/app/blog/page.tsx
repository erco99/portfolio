import { getAllPosts, getCategoryCounts, type PostFrontmatter } from "@/lib/server/utils";
import Link from "next/link";
import { CATEGORIES } from "@/config/categories";

export default function BlogPage() {
  const posts: PostFrontmatter[] = getAllPosts();
  const counts = getCategoryCounts();

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
          {CATEGORIES.map(cat => (
            <span
              key={cat}
              className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition border-r border-neutral-200"
            >
              {cat.toUpperCase()} ({counts[cat]})
            </span>
          ))}
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="md:[&:nth-child(odd)]:border-r border-neutral-200"
          >
            <div className="p-4 border-b border-neutral-200 transition-transform hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:shadow-md">
              <h4 className="text-base font-semibold mb-2">{post.title}</h4>
              <p className="text-sm leading-7 text-neutral-800 dark:text-neutral-300 mb-4">{post.description}</p>
              <span className="text-xs font-medium mb-2">{post.date} • {post.tags.join(", ")}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
