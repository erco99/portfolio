import { getAllPosts, type PostFrontmatter } from "@/lib/server/utils";
import Link from "next/link";

export default function BlogPage() {
  const posts: PostFrontmatter[] = getAllPosts();

  return (
    <div>
      <h1>Blog</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="border p-4 rounded-lg">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
