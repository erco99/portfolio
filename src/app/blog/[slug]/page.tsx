import { getPostBySlug } from "@/lib/server/posts";
import { TableOfContents } from "@/components/table-of-contents";
import BlogPostPageClient from "./BlogPostPageClient";
import MDXContent from "../../../components/MDXContent";

type Props = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { content, headings } = getPostBySlug(slug);

  return (
    <BlogPostPageClient
      mdxpost={<MDXContent content={content} />}
      toc={<TableOfContents headings={headings} />}
    />
  );
}
