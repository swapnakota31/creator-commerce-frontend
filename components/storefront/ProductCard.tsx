import { Zap } from "lucide-react";

type ProductCardProps = {
  title: string;
  image: string;
  tag: string;
  creatorNote: string;
  affiliatePlatform: string;
  affiliateUrl: string;
  isNew?: boolean;
};

export default function ProductCard({
  title,
  image,
  tag,
  creatorNote,
  affiliatePlatform,
  affiliateUrl,
  isNew,
}: ProductCardProps) {
  return (
    <article
      className="
      group
      flex
      gap-4
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-3
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-violet-200
      hover:shadow-[0_12px_30px_rgba(124,58,237,0.12)]
      "
    >
      <div
        className="
        relative
        h-24
        w-24
        flex-shrink-0
        overflow-hidden
        rounded-xl
        "
      >
        <img
          src={image}
          alt={title}
          className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
          "
        />
        {isNew && (
          <span
            className="
            absolute
            top-1
            left-1
            inline-flex
            items-center
            gap-0.5
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-500
            px-1.5
            py-0.5
            text-[9px]
            font-bold
            text-white
            "
          >
            <Zap size={8} fill="white" />
            NEW
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between min-w-0">
        <div>
          <span
            className="
            inline-flex
            rounded-full
            bg-slate-100
            px-2.5
            py-1
            text-xs
            font-medium
            text-slate-600
            "
          >
            {tag}
          </span>

          <h3
            className="
            mt-1.5
            text-base
            font-semibold
            text-slate-900
            line-clamp-1
            "
          >
            {title}
          </h3>

          <p
            className="
            mt-1
            text-sm
            leading-relaxed
            text-slate-500
            line-clamp-2
            "
          >
            {creatorNote}
          </p>
        </div>

        <div
          className="
          mt-2.5
          flex
          items-center
          justify-between
          "
        >
          <span className="text-xs font-semibold text-violet-600">
            via {affiliatePlatform}
          </span>

          <a
            href={affiliateUrl}
            className="
            rounded-full
            bg-slate-100
            px-4
            py-2
            text-sm
            font-medium
            text-slate-700
            transition-all
            duration-300
            group-hover:bg-violet-600
            group-hover:text-white
            "
          >
            View →
          </a>
        </div>
      </div>
    </article>
  );
}