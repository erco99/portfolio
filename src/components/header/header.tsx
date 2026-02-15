"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { AddressBar } from "@/components/address-bar";
import LinksPanel from "@/components/header/links-panel";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

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
        <AddressBar />
      </nav>

      <nav
        className="
          border border-neutral-300
          bg-neutral-100 dark:bg-neutral-900
          text-neutral-800 dark:text-erco-color 
          font-semibold
        "
      >
        <div className="flex items-center px-4 py-2 md:px-0 md:py-0">
          <button
            className="md:hidden mr-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          <div className="hidden md:flex">
            <Link
              href="/projects"
              className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 border-r border-neutral-200"
            >
              PROJECTS
            </Link>

            <Link
              href="/blog"
              className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 border-r border-neutral-200"
            >
              BLOG
            </Link>

            <Link
              href="/interests"
              className="px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 border-r border-neutral-200"
            >
              INTERESTS
            </Link>
          </div>

          <LinksPanel className="ml-auto hidden md:flex" />
        </div>

        <div
          className={`
            md:hidden
            grid
            transition-all duration-300 ease-in-out
            ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden flex flex-col">
            <Link
              href="/projects"
              onClick={closeMenu}
              className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              PROJECTS
            </Link>

            <Link
              href="/blog"
              onClick={closeMenu}
              className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              BLOG
            </Link>

            <Link
              href="/interests"
              onClick={closeMenu}
              className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              INTERESTS
            </Link>

            <div className="border-t border-neutral-200 dark:border-neutral-700 px-4 py-2">
              <LinksPanel className="gap-5" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
