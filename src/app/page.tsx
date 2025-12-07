import Example from '@/content/pages/prova.mdx'

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <div className="p-4 border-r border-neutral-200 dark:border-neutral-800">
        <Example />
      </div>
      <div className="p-4">
        Parte 2
      </div>
    </div>
  );
}
