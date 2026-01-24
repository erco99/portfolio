"use client";

type Props = {
  mdxpost: React.ReactNode;
  toc: React.ReactNode;
};

export default function BlogPostWithAnchoredTOC({ mdxpost, toc }: Props) {
  return (
    <div className="relative flex justify-center">
      <article className="prose dark:prose-invert max-w-3xl">
        {mdxpost}
      </article>

      <aside
        className="hidden xl:block fixed top-1/2 -translate-y-1/2 w-64"
        style={{
          left: `calc(50% + 384px + 250px)`,
        }}
      >
        <div className="bg-white dark:bg-neutral-900 border border-gray-300 border-neutral-300 shadow-lg p-4 max-h-[50vh] overflow-y-auto">
          {toc}
        </div>
      </aside>
    </div>
  );
}
