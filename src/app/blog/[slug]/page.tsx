import { getPostBySlug } from "@/lib/server/utils";
import BlogPostPageClient from "./BlogPostPageClient";
import MDXContent from "./MDXContent";
import { TableOfContents } from "@/components/table-of-contents";

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
