'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderOpen, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const collections = [
  {
    title: "Summer Essentials '26",
    count: 24,
    description: "Our handpicked collection of must-have products for the 2026 summer season.",
    image: "https://images.unsplash.com/photo-1523381235212-d7b2d5299448?q=80&w=2670&auto=format&fit=crop",
    gradient: "from-orange-500/20 to-pink-500/20"
  },
  {
    title: "Minimalist Workspace",
    count: 18,
    description: "Curated tools and accessories for a clean and productive desk setup.",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2667&auto=format&fit=crop",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Creator Gear Kit",
    count: 32,
    description: "The exact equipment I use for my daily content creation workflow.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2670&auto=format&fit=crop",
    gradient: "from-purple-500/20 to-indigo-500/20"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 }
};

export default function CreatorFeaturedCollections() {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          Featured Collections
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">NEW</span>
        </h2>
        <button className="text-primary font-semibold text-sm hover:underline flex items-center gap-1 group">
          View all collections
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {collections.map((collection, i) => (
          <motion.div
            key={i}
            variants={item}
            className="group relative bg-[color:var(--color-card)] rounded-[24px] border border-[color:var(--color-border)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            {/* Image Section */}
            <div className="h-48 relative overflow-hidden">
              <Image
                src={collection.image} 
                alt={collection.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={cn("absolute inset-0 bg-gradient-to-t from-[color:var(--color-card)] via-transparent to-transparent opacity-60")} />
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-colors">
                <MoreHorizontal size={18} />
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <FolderOpen size={12} />
                  {collection.count} Products
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{collection.title}</h3>
              <p className="text-muted text-sm leading-relaxed line-clamp-2">
                {collection.description}
              </p>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((person) => (
                    <div key={person} className="w-8 h-8 rounded-full border-2 border-[color:var(--color-card)] bg-muted overflow-hidden">
                      <Image src={`https://i.pravatar.cc/100?u=${person + i}`} alt="User" width={32} height={32} />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[color:var(--color-card)] bg-muted flex items-center justify-center text-[10px] font-bold text-muted">
                    +12
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-[color:var(--color-border)] flex items-center justify-center text-muted group-hover:border-primary group-hover:text-primary transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>

            {/* Gradient Border Animation on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-[24px] pointer-events-none transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
