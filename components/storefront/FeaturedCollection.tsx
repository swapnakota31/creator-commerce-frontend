import { ArrowRight, Star } from "lucide-react";

export default function FeaturedCollection() {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-2xl
      bg-gradient-to-r
      from-violet-600
      via-purple-600
      to-fuchsia-600
      px-6
      py-5
      shadow-md
      shadow-violet-200
      "
    >
      {/* Decorative blobs — kept subtle so they don't add visual height */}
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 h-20 w-20 rounded-full bg-white/5 translate-y-1/2 pointer-events-none" />

      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white">
            <Star size={10} fill="white" />
            Featured Collection
          </span>

          <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
            My Daily Setup
          </h2>

          <p className="mt-1 text-sm leading-5 text-violet-100">
            The exact tools, gadgets and essentials I personally use every day for coding, productivity and content creation.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-violet-200">
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-violet-300" />
              12 Recommendations
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-violet-300" />
              Updated this week
            </span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-violet-700 transition-all duration-300 hover:bg-violet-50 hover:shadow-lg">
            Explore Collection
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}