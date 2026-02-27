"use client";

import { TOCPanel } from "@/components/ui/toc-panel";

type InPostTOCProps = {
  toc: React.ReactNode;
};

export default function InPostTOC({ toc }: InPostTOCProps) {
  return (
		<div className="mb-10 flex justify-center pt-6">
			<TOCPanel toc={toc} />
		</div>
  );
}
