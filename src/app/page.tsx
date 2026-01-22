import {
  getAllPosts,
  getAllPostsCount,
  type PostFrontmatter,
} from "@/lib/server/posts";
import HomeClient from "./HomeClient";

export default function Home() {
  const posts: PostFrontmatter[] = getAllPosts();
  const allCount = getAllPostsCount();

  return (
    <HomeClient
      posts={posts}
      allCount={allCount}
    />
  );
}