type TOCPanelProps = {
  toc: React.ReactNode;
  headerRight?: React.ReactNode;
};

export function TOCPanel({ toc, headerRight }: TOCPanelProps) {
  return (
    <div
      className="
        w-64
        bg-white dark:bg-neutral-900
        border border-neutral-300
        shadow-lg
        p-4
        max-h-[50vh]
        overflow-y-auto
      "
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold">
          Table Of Contents
        </span>
        {headerRight}
      </div>

      <div className="break-words">
        {toc}
      </div>
    </div>
  );
}
