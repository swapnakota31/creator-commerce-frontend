import {
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  Package,
  FolderKanban,
  Share2,
} from "lucide-react";

type SocialLinks = {
  instagram?: string;
  youtube?: string;
  twitter?: string;
};

type Props = {
  name: string;
  bio: string;
  image: string;
  products: number;
  collections: number;
  tagline: string;
  creatorCategory?: string;
  isVerified?: boolean;
  showTrustedBadge?: boolean;
  isOnline?: boolean;
  // TODO: populate from users table in backend
  socialLinks?: SocialLinks;
};

// Inline SVGs because lucide-react doesn't export Instagram/Youtube/Twitter
function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function StorefrontHeader({
  name,
  bio,
  image,
  products,
  collections,
  tagline,
  creatorCategory = "Digital Creator",
  isVerified = true,
  showTrustedBadge = true,
  isOnline = true,
  socialLinks,
}: Props) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Banner */}
      <div className="relative h-12 overflow-hidden bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
        <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/10" />
        <div className="absolute bottom-0 right-20 h-10 w-10 rounded-full bg-white/10" />
        <div className="absolute top-1 left-1/3 h-6 w-6 rounded-full bg-white/10" />
      </div>

      <div className="relative px-6 pb-4">

        {/* Profile Image */}
        <div className="absolute -top-8 left-6">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="h-16 w-16 rounded-full border-[3px] border-white object-cover shadow-md"
            />
            <span
              className={`
                absolute bottom-0.5 right-0.5
                h-3.5 w-3.5 rounded-full border-2 border-white
                ${isOnline ? "bg-emerald-400" : "bg-slate-300"}
              `}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-10 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT */}
          <div className="max-w-lg">

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5">
              {isVerified && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                  <BadgeCheck size={11} />
                  Verified Creator
                </span>
              )}

              {showTrustedBadge && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">
                  <ShieldCheck size={11} />
                  Trusted Picks
                </span>
              )}

              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-100 bg-amber-50 px-2.5 py-1 text-[11px] text-amber-700">
                <Sparkles size={11} />
                {creatorCategory}
              </span>
            </div>

            {/* Name */}
            <h1 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
              {name}
            </h1>

            {/* Bio */}
            <p className="mt-0.5 max-w-md text-sm leading-5 text-slate-500">
              {bio}
            </p>

            {/* Tagline */}
            <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-violet-600">
              <Sparkles size={12} />
              <span>{tagline}</span>
            </div>

            {/* Social Links */}
            {/* TODO: populated from users table — instagram, youtube, twitter fields */}
            {socialLinks && (
              <div className="mt-3 flex items-center gap-2">
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="
                      flex h-7 w-7 items-center justify-center rounded-full
                      border border-slate-200 bg-white text-slate-500
                      transition-all duration-200
                      hover:border-pink-200 hover:bg-pink-50 hover:text-pink-500
                    "
                  >
                    <InstagramIcon />
                  </a>
                )}

                {socialLinks.youtube && (
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="
                      flex h-7 w-7 items-center justify-center rounded-full
                      border border-slate-200 bg-white text-slate-500
                      transition-all duration-200
                      hover:border-red-200 hover:bg-red-50 hover:text-red-500
                    "
                  >
                    <YoutubeIcon />
                  </a>
                )}

                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="
                      flex h-7 w-7 items-center justify-center rounded-full
                      border border-slate-200 bg-white text-slate-500
                      transition-all duration-200
                      hover:border-sky-200 hover:bg-sky-50 hover:text-sky-500
                    "
                  >
                    <TwitterIcon />
                  </a>
                )}
              </div>
            )}

            {/* Stats */}
            <div className="mt-3 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-1.5">
                <Package size={13} className="text-violet-500" />
                <span className="text-sm font-bold text-slate-900">{products}</span>
                <span className="text-[11px] text-slate-500">Creator Picks</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-1.5">
                <FolderKanban size={13} className="text-violet-500" />
                <span className="text-sm font-bold text-slate-900">{collections}</span>
                <span className="text-[11px] text-slate-500">Collections</span>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-start gap-2">
            <button
              className="
                inline-flex items-center gap-1.5 rounded-full
                border border-slate-200 bg-white px-4 py-2
                text-sm font-medium text-slate-700
                transition-all duration-300
                hover:border-slate-300 hover:bg-slate-50
              "
            >
              <Share2 size={13} />
              Share Store
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}