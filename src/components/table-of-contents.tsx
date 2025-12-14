type TOCProps = {
  headings: {
    level: number;
    text: string;
    id: string;
  }[];
};

export function TableOfContents({ headings }: TOCProps) {
  return (
    <nav className="text-sm sticky top-24">
      <p className="font-semibold mb-2">Table Of Contents</p>
      <ul className="space-y-1">
        {headings.map(h => (
          <li
            key={h.id}
            className={h.level === 3 ? "ml-4" : ""}
          >
            <a
              href={`#${h.id}`}
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
