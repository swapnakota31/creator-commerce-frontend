import Link from "next/link";
import {
  Home,
  Laptop,
  GraduationCap,
  BookOpen,
  Headphones,
  Plane,
  Camera,
  Heart,
  Briefcase,
  ArrowRight,
} from "lucide-react";

type Props = {
  id: number;
  title: string;
  products: number;
  description: string;
  username: string;
};

export default function CollectionCard({
  id,
  title,
  products,
  description,
  username,
}: Props) {
  const getIcon = () => {
    switch (title) {
      case "Daily Setup":
        return <Home size={16} />;
      case "Coding Desk":
        return <Laptop size={16} />;
      case "College Essentials":
        return <GraduationCap size={16} />;
      case "Study Toolkit":
        return <BookOpen size={16} />;
      case "Focus Gear":
        return <Headphones size={16} />;
      case "Travel Essentials":
        return <Plane size={16} />;
      case "Creator Tools":
        return <Camera size={16} />;
      case "Creator Favorites":
        return <Heart size={16} />;
      case "Work From Anywhere":
        return <Briefcase size={16} />;
      default:
        return <Home size={16} />;
    }
  };

  return (
    <Link
      href={`/store/${username}/collections/${id}`}
      className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-4
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:border-violet-200
      hover:shadow-[0_8px_24px_rgba(124,58,237,0.10)]
      "
    >
      {/* Hover glow */}
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

      <div className="relative">

        {/* Icon + count row */}
        <div className="flex items-center justify-between">
          <div
            className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            bg-violet-50
            text-violet-600
            transition-colors
            duration-300
            group-hover:bg-violet-100
            "
          >
            {getIcon()}
          </div>

          <span
            className="
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
            {products}
          </span>
        </div>

        {/* Title + description */}
        <div className="mt-3">
          <h3
            className="
            text-base
            font-semibold
            leading-snug
            text-slate-900
            "
          >
            {title}
          </h3>

          <p
            className="
            mt-1
            text-sm
            leading-5
            text-slate-500
            line-clamp-2
            "
          >
            {description}
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-4 flex items-center justify-between">
          <span
            className="
            text-xs
            font-medium
            text-slate-400
            "
          >
            {products} creator picks
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
            Explore
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