"use client";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  mdxpost: React.ReactNode;
  toc: React.ReactNode;
};

export default function BlogPostWithAnchoredTOC({ mdxpost, toc }: Props) {
  const tocRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const distanceFromTop = 50;

  const [showTOC, setShowTOC] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  const hideTOC = () => {
    setIsHiding(true);
    setTimeout(() => {
      setShowTOC(false);
      setIsHiding(false);
    }, 300);
  };

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
    <div
      className={`
        grid gap-8 h-full
        ${showTOC ? "grid-cols-1 lg:grid-cols-[1fr_250px]" : "grid-cols-1 pl-40 pr-40"}
      `}
    >
      <div className="p-4 prose dark:prose-invert">
        {mdxpost}
      </div>

      {showTOC && (
        <div className="hidden lg:block border-l border-neutral-300 relative">
          <div
            ref={placeholderRef}
            className="w-52"
            style={{ height: tocRef.current?.offsetHeight }}
          >
            <div
              ref={tocRef}
              className={`p-4 bg-white dark:bg-neutral-900 transition-all
                ${isFixed ? "fixed top-[50px] w-52 z-50" : "relative"}
              `}
            >
              {toc}
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          if (showTOC) hideTOC();
          else setShowTOC(true);
        }}
        className={`
          fixed top-1/2 transform -translate-y-1/2 z-50 
          rounded-md bg-neutral-200 dark:bg-neutral-800
          px-3 py-1 text-lg
          hover:bg-neutral-300 dark:hover:bg-neutral-700 cursor-pointer
          right-0
        `}
      >
        {showTOC ? ">" : "<"}
      </button>
    </div>
  );
}
