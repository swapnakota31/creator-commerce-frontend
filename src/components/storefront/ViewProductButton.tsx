"use client";

import { ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Props = {
  affiliateUrl: string;
  productId: number | string;
};

export default function ViewProductButton({ affiliateUrl, productId }: Props) {
  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent({ type: "PRODUCT_CLICK", productId })
      }
      className="
        inline-flex items-center gap-2 rounded-full
        bg-violet-600 px-5 py-2.5
        text-sm font-semibold text-white
        transition-all duration-300 hover:bg-violet-700
      "
    >
      View Product
      <ExternalLink size={14} />
    </a>
  );
}