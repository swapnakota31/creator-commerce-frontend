import Image from "next/image";

export default function CreatorImage() {
  return (
    <Image
      src="/images/creator-section.png"
      alt="Creator"
      width={600}
      height={600}
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
    />
  );
}
