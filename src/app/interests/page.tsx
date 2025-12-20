import Waf from "@/content/interests/interest_waf.mdx"
import Photography from "@/content/interests/interest_photography.mdx"

export default function InterestsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="border-r p-6 border-neutral-300">
        <Photography/>
      </div>

      {/* Interesse piccolo 2 */}
      <div className="rounded-xl border p-6">
 
      </div>

      {/* Interesse grande */}
      <div className="border-t border-neutral-300 p-6 md:col-span-2">
        <Waf/>
      </div>

    </div>
  );
}
