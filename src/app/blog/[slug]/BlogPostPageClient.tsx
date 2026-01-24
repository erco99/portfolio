"use client";

import { useState } from "react";

type Props = {
  mdxpost: React.ReactNode;
  toc: React.ReactNode;
};

export default function BlogPostWithAnchoredTOC({ mdxpost, toc }: Props) {
  const [side, setSide] = useState<"left" | "right">("right");

  return (
    <div className="relative flex justify-center">
      <article className="prose dark:prose-invert max-w-3xl">
        {mdxpost}
      </article>

      <aside
        className="hidden xl:block fixed top-1/2 -translate-y-1/2 w-64 transition-all duration-300"
        style={
          side === "right"
            ? { left: `calc(50% + 384px + 250px)` }
            : { right: `calc(50% + 384px + 250px)` }
        }
      >
        <div className="bg-white dark:bg-neutral-900 border border-neutral-300 shadow-lg p-4 max-h-[50vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold">
              Table Of Contents
            </span>
            <button
              onClick={() =>
                setSide((s) => (s === "right" ? "left" : "right"))
              }
              className="flex items-center justify-center
                        text-xl font-semibold
                        w-8 h-8
                        rounded border border-neutral-300
                        hover:bg-neutral-100 dark:hover:bg-neutral-800
                        transition-transform hover:scale-105
                        cursor-pointer"
              title={side === "right" ? "Move to the left" : "Move to the right"}
            >
              {side === "right" ? "←" : "→"}
            </button>
          </div>
          {toc}
        </div>
      </aside>
    </div>
  );
}
