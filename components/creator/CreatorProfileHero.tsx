'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Edit3, MapPin, Link as LinkIcon, Camera as InstagramIcon, Play as YoutubeIcon, MessageSquare as TwitterIcon, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CreatorProfileHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full bg-[color:var(--color-card)] rounded-[24px] overflow-hidden shadow-sm border border-[color:var(--color-border)] mb-8"
    >
      {/* Banner */}
      <div className="h-48 md:h-64 w-full relative bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 dark:opacity-50" />
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 pb-10">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 md:-mt-20 gap-6 relative z-10">
          {/* Profile Photo */}
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-[color:var(--color-card)] border-4 border-[color:var(--color-card)] shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1587&auto=format&fit=crop" 
                alt="Creator"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-[color:var(--color-card)] rounded-full shadow-lg" />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Alex Rivera</h1>
                <p className="text-muted font-medium">@alexrivera_official</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[color:var(--color-border)] hover:bg-muted/50 transition-all font-medium">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] text-white font-semibold shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition-all">
                  <Edit3 size={18} />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              Digital creator & Product designer shaping the future of creator commerce. 
              Sharing my curated collection of premium assets and productivity toolkits. 
              Helping you build better, faster. 🚀
            </p>
            
            <div className="flex flex-wrap gap-4 text-muted">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} />
                <span className="text-sm font-medium">Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LinkIcon size={16} />
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">alexrivera.design</a>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-end lg:justify-end">
            {[InstagramIcon, YoutubeIcon, TwitterIcon, Send].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className={cn(
                  "p-3 rounded-xl bg-muted/30 hover:bg-primary/10 hover:text-primary transition-all duration-300",
                  "border border-transparent hover:border-primary/20"
                )}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
