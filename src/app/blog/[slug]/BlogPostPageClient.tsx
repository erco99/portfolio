"use client";

type Props = {
  mdxpost: React.ReactNode;
  toc: React.ReactNode;
};

export default function BlogPostWithAnchoredTOC({ mdxpost, toc }: Props) {
  return (
    <div className="relative flex justify-center">
      <aside className="hidden xl:block fixed right-8 top-32 w-64">
        {toc}
      </aside>
      <article className="prose dark:prose-invert max-w-3xl">
        {mdxpost}
      </article>
    </div>
  );
}
