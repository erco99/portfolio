"use client";

import FloatingTOC from "./FloatingTOC";
import AnchoredTOC from "./AnchoredTOC";
import InPostTOC from "./InPostTOC";
import { useMediaQuery } from "../../../lib/useMediaQuery";

type Props = {
  mdxpost: React.ReactNode;
  toc: React.ReactNode;
};

export default function BlogPostWithAnchoredTOC({ mdxpost, toc }: Props) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isMediumWidth = useMediaQuery("(max-width: 1750px)");

  return (
    <div className="relative flex justify-center">
      <article className="prose dark:prose-invert w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">

        {isMobile && <InPostTOC toc={toc} />}

        {mdxpost}
      </article>

      {!isMobile && isMediumWidth && (
        <FloatingTOC toc={toc} />
      )}

      {!isMobile && !isMediumWidth && (
        <AnchoredTOC toc={toc} />
      )}
    </div>
  );
}