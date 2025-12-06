"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { SlashIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export function AddressBar() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className="text-sm font-mono text-gray-500">
      <BreadcrumbList className="flex items-center">
        <BreadcrumbItem>
          <Link href="/"  className="px-4 py-2 text-sm hover:underline transition"
          >
            HOME
          </Link>
        </BreadcrumbItem>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          return (
          <Fragment key={routeTo}>
              <BreadcrumbSeparator>
                <SlashIcon className="w-3 h-3 mx-1 text-neutral-500 dark:text-neutral-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <Link href={routeTo} className="px-4 py-2 text-sm hover:underline transition dark:border-neutral-700">
                  {name.toUpperCase()}
                </Link>
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
