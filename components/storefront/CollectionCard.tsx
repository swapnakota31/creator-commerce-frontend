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
} from "lucide-react";

type Props = {
  title: string;
  products: number;
  description: string;
};

export default function CollectionCard({
  title,
  products,
  description,
}: Props) {
  const getIcon = () => {
    switch (title) {
      case "Daily Setup":
        return <Home size={18} />;

      case "Coding Desk":
        return <Laptop size={18} />;

      case "College Essentials":
        return <GraduationCap size={18} />;

      case "Study Toolkit":
        return <BookOpen size={18} />;

      case "Focus Gear":
        return <Headphones size={18} />;

      case "Travel Essentials":
        return <Plane size={18} />;

      case "Creator Tools":
        return <Camera size={18} />;

      case "Creator Favorites":
        return <Heart size={18} />;

      case "Work From Anywhere":
        return <Briefcase size={18} />;

      default:
        return <Home size={18} />;
    }
  };

  return (
    <div
      className="
      group
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-4
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-violet-200
      hover:shadow-[0_10px_24px_rgba(124,58,237,0.10)]
      "
    >
      <div
        className="
        flex
        items-start
        justify-between
        "
      >
        <div>
          <div
            className="
            mb-2
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-violet-50
            text-violet-600
            "
          >
            {getIcon()}
          </div>

          <h3
            className="
            text-xl
            font-semibold
            text-slate-900
            "
          >
            {title}
          </h3>

          <p
            className="
            mt-1
            text-sm
            leading-6
            text-slate-500
            "
          >
            {description}
          </p>
        </div>

        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-violet-50
          text-base
          font-bold
          text-violet-600
          "
        >
          {products}
        </div>
      </div>

      <div
        className="
        mt-4
        flex
        items-center
        justify-between
        "
      >
        <span
          className="
          text-sm
          text-slate-500
          "
        >
          {products} recommendations
        </span>

        <button
          className="
          rounded-full
          bg-slate-100
          px-4
          py-1.5
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
        </button>
      </div>
    </div>
  );
}