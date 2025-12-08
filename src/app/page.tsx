import Introduction from '@/content/pages/introduction.mdx'

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="p-4 border-r border-neutral-200">
        <Introduction />
      </div>
      <div className="p-4">
        Parte 2
      </div>
    </div>
  );
}
