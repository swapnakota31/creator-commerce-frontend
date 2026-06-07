'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Folder, MousePointer2, Eye, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { 
    label: 'Total Products', 
    value: '48', 
    icon: Package, 
    trend: '+12%', 
    trendUp: true,
    color: 'from-blue-500/20 to-blue-600/20',
    iconColor: 'text-blue-600 dark:text-blue-400' 
  },
  { 
    label: 'Collections', 
    value: '12', 
    icon: Folder, 
    trend: '+2', 
    trendUp: true,
    color: 'from-purple-500/20 to-purple-600/20',
    iconColor: 'text-purple-600 dark:text-purple-400' 
  },
  { 
    label: 'Total Clicks', 
    value: '12.4K', 
    icon: MousePointer2, 
    trend: '+18.5%', 
    trendUp: true,
    color: 'from-emerald-500/20 to-emerald-600/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400' 
  },
  { 
    label: 'Profile Views', 
    value: '84.2K', 
    icon: Eye, 
    trend: '-4.2%', 
    trendUp: false,
    color: 'from-orange-500/20 to-orange-600/20',
    iconColor: 'text-orange-600 dark:text-orange-400' 
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CreatorProfileStats() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={item}
          className="bg-[color:var(--color-card)] p-6 rounded-[24px] border border-[color:var(--color-border)] shadow-sm hover:shadow-md transition-shadow group overflow-hidden relative"
        >
          {/* Decorative background pulse */}
          <div className={cn("absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br", stat.color)} />
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className={cn("p-3 rounded-2xl bg-muted/50 transition-colors group-hover:bg-white dark:group-hover:bg-muted/10", stat.iconColor)}>
              <stat.icon size={22} />
            </div>
            <div className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold",
              stat.trendUp ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-600"
            )}>
              {stat.trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {stat.trend}
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-muted">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
