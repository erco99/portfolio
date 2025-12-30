import type { MDXComponents } from "mdx/types";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="text-3xl font-bold mt-10 mb-6 tracking-tight"
        {...props}
      >
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => {
      const text = String(children);
      const id = slugify(text);

      return (
        <h2
          id={id}
          className="text-2xl font-semibold mt-8 mb-4 tracking-tight scroll-mt-24"
          {...props}
        >
          {children}
        </h2>
      );
    },

    h3: ({ children, ...props }) => {
      const text = String(children);
      const id = slugify(text);

      return (
        <h3
          id={id}
          className="text-xl font-semibold mt-6 mb-3 scroll-mt-24"
          {...props}
        >
          {children}
        </h3>
      );
    },
     
    h4: ({ children, ...props }) => (
      <h4
        className="text-lg font-medium mt-4 mb-2"
        {...props}
      >
        {children}
      </h4>
    ),

    p: ({ children, ...props }) => (
      <p className="leading-7 text-neutral-800 dark:text-neutral-300 mb-4" {...props}>
        {children}
      </p>
    ),

    a: ({ children, ...props }) => (
      <a
        className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:opacity-80"
        {...props}
      >
        {children}
      </a>
    ),

    ul: ({ children, ...props }) => (
      <ul className="list-disc text-neutral-800 dark:text-neutral-300 pl-6 space-y-1 mb-4" {...props}>
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol className="list-decimal pl-6 space-y-1 mb-4" {...props}>
        {children}
      </ol>
    ),

    li: ({ children, ...props }) => (
      <li className="leading-6" {...props}>
        {children}
      </li>
    ),

    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 italic text-neutral-700 dark:text-neutral-300 my-4"
        {...props}
      >
        {children}
      </blockquote>
    ),

    code: ({ children, ...props }) => (
      <code
        className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    ),

    pre: ({ children, ...props }) => (
      <pre
        className="p-4 rounded bg-neutral-900 text-neutral-100 overflow-x-auto text-sm mb-4"
        {...props}
      >
        {children}
      </pre>
    ),

    img: ({ ...props }) => (
      <img className="rounded-lg my-6 border border-neutral-300" {...props} />
    ),


table: (props) => (
  <div className="overflow-x-auto my-6">
    <table
      className="w-full border border-gray-300 border-collapse text-sm rounded-lg"
      {...props}
    />
  </div>
),

    thead: (props) => (
      <thead
        className="bg-gray-100 text-gray-700"
        {...props}
      />
    ),

    tbody: (props) => (
      <tbody
        className="divide-y divide-gray-200"
        {...props}
      />
    ),

    tr: (props) => (
      <tr
        {...props}
      />
    ),

    th: (props) => (
      <th
        className="px-4 py-3 text-left font-semibold border border-gray-300"
        {...props}
      />
    ),

    td: (props) => (
      <td
        className="px-4 py-3 border border-gray-300 text-neutral-800 dark:text-neutral-300"
        {...props}
      />
    ),

    ...components,
  };
}
