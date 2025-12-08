import * as React from "react";
import { Header } from "@/components/header";

interface PageContentProps {
  children: React.ReactNode;
}

export function PageContent({ children }: PageContentProps) {
  return (
    <div className="min-h-screen flex justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <div className="w-full max-w-6xl bg-white dark:bg-neutral-950 border border-neutral-200 shadow overflow-hidden flex flex-col">
        <div className="p-6 sm:p-8 flex flex-col flex-1">
          <Header />
          <div className="flex-1 overflow-auto border border-neutral-300 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-erco-color">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
