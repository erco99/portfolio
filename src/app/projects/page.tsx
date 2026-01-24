import Link from "next/link";
import projects from "@/content/projects/projects.json";

type Project = {
  title: string;
  description: string;
  github: string;
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="grid grid-cols-1">
        {projects.map((project: Project, index: number) => (
          <div
            key={index}
            className="relative p-4 border-b border-neutral-200 flex flex-col h-[180px]"
          >
            <h4 className="text-base font-semibold mb-2">
              {project.title}
            </h4>

            <p className="text-sm text-neutral-800 dark:text-neutral-300 mb-4">
              {project.description}
            </p>

            <Link
              href={project.github}
              target="_blank"
              className="absolute bottom-0 left-0"
            >
              <span className="block text-sm font-medium px-3 py-1 border-t border-r border-neutral-300 text-neutral-500 hover:bg-neutral-900 hover:text-white transition-colors">
                Check on GitHub
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}