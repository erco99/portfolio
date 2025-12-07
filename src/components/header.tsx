import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { AddressBar } from "@/components/address-bar";

export function Header() {
  return (
    <header className="mb-3 md:mb-6">
			<nav
        className="
          flex overflow-hidden 
          border border-neutral-300 dark:border-neutral-700 
          bg-neutral-100 dark:bg-neutral-900
          text-neutral-800 dark:text-neutral-200
        "
        style={{ borderBottomWidth: "0px" }}
      >
      <AddressBar/>
			</nav>
      <nav
        className="
          flex overflow-hidden 
          border border-neutral-300 dark:border-neutral-700 
          bg-neutral-100 dark:bg-neutral-900
          text-neutral-800 dark:text-neutral-200
        "
      >
        <Link
          href="/projects"
          className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
        >
          PROJECTS
        </Link>

        <Link
          href="/blog"
          className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition border-l border-neutral-300 dark:border-neutral-700"
        >
          BLOG
        </Link>

        <Link
          href="/interests"
          className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition border-l border-neutral-300 dark:border-neutral-700"
        >
          INTERESTS
        </Link>

        <div className="ml-auto">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
