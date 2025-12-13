import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { AddressBar } from "@/components/address-bar";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export function Header() {
  return (
    <header className="mb-3 md:mb-6">
			<nav
        className="
          flex overflow-hidden 
          border border-neutral-300
          bg-neutral-100 dark:bg-neutral-900
          text-neutral-800
        "
        style={{ borderBottomWidth: "0px" }}
      >
      <AddressBar/>
			</nav>
      <nav
        className="
          flex overflow-hidden 
          border border-neutral-300 
          bg-neutral-100 dark:bg-neutral-900
          text-neutral-800 dark:text-erco-color 
          font-semibold
        "
      >
        <Link
          href="/projects"
          className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition border-r border-neutral-200"
        >
          PROJECTS
        </Link>

        <Link
          href="/blog"
          className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition border-r border-neutral-200"
        >
          BLOG
        </Link>

        <Link
          href="/interests"
          className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition border-r border-neutral-200"
        >
          INTERESTS
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <a 
            href="https://github.com/erco99"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="text-black dark:text-white hover:opacity-70 transition" />
          </a>
          <a 
            href="https://www.linkedin.com/in/francescoercolani/"
            target="_blank"
            rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <rect width="24" height="24" rx="4" fill="#0A66C2" />
                  <path
                      fill="#ffffff"
                      d="M9 19H6V10h3v9Zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76S6.53 5.19 7.5 5.19c.96 0 1.75.79 1.75 1.76 0 .97-.79 1.76-1.75 1.76ZM20 19h-3v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V19h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.63V19Z"
                  />
              </svg>
          </a>
          <a 
            href="mailto:erco99@live.it"
            className="hover:opacity-80 transition"
          >
            <FaEnvelope className="text-red-500 text-xl" />
          </a>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
