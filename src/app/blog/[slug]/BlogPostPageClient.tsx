"use client";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  mdxpost: React.ReactNode;
  toc: React.ReactNode
};

export default function BlogPostWithAnchoredTOC({ mdxpost, toc }: Props) {
  const tocRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const distanceFromTop = 50;
  
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!placeholderRef.current) return;
      const top = placeholderRef.current.getBoundingClientRect().top;
      setIsFixed(top <= distanceFromTop);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8 h-full">
      <article className="p-4 prose dark:prose-invert">{mdxpost}</article>
      <aside className="hidden lg:block border-l border-neutral-300 ">
        <div
          ref={placeholderRef}
          className="w-52"
          style={{ height: tocRef.current?.offsetHeight }}
        >
          <div
            ref={tocRef}
            className={`p-4 bg-white dark:bg-neutral-900 transition-all ${isFixed ? "fixed top-[50px] w-52 z-50" : "relative"
              }`}
          >
            {toc}
          </div>
        </div>
      </aside>
    </div>
  );
}
