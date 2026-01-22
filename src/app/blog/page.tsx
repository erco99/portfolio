import {
  getAllPosts,
  getCategoryCounts,
  getAllPostsCount,
  type PostFrontmatter,
} from "@/lib/server/posts";
import BlogClient from "./BlogClient";

export default function BlogPage() {
  const posts: PostFrontmatter[] = getAllPosts();
  const categoriesCount = getCategoryCounts();
  const allCount = getAllPostsCount();

  return (
    <BlogClient
      posts={posts}
      categoriesCount={categoriesCount}
      allCount={allCount}
    />
  );
}
