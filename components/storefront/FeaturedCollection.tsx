import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

type Props = {
  username: string;
  collectionId: number;
  title: string;
  description: string;
  productCount: number;
  lastUpdated?: string;
};

export default function FeaturedCollection({
  username,
  collectionId,
  title,
  description,
  productCount,
  lastUpdated = "Recently Updated",
}: Props) {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-r
      from-violet-600
      via-purple-600
      to-fuchsia-600
      px-7
      py-4
      shadow-md
      shadow-violet-200/30
      "
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 h-20 w-20 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 h-12 w-12 rounded-full bg-white/5 translate-y-1/2 pointer-events-none" />

      <div className="relative flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="max-w-2xl">
          <span
            className="
            inline-flex
            items-center
            gap-1.5
            rounded-full
            bg-white/20
            px-3
            py-1
            text-[11px]
            font-semibold
            text-white
            "
          >
            <Star size={10} fill="white" />
            Creator Spotlight
          </span>

          <h2
            className="
            mt-1.5
            text-xl
            font-bold
            tracking-tight
            text-white
            "
          >
            {title}
          </h2>

          <p
            className="
            mt-1.5
            max-w-xl
            text-[13px]
            leading-5
            text-violet-100
            "
          >
            {description}
          </p>

          <div
            className="
            mt-2
            flex
            flex-wrap
            items-center
            gap-3
            text-[11px]
            text-violet-200
            "
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-violet-300" />
              {productCount} Creator Picks
            </span>

            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-violet-300" />
              {lastUpdated}
            </span>

            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-violet-300" />
              Personally Recommended
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex-shrink-0">
          <Link
            href={`/store/${username}/collections/${collectionId}`}
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white
            px-4
            py-2
            text-sm
            font-semibold
            text-violet-700
            transition-all
            duration-300
            hover:scale-105
            hover:bg-violet-50
            "
          >
            Explore Picks
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}