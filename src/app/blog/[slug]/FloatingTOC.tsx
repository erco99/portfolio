"use client";

import { useEffect, useRef, useState } from "react";
import { TOCPanel } from "@/components/ui/toc-panel";

type FloatingTOCProps = {
  toc: React.ReactNode;
};

export default function FloatingTOC({ toc }: FloatingTOCProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 24, y: 120 });

  const dragging = useRef(false);
  const moved = useRef(false);
  const start = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });

  const DRAG_THRESHOLD = 5;

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    moved.current = false;

    start.current = { x: e.clientX, y: e.clientY };
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;

      const dx = Math.abs(e.clientX - start.current.x);
      const dy = Math.abs(e.clientY - start.current.y);

      if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
        moved.current = true;
        setPos({
          x: e.clientX - offset.current.x,
          y: e.clientY - offset.current.y,
        });
      }
    };

    const onMouseUp = () => {
      if (!dragging.current) return;

      dragging.current = false;

      if (!moved.current) {
        setOpen((o) => !o);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [pos]);
  return (
    <div
      className="fixed z-50 select-none"
      style={{ left: pos.x, top: pos.y }}
    >
      <div
        onMouseDown={onMouseDown}
        className="
          w-14 h-14 rounded-full
          bg-gradient-to-br from-neutral-600 to-neutral-900
          text-white shadow-2xl
          flex items-center justify-center
          cursor-grab active:cursor-grabbing
          hover:scale-105 active:scale-95
          transition-transform
        "
        title="Table of contents"
      >
        TOC
      </div>

			{open && (
				<div className="mt-3">
					<TOCPanel toc={toc} />
				</div>
			)}
    </div>
  );
}
