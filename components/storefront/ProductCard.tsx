import Link from "next/link";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

type ProductCardProps = {
  id: number;
  title: string;
  image: string;
  tag: string;
  creatorNote: string;
  affiliatePlatform: string;
  affiliateUrl: string;
  isNew?: boolean;
  fromCollection?: string;
  username: string;
};

export default function ProductCard({
  id,
  title,
  image,
  tag,
  creatorNote,
  affiliatePlatform,
  affiliateUrl,
  isNew,
  fromCollection,
  username,
}: ProductCardProps) {
  const href = fromCollection
    ? `/store/${username}/products/${id}?from=collection&collection=${fromCollection}`
    : `/store/${username}/products/${id}`;

  return (
    <Link
      href={href}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-violet-200
        hover:shadow-[0_8px_24px_rgba(124,58,237,0.10)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-br
          from-violet-50/60
          via-transparent
          to-fuchsia-50/40
        "
      />

      <div className="relative p-4">
        <div className="flex gap-3">

          {/* Product Image */}
          <div className="relative shrink-0">
            <img
              src={image}
              alt={title}
              className="
                h-16
                w-16
                rounded-xl
                object-cover
                shadow-sm
                ring-1
                ring-slate-100
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            {isNew && (
              <span
                className="
                  absolute
                  -top-1
                  -left-1
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-500
                  px-1.5
                  py-0.5
                  text-[9px]
                  font-bold
                  text-white
                  shadow-sm
                "
              >
                <Zap size={8} fill="white" />
                NEW
              </span>
            )}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-violet-100
                bg-violet-50
                px-2.5
                py-0.5
                text-xs
                font-bold
                text-violet-600
              "
            >
              {tag}
            </span>

            <h3
              className="
                mt-2
                line-clamp-1
                text-base
                font-semibold
                leading-snug
                text-slate-900
              "
            >
              {title}
            </h3>

            <div
              className="
                mt-2
                flex
                items-center
                gap-1
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-violet-600
              "
            >
              <Sparkles size={12} />
              <span>Why I Recommend It</span>
            </div>

            <p
              className="
                mt-1
                line-clamp-2
                text-sm
                leading-5
                text-slate-500
              "
            >
              {creatorNote}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <span
            className="
              text-xs
              font-medium
              text-slate-400
            "
          >
            via {affiliatePlatform}
          </span>

          <div
            className="
              flex
              items-center
              gap-1
              text-sm
              font-semibold
              text-violet-600
            "
          >
            View Pick
            <ArrowRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </div>
        </div>
      </div>
    </Link>
  );
}