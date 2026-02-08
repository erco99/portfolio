"use client";

import { useState } from "react";
import { TOCPanel } from "@/components/ui/toc-panel";

type AnchoredTOCProps = {
  toc: React.ReactNode;
};

export default function AnchoredTOC({ toc }: AnchoredTOCProps) {
  const [side, setSide] = useState<"left" | "right">("right");

  return (
		<aside
			className="hidden xl:block fixed top-1/2 -translate-y-1/2 transition-all duration-300"
			style={
				side === "right"
					? { left: `calc(50% + 384px + 250px)` }
					: { right: `calc(50% + 384px + 250px)` }
			}
		>
			<TOCPanel
				toc={toc}
				headerRight={
					<button
						onClick={() =>
							setSide((s) => (s === "right" ? "left" : "right"))
						}
						className="w-8 h-8 rounded border border-neutral-300
											hover:bg-neutral-100 dark:hover:bg-neutral-800"
					>
						{side === "right" ? "←" : "→"}
					</button>
				}
			/>
		</aside>
  );
}
