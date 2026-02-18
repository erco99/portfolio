"use client";

import FloatingTOC from "./FloatingTOC";
import AnchoredTOC from "./AnchoredTOC";
import { useMediaQuery } from "../../../lib/useMediaQuery";

type Props = {
  mdxpost: React.ReactNode;
  toc: React.ReactNode;
};

export default function BlogPostWithAnchoredTOC({ mdxpost, toc }: Props) {
  const isNarrow = useMediaQuery("(max-width: 1749px)");

  return (
    <div className="relative flex justify-center">
      <article className="prose dark:prose-invert w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
        {mdxpost}
      </article>

      {isNarrow ? (
        <FloatingTOC toc={toc} />
      ) : (
        <AnchoredTOC toc={toc} />
      )}
    </div>
  );
}
