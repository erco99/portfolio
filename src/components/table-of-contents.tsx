"use client"

import { useState } from "react";

type Heading = {
  level: number;
  text: string;
  id: string;
};

type TOCProps = {
  headings: Heading[];
};

function buildHierarchy(headings: Heading[]) {
  const toc: { heading: Heading; children: Heading[] }[] = [];
  let current: { heading: Heading; children: Heading[] } | null = null;

  headings.forEach(h => {
    if (h.level === 2) {
      current = { heading: h, children: [] };
      toc.push(current);
    } else if (h.level === 3 && current) {
      current.children.push(h);
    }
  });

  return toc;
}

export function TableOfContents({ headings }: TOCProps) {
  const hierarchy = buildHierarchy(headings);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <nav className="text-sm sticky top-24">
      <p className="font-semibold mb-2">Table Of Contents</p>
      <ul className="space-y-1">
        {hierarchy.map(({ heading, children }) => (
          <li key={heading.id}>
            <div className="flex items-center">
              {children.length > 0 && (
                <button
                  onClick={() => toggleSection(heading.id)}
                  className="mr-2 text-base text-neutral-400 hover:text-neutral-600"
                >
                  {openSections[heading.id] ? "−" : "+"}
                </button>
              )}
              <a
                href={`#${heading.id}`}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
              >
                {heading.text}
              </a>
            </div>

            {children.length > 0 && openSections[heading.id] && (
              <ul className="ml-6 mt-1 space-y-1">
                {children.map(sub => (
                  <li key={sub.id}>
                    <a
                      href={`#${sub.id}`}
                      className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                    >
                      {sub.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
